"use client";
import React from 'react';

function YouTubePlayer({ videoId }) {
    console.log("YouTubePlayer received videoId:", videoId); // Debugging

    if (!videoId) {
        console.log("YouTubePlayer: No videoId, not rendering."); // Debugging
        return null;
    }

    return (
        <div className="flex flex-col border rounded-md shadow-md p-4 mt-4 items-center ">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Video liên quan:</h3>
            <div className=" aspect-w-16 aspect-h-9">
                <iframe
                    className=" rounded-md"
                    src={`http://www.youtube.com/embed/${videoId}`}  // Corrected URL
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default YouTubePlayer;