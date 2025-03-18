import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  pageStyles,
  headingStyles,
  headingAccentStyles,
  paragraphStyles,
  footerStyles,
  imageLinkStyle,
} from "../styles/styles";
import {
  title,
  description,
  greeting,
  technical,
  history,
  experience,
} from "../text/index-page-text";
import { RevealTitleText, DelayedParagraph, DelayedFooter, DelayedHeadshot } from "../components/motion-reveal";
import favicon from "../images/favicon.png";

import "../styles/animation.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <html lang="en">
      <main style={pageStyles}>
        <DelayedHeadshot delay={0} />
        <RevealTitleText
          titleText={title}
          descriptionText={description}
          titleStyle={headingStyles}
          descriptionStyle={headingAccentStyles}
        />
        <DelayedParagraph delay={4000} text={greeting} style={paragraphStyles} additionalSpan={<span className="waving-hand-emoji">👋</span>} />
        <DelayedParagraph delay={6000} text={technical} style={paragraphStyles} />
        <DelayedParagraph delay={8000} text={history} style={paragraphStyles} />
        <DelayedParagraph delay={10000} text={experience} style={paragraphStyles} />

        <DelayedFooter delay={12000} footerStyle={footerStyles} imageStyle={imageLinkStyle} />
      </main>
    </html>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <head>
    <title>William Peake | Software Engineer</title>
    <link rel="icon" type="image/x-icon" href={favicon}></link>
    <meta charSet="UTF-8" />
    <meta name="description" content="William Peake - Software Engineer" />
    <meta
      name="keywords"
      content="William Peake, Software, Engineer, Developer"
    />
    <meta name="author" content="William Peake" />
  </head>
);
