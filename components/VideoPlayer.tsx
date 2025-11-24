"use client";

import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface VideoPlayerProps {
    videoId: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            modestbranding: 1,
            rel: 0, // Don't show related videos from other channels
            playsinline: 1, // Play inline on mobile
            fs: 0, // Disable fullscreen to keep user in app
            origin: typeof window !== 'undefined' ? window.location.origin : undefined,
        },
    };

    return (
        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg bg-black">
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={onPlayerReady}
                className="w-full h-full"
                iframeClassName="w-full h-full"
            />
        </div>
    );
};
