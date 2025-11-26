import React, { useState, useEffect } from 'react';
import { Volume2, Square, Play, Pause } from 'lucide-react';

interface TextToSpeechProps {
    text: string;
    size?: 'sm' | 'md';
    className?: string;
    autoPlay?: boolean;
}

export const TextToSpeech: React.FC<TextToSpeechProps> = ({ text, size = 'md', className = '', autoPlay = false }) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

    const cleanTextForSpeech = (rawText: string): string => {
        return rawText
            // Remove markdown bold/italic (* or _)
            .replace(/(\*\*|__)(.*?)\1/g, '$2')
            .replace(/(\*|_)(.*?)\1/g, '$2')
            // Remove markdown links [text](url) -> text
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            // Remove headers (#)
            .replace(/^#+\s+/gm, '')
            // Remove emojis (broad range)
            .replace(/[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '')
            // Remove specific symbols that sound bad
            .replace(/[*_`~]/g, '')
            .trim();
    };

    useEffect(() => {
        const synth = window.speechSynthesis;
        const spokenText = cleanTextForSpeech(text);

        const createUtterance = () => {
            console.log("Creating utterance for:", spokenText.substring(0, 20) + "...");
            const u = new SpeechSynthesisUtterance(spokenText);
            u.rate = 0.9; // Default rate
            u.pitch = 1;

            const voices = synth.getVoices();
            console.log("Available voices:", voices.length);

            // Priority list for voice selection
            const preferredVoice = voices.find(v =>
                v.name.includes('Google हिन्दी') || // Google's Hindi/Indian English often sounds natural
                v.name.includes('Google en-IN') ||
                v.name.includes('India') ||
                v.name.includes('Indian') ||
                v.lang === 'en-IN' ||
                v.lang === 'hi-IN'
            ) || voices.find(v =>
                v.name.includes('Google US English') ||
                v.name.includes('Samantha') ||
                v.name.includes('Female')
            ) || voices[0];

            if (preferredVoice) {
                console.log("Selected voice:", preferredVoice.name, preferredVoice.lang);
                u.voice = preferredVoice;
                // Adjust rate slightly for Indian voices as they can be fast
                if (preferredVoice.lang.includes('IN') || preferredVoice.name.includes('India')) {
                    u.rate = 0.9;
                }
            }

            u.onstart = () => console.log("Speech started");
            u.onend = () => {
                console.log("Speech ended");
                setIsSpeaking(false);
                setIsPaused(false);
            };

            u.onerror = (e) => {
                // Ignore 'interrupted' or 'canceled' errors which are normal when stopping/switching
                if (e.error === 'interrupted' || e.error === 'canceled') {
                    console.log("Speech interrupted (normal)");
                } else {
                    console.error("Speech synthesis error:", e);
                }
                setIsSpeaking(false);
                setIsPaused(false);
            };

            setUtterance(u);

            // Auto-play if enabled
            if (autoPlay) {
                console.log("Auto-playing speech...");
                // Small delay to ensure UI is ready and to feel natural
                setTimeout(() => {
                    synth.cancel(); // Cancel any previous speech
                    synth.speak(u);
                    setIsSpeaking(true);
                    setIsPaused(false);
                }, 500);
            }
        };

        if (synth.getVoices().length > 0) {
            createUtterance();
        } else {
            synth.onvoiceschanged = () => {
                console.log("Voices changed event fired");
                createUtterance();
            };
        }

        return () => {
            synth.cancel();
            // Don't nullify onvoiceschanged globally as it might affect other components
        };
    }, [text, autoPlay]);

    const handlePlay = () => {
        console.log("Play clicked");
        const synth = window.speechSynthesis;

        if (isPaused) {
            console.log("Resuming...");
            synth.resume();
            setIsPaused(false);
            setIsSpeaking(true);
        } else {
            console.log("Starting new speech...");
            synth.cancel();
            if (utterance) {
                synth.speak(utterance);
                setIsSpeaking(true);
                setIsPaused(false);
            } else {
                console.log("Utterance not ready, creating fallback");
                const spokenText = cleanTextForSpeech(text);
                const u = new SpeechSynthesisUtterance(spokenText);
                synth.speak(u);
                setIsSpeaking(true);
                setIsPaused(false);
            }
        }
    };

    const handlePause = () => {
        window.speechSynthesis.pause();
        setIsPaused(true);
        setIsSpeaking(false);
    };

    const handleStop = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
    };

    const handleReset = () => {
        console.log("Resetting speech engine...");
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
    };

    const iconSize = size === 'sm' ? 16 : 20;

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {!isSpeaking && !isPaused ? (
                <button
                    onClick={handlePlay}
                    className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
                    title="Read Aloud"
                >
                    <Volume2 size={iconSize} />
                </button>
            ) : (
                <>
                    {isSpeaking ? (
                        <button
                            onClick={handlePause}
                            className="p-2 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors"
                            title="Pause"
                        >
                            <Pause size={iconSize} />
                        </button>
                    ) : (
                        <button
                            onClick={handlePlay}
                            className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
                            title="Resume"
                        >
                            <Play size={iconSize} />
                        </button>
                    )}
                    <button
                        onClick={handleStop}
                        className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                        title="Stop"
                    >
                        <Square size={iconSize} />
                    </button>
                </>
            )}
            {/* Hidden Reset Button for debugging */}
            <button
                onClick={handleReset}
                className="text-xs text-slate-300 hover:text-slate-500"
                title="Reset Audio"
            >
                ↻
            </button>
        </div>
    );
};
