import React, { useState, useEffect } from "react";
import me from "../images/me.png";

const HeadshotComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const responsiveStyles: React.CSSProperties = isMobile
    ? {
        width: "7.5rem",
        height: "7.5rem",
        borderRadius: "50%",
        padding: 10,
        display: "inline-block",
        marginLeft: "auto",
        marginRight: "auto",
      }
    : {
        width: "10rem",
        height: "10rem",
        borderRadius: "50%",
        float: "right",
        padding: 20,
      };

  return <img style={responsiveStyles} src={me} alt="A photo of me" />;
};

export default HeadshotComponent;
