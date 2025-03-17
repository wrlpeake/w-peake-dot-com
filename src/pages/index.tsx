import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  pageStyles,
  headingStyles,
  headingAccentStyles,
  headshotStyle,
  paragraphStyles,
  codeStyles,
  footerStyles,
  imageLinkStyle,
} from "../styles/styles";
import HeadshotComponent from "../components/headshot";
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
        <h1 style={headingStyles}>
          William Peake
          <br />
          <span style={headingAccentStyles}>
            Software Engineer based in London, UK.
          </span>
        </h1>
        <p style={paragraphStyles}>
          — Hi, I'm Will <span className="waving-hand-emoji">👋</span>
        </p>
        <p style={paragraphStyles}>
          I have professional experience working with Java, Typescript & React,
          among other languages and frameworks, as well as infrastructure tools
          such as AWS, Kubernetes, Docker and Kafka. I am currently working for
          a US-headquarted tech consultancy, 8th Light Inc, as a Senior Software
          Engineer and Consultant.
        </p>
        <p style={paragraphStyles}>
          I found software development after a decade in sales and business
          development, predominantly in media, spending the vast majority of my
          time trying to understand client problems and design solutions to fit
          their needs. I apply this same thought process to software
          engineering, working with colleagues and clients to build high-quality
          software products that are intuitive and maintainable.
        </p>
        <p style={paragraphStyles}>
          Previous experience: Ticketmaster, Digital Partners (a Munich Re
          company), Financial Times, 8th Light.
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
    </html>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <head>
    <title>William Peake | Software Engineer</title>
    <link rel="icon" type="image/x-icon" href={favicon}></link>
  </head>
);
