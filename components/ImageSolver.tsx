"use client";

import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X, Loader, Send } from 'lucide-react';
import { TextToSpeech } from './TextToSpeech';

export const ImageSolver: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [prompt, setPrompt] = useState("");
    const [solution, setSolution] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setError("Image size should be less than 5MB");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setSelectedImage(base64String.split(',')[1]); // Remove data:image/jpeg;base64, prefix
                setPreviewUrl(base64String);
                setError("");
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            if (file.size > 5 * 1024 * 1024) {
                setError("Image size should be less than 5MB");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setSelectedImage(base64String.split(',')[1]);
                setPreviewUrl(base64String);
                setError("");
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSolve = async () => {
        if (!selectedImage) return;

        setIsLoading(true);
        setError("");
        setSolution("");

        try {
            const response = await fetch('/api/solve-image', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    image: selectedImage,
                    prompt: prompt || "Solve this problem step-by-step. If it's a diagram, explain it in detail."
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setSolution(data.solution);
        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : "Failed to solve the problem. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const clearImage = () => {
        setSelectedImage(null);
        setPreviewUrl(null);
        setSolution("");
        setError("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="bg-white/20 p-1.5 rounded-full">
                        <ImageIcon size={20} />
                    </div>
                    <h3 className="font-bold">AI Problem Solver</h3>
                </div>
            </div>

            <div className="p-6">
                {!previewUrl ? (
                    <div
                        className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer"
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageSelect}
                        />
                        <div className="bg-indigo-50 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Upload size={32} />
                        </div>
                        <p className="text-slate-700 font-medium mb-1">Click to upload or drag & drop</p>
                        <p className="text-slate-500 text-sm">Upload a math problem or science diagram</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                            <img src={previewUrl} alt="Problem" className="max-h-64 mx-auto object-contain" />
                            <button
                                onClick={clearImage}
                                className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Add specific instructions (optional)..."
                                className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                                onClick={handleSolve}
                                disabled={isLoading}
                                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {isLoading ? <Loader size={18} className="animate-spin" /> : <Send size={18} />}
                                {isLoading ? 'Solving...' : 'Solve'}
                            </button>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                        {error}
                    </div>
                )}

                {solution && (
                    <div className="mt-6 border-t border-slate-100 pt-6">
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="font-bold text-slate-800">Solution:</h4>
                            <TextToSpeech text={solution} size="sm" />
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 text-slate-700 text-sm leading-relaxed whitespace-pre-line border border-slate-200">
                            {solution}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
