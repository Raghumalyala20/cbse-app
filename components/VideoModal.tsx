"use client";

import React from 'react';
import { X, ExternalLink, Youtube } from 'lucide-react';

interface VideoModalProps {
    videoId: string;
    title: string;
    onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ videoId, title, onClose }) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

    const handleWatchOnYouTube = () => {
        window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        aria-label="Close"
                    >
                        <X size={24} className="text-slate-600" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                    <div className="bg-red-50 p-6 rounded-lg mb-6">
                        <Youtube size={64} className="text-red-600 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-slate-900 mb-2">Watch on YouTube</h4>
                        <p className="text-slate-600 mb-4">
                            This video will open in a new tab. You can return to the app anytime.
                        </p>
                    </div>

                    <button
                        onClick={handleWatchOnYouTube}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg"
                    >
                        <Youtube size={20} />
                        Open YouTube Video
                        <ExternalLink size={16} />
                    </button>
                </div>

                {/* Footer */}
                <div className="p-4 bg-blue-50 border-t border-blue-100 rounded-b-xl">
                    <p className="text-sm text-blue-800 text-center">
                        💡 <strong>Tip:</strong> After watching, close the YouTube tab to return here and continue learning!
                    </p>
                </div>
            </div>
        </div>
    );
};
