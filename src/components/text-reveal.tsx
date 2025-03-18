import React from "react";
import { motion, MotionStyle } from "motion/react";

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

export default function RevealTitleText({
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
