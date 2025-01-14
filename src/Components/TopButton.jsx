import React, { useState, useEffect } from "react";
import ArrowUp from "../../public/ArrowUp.svg"; // Replace with your arrow image/icon

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="arrowup">
          <img src={ArrowUp} alt="Back to top" />
        </button>
      )}
    </div>
  );
}
