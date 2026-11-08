import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi URL change hoga, page top par scroll ho jayega
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "smooth" bhi kar sakte hain, par instant zyada better lagta hai
    });
  }, [pathname]);

  return null; // Yeh kuch render nahi karta, bas kaam karta hai
};

export default ScrollToTop;
