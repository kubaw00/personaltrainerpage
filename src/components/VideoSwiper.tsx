"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const videos = [
  { label: "Ania", videoId: "https://www.youtube.com/watch?v=1M4LbBFM1UY" },
  { label: "Basia", videoId: "https://www.youtube.com/watch?v=_aZbk5cs6Tw" },
  { label: "Dawid", videoId: "https://www.youtube.com/watch?v=LVCSwN_JBoQ" },
  { label: "Dawid", videoId: "https://www.youtube.com/watch?v=RESRATlF9Eg" },
  { label: "Filip", videoId: "https://www.youtube.com/watch?v=FGSEZl4GLQU" },
];

export default function VideoGrid() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const onActivate = (idx: number) => {
    setActiveIndex(idx);
    setPlayingIndex(idx);
  };

  return (
    <>
      <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map(({ videoId, label }, idx) => {
          // W mobile pokazuj tylko 3 pierwsze jeśli showAllMobile = false
          const isHiddenOnMobile = !showAllMobile && idx >= 3;
          return (
            <div
              key={idx}
              className={`relative w-full ${isHiddenOnMobile ? "max-sm:hidden" : ""}`}
              style={{ paddingTop: "177.78%" }} // 9:16 proporcje pionowe
            >
              <div
                className="absolute top-0 left-0 h-full w-full"
                onClick={() => onActivate(idx)}
              >
                <ReactPlayer
                  src={videoId}
                  controls
                  playing={playingIndex === idx}
                  onPlay={() => setPlayingIndex(idx)}
                  onPause={() => setPlayingIndex(null)}
                  width="100%"
                  height="100%"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    pointerEvents: activeIndex === idx ? "auto" : "none",
                  }}
                />
                <div className="absolute right-0 bottom-10 left-0 text-center text-2xl font-semibold text-white drop-shadow">
                  {label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Przycisk widoczny tylko na max-sm */}
      {!showAllMobile && (
        <div className="mt-6 flex justify-center sm:hidden">
          <button
            className="w-full rounded bg-[#DC252A] px-5 py-2 text-white shadow hover:bg-[#8F0000] active:bg-[#8F0000]"
            onClick={() => setShowAllMobile(true)}
          >
            Zobacz więcej opinii
          </button>
        </div>
      )}
    </>
  );
}
