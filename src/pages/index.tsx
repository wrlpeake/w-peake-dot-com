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
import HeadshotComponent from "../components/headshot";
import RevealTitleText from "../components/text-reveal";
import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png";
import github from "../images/github.png";
import favicon from "../images/favicon.png";

import "../styles/animation.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <html lang="en">
      <main style={pageStyles}>
        <HeadshotComponent />
        <RevealTitleText
          titleText={title}
          descriptionText={description}
          titleStyle={headingStyles}
          descriptionStyle={headingAccentStyles}
        />
        <p style={paragraphStyles}>
          {greeting}
          <span className="waving-hand-emoji">👋</span>
        </p>
        <p style={paragraphStyles}>{technical}</p>
        <p style={paragraphStyles}>{history}</p>
        <p style={paragraphStyles}>{experience}</p>
        <footer style={footerStyles}>
          <a href="https://www.linkedin.com/in/william-peake-270189141">
            <img src={linkedin} style={imageLinkStyle} alt="LinkedIn icon" />
          </a>
          <a href="mailto:william@wpeake.com">
            <img src={mail} style={imageLinkStyle} alt="Email icon" />
          </a>
          <a href="https://github.com/wrlpeake">
            <img src={github} style={imageLinkStyle} alt="GitHub icon" />
          </a>
        </footer>
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
