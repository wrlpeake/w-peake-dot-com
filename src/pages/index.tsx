import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  pageStyles,
  headingStyles,
  headingAccentStyles,
  paragraphStyles,
  codeStyles,
  footerStyles,
  imageLinkStyle,
} from "../styles/styles";
import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png";
import github from "../images/github.png";
import favicon from "../images/favicon.png";
import "../styles/animation.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        William Peake
        <br />
        <span style={headingAccentStyles}>
          Software Engineer based in London, UK.
        </span>
      </h1>
      <p style={paragraphStyles}>
        <code style={codeStyles}>
          — Hi, I'm Will <span className="waving-hand-emoji">👋</span>
        </code>
      </p>
      <p style={paragraphStyles}>
        <code style={codeStyles}>
          With professional experience in Java, Typescript, Ruby & React, among
          other languages and frameworks, I am currently working for a global
          tech consultancy as a full-stack software developer and consultant. I
          found software development after a decade in sales and business
          development, predominantly in media, spending the vast majority of my
          time trying to understand client problems and design solutions to fit
          their needs. I apply this same thought process to software
          engineering, working with colleagues and clients to build high-quality
          software products that are intuitive and maintainable.
        </code>
      </p>
      <p style={paragraphStyles}>
        <code style={codeStyles}>
          For freelance enquires, please contact me via email or linkedin below.
          Thanks!
        </code>
      </p>
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
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <head>
    <title>William Peake | Full-Stack Software Engineer</title>
    <link rel="icon" type="image/x-icon" href={favicon}></link>
  </head>
);
