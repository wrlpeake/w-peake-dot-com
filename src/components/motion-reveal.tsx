import React, {useState, useEffect, ReactNode } from "react";
import { motion, MotionStyle } from "motion/react";
import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png";
import github from "../images/github.png";
import HeadshotComponent from "./headshot";

export const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

interface RevealTitleTextProps {
  titleText: String;
  descriptionText: String;
  titleStyle?: MotionStyle;
  descriptionStyle?: MotionStyle;
}

export function RevealTitleText({
  titleText,
  descriptionText,
  titleStyle,
  descriptionStyle,
}: RevealTitleTextProps) {
  return (
    <motion.h1
      className="load-screen--message"
      variants={sentence}
      initial="hidden"
      animate="visible"
      style={titleStyle}
    >
      {titleText.split("").map((char: string, index: number) => {
        return (
          <motion.span key={`${char}-${index}`} variants={letter}>
            {char}
          </motion.span>
        );
      })}
      <br />
      {descriptionText.split("").map((char: string, index: number) => {
        return (
          <motion.span
            style={descriptionStyle}
            key={`${char}-${index}`}
            variants={letter}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}

interface DelayedParagraphProps {
  delay: number;
  text: string; 
  style?: React.CSSProperties;
  additionalSpan?: ReactNode; 
}

export const DelayedParagraph: React.FC<DelayedParagraphProps> = ({ delay, text, style, additionalSpan }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 4 }}
    >
      {isVisible && <p style={style}>{text} {additionalSpan}</p>}
    </motion.div>
  );
};

interface DelayedFooterProps {
  delay: number;
  footerStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
}

export const DelayedFooter: React.FC<DelayedFooterProps> = ({ delay, footerStyle, imageStyle }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 4 }}
    >
      {isVisible && 
        <footer style={footerStyle}>
        <a href="https://www.linkedin.com/in/william-peake-270189141">
          <img src={linkedin} style={imageStyle} alt="LinkedIn icon" />
        </a>
        <a href="mailto:william@wpeake.com">
          <img src={mail} style={imageStyle} alt="Email icon" />
        </a>
        <a href="https://github.com/wrlpeake">
          <img src={github} style={imageStyle} alt="GitHub icon" />
        </a>
      </footer>}
    </motion.div>
  );
};

interface DelayedHeadshotProps {
  delay: number;
}

export const DelayedHeadshot: React.FC<DelayedHeadshotProps> = ({ delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 4 }}
    >
      {isVisible && <HeadshotComponent />}
    </motion.div>
  );
};

