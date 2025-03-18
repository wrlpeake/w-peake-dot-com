import React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { pageStyles, headingStyles, paragraphStyles } from "../styles/styles";
import favicon from "../images/favicon.png";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>Sorry, I couldn’t find what you were looking for.</p>
      <p style={paragraphStyles}><Link to="/">Go Home</Link></p>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <head>
    <title>William Peake | Page not found</title>
    <link rel="icon" type="image/x-icon" href={favicon}></link>
    <meta charSet="UTF-8" />
    <meta name="description" content="Page not found" />
    <meta name="author" content="William Peake" />
  </head>
);