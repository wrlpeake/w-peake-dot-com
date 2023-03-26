import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { pageStyles, headingStyles, headingAccentStyles, paragraphStyles, codeStyles, linkStyle, footerStyles } from "../styles/pageStyles"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        William Peake
        <br />
        <span style={headingAccentStyles}>Full-Stack Software Engineer based in London, UK.</span>
      </h1>
      <p style={paragraphStyles}>
          <code style={codeStyles}>— site under construction... 🏗</code>
      </p>
      <footer style={footerStyles}>
        <a style={linkStyle} href="https://www.linkedin.com/in/william-peake-270189141">LinkedIn</a>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>William Peake | Full-Stack Software Engineer</title>
