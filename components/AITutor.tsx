"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Mic } from 'lucide-react';
import { syllabus } from '../data/syllabus';
import { TextToSpeech } from './TextToSpeech';

interface Message {
    id: string;
    role: 'bot' | 'user';
    text: string;
}

declare global {
    interface Window {
        webkitSpeechRecognition: any;
    }
}

export const AITutor: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 'welcome', role: 'bot', text: "Hi! I'm your AI Tutor. Ask me anything about your syllabus! 🤖" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isListening, setIsListening] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const startListening = () => {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'en-US';

            recognition.onstart = () => {
                setIsListening(true);
            };

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setInputValue(transcript);
                handleSend(transcript);
            };

            recognition.onend = () => {
                setIsListening(false);
            };

            recognition.start();
        } else {
            alert("Voice input is not supported in this browser.");
        }
    };

    const findAnswer = (query: string): string => {
        const lowerQuery = query.toLowerCase();
        let bestMatch = { score: 0, text: "", title: "" };

        // Extract meaningful keywords (filter out common words)
        const stopWords = ['what', 'is', 'the', 'a', 'an', 'how', 'why', 'when', 'where', 'can', 'you', 'tell', 'me', 'about', 'explain'];
        const keywords = lowerQuery
            .split(/\s+/)
            .filter(k => k.length > 2 && !stopWords.includes(k));

        // Search through syllabus
        syllabus.forEach(grade => {
            grade.subjects.forEach(subject => {
                subject.chapters.forEach(chapter => {
                    chapter.concepts.forEach(concept => {
                        let score = 0;
                        const title = concept.title.toLowerCase();
                        const explanation = (concept.explanation || '').toLowerCase();
                        const keyPoints = (concept.keyPoints || []).join(' ').toLowerCase();
                        const allContent = `${title} ${explanation} ${keyPoints}`;

                        // Score based on keyword matches
                        keywords.forEach(keyword => {
                            // Exact title match gets highest score
                            if (title === keyword || title.includes(keyword)) {
                                score += 10;
                            }
                            // Title contains keyword
                            else if (title.includes(keyword)) {
                                score += 5;
                            }
                            // Explanation contains keyword
                            if (explanation.includes(keyword)) {
                                score += 3;
                            }
                            // Key points contain keyword
                            if (keyPoints.includes(keyword)) {
                                score += 2;
                            }
                        });

                        // Bonus for multiple keyword matches
                        const matchCount = keywords.filter(k => allContent.includes(k)).length;
                        score += matchCount * 2;

                        // Update best match if this is better
                        if (score > bestMatch.score) {
                            const responseText = concept.explanation
                                ? `${concept.explanation}\n\n**Key Points:**\n${(concept.keyPoints || []).slice(0, 3).map(p => `• ${p}`).join('\n')}`
                                : concept.keyPoints?.[0] || 'No detailed explanation available.';

                            bestMatch = {
                                score,
                                text: responseText,
                                title: concept.title
                            };
                        }
                    });
                });
            });
        });

        if (bestMatch.score > 0) {
            return `**${bestMatch.title}**\n\n${bestMatch.text}`;
        } else {
            return "I couldn't find that topic in your syllabus. Try asking about specific topics like:\n• Circles\n• Newton's Laws\n• Heron's Formula\n• Atoms and Molecules\n• Gravitation";
        }
    };

    const handleSend = (text: string = inputValue) => {
        if (!text.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), role: 'user', text: text };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");

        // Simulate thinking delay
        setTimeout(() => {
            const answer = findAnswer(userMsg.text);
            const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'bot', text: answer };
            setMessages(prev => [...prev, botMsg]);
        }, 600);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 sm:w-96 mb-4 flex flex-col overflow-hidden transition-all duration-300 ease-in-out" style={{ height: '500px' }}>
                    {/* Header */}
                    <div className="bg-indigo-600 p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/20 p-1.5 rounded-full">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">AI Tutor</h3>
                                <p className="text-xs text-indigo-100">Always here to help!</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${msg.role === 'user'
                                    ? 'bg-indigo-600 text-white rounded-br-none'
                                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                                    }`}>
                                    <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                                    {msg.role === 'bot' && (
                                        <div className="mt-2 pt-2 border-t border-slate-100 flex justify-end">
                                            <TextToSpeech text={msg.text} size="sm" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-slate-200">
                        <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 border border-slate-200 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask a question..."
                                className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-400"
                            />
                            <button
                                onClick={startListening}
                                className={`p-1.5 rounded-full transition-colors ${isListening ? 'bg-red-500 text-white animate-pulse' : 'text-slate-500 hover:bg-slate-200'}`}
                                title="Speak"
                            >
                                <Mic size={16} />
                            </button>
                            <button
                                onClick={() => handleSend()}
                                disabled={!inputValue.trim()}
                                className="p-1.5 rounded-full bg-indigo-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen ? 'bg-red-500 rotate-90' : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
            >
                {isOpen ? <X size={28} color="white" /> : <Bot size={28} color="white" />}
            </button>
        </div>
    );
};
