import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { pageStyles, headingStyles, headingAccentStyles } from "../styles/pageStyles"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        wpeake.com
        <br />
        <span style={headingAccentStyles}>— site under construction...</span>
      </h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
