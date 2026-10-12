import React from "react";
import "./ForegroundCelebration.css";

const ForegroundCelebration = () => {
  const elements = Array.from({ length: 18 });

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {elements.map((_, i) => {
        const isHeart = i % 2 === 0;
        const randomLeft = Math.random() * 100;
        const randomDuration = Math.random() * 6 + 6;
        const randomDelay = Math.random() * 5;
        const randomScale = Math.random() * 0.7 + 0.5;

        return (
          <div
            key={i}
            className="absolute bottom-[-50px] animate-flyUp"
            style={{
              left: `${randomLeft}%`,
              animationDuration: `${randomDuration}s`,
              animationDelay: `${randomDelay}s`,
              transform: `scale(${randomScale})`,
              opacity: 0.35,
            }}
          >
            {isHeart ? (
              <span className="text-pink-500 text-xl drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
                ❤️
              </span>
            ) : (
              <span className="inline-block w-2.5 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-sm rotate-45 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ForegroundCelebration;
