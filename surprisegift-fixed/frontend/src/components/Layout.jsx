// // import React from "react";
// // import FloatingBalloons from "./FloatingBalloons";

// // const Layout = ({ children }) => {
// //   return (
// //     <div className="min-h-screen bg-[#0b0614] text-white relative overflow-hidden font-sans">
// //       {/* Background Glow Accents */}
// //       <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
// //       <div className="absolute top-1/3 right-10 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>

// //       {/* Floating Heart Balloons Background */}
// //       <FloatingBalloons />

// //       {/* Main Content */}
// //       <div className="relative z-10">{children}</div>
// //     </div>
// //   );
// // };

// // export default Layout;

// import React from "react";
// import ForegroundCelebration from "./ForegroundCelebration";

// const Layout = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-[#0b0614] text-white relative overflow-hidden font-sans">
//       {/* Foreground Celebration Effects (Hearts & Ribbons flying OVER the content) */}
//       <ForegroundCelebration />

//       {/* Main Page Content */}
//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import ForegroundCelebration from "./ForegroundCelebration";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0b0614] text-white relative overflow-hidden font-sans">
      {/* Foreground Hearts & Party Ribbons Flying on EVERY PAGE */}
      <ForegroundCelebration />

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
