import React, { useEffect, useState } from "react";
import "../App.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleElementHover = () => {
      setIsHovered(true);
    };

    const handleElementLeave = () => {
      setIsHovered(false);
    };

    document.addEventListener("mousemove", updateCursorPosition);

    const clickableElements = document.querySelectorAll("a, button");
    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleElementHover);
      element.addEventListener("mouseleave", handleElementLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);

      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleElementHover);
        element.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className={isHovered ? "hovered" : ""}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default CustomCursor;
