import React from "react";
import "./FloatingBalloons.css"; // Iska CSS neeche hai

const FloatingBalloons = () => {
  // Kuch random balloons generate karte hain background ke liye
  const balloons = Array.from({ length: 15 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {balloons.map((_, index) => {
        const randomLeft = Math.random() * 100; // Random horizontal position
        const randomDuration = Math.random() * 10 + 10; // 10s to 20s slow motion
        const randomDelay = Math.random() * 5; // Staggered delay
        const randomScale = Math.random() * 0.6 + 0.4; // Random sizes

        return (
          <div
            key={index}
            className="absolute bottom-[-100px] text-pink-500/20 animate-float"
            style={{
              left: `${randomLeft}%`,
              animationDuration: `${randomDuration}s`,
              animationDelay: `${randomDelay}s`,
              transform: `scale(${randomScale})`,
            }}
          >
            {/* Heart Shape SVG */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingBalloons;
