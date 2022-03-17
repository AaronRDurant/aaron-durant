import * as React from "react"
// import { Link, graphql } from "gatsby"
import { graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"About • " + siteTitle} />
      <article>
        <header>
          <div className="page-header">
            <h1>About Me</h1>
            <p>
              Web developer, avid stationary cyclist, and wannabe writer
            </p>
          </div>
        </header>

        <section>
          <p>I&#39;m Aaron Durant, an aspiring front-end web developer in Michigan fascinated by the intersection of web design and content.</p>
          <p>Web development was something I thought I&#39;d learn about later in life as a hobby, but I recognized my affinity for it in the second half of 2020 and immediately began growing my skills. I aim to start in my first role as a front-end developer in 2022.</p>
          <p>I opted out of college and spent time during and after high school maintaining a website and producing a podcast about motorsports. I attended three dozen events as an accredited media member and learned a lot.</p>
          <p>I enjoy working out (riding something with pedals and lifting weights in particular), snowboarding, playing the drums, reading, spending time with my family and girlfriend, and being as close to the stage as possible at heavy metal concerts.</p>
        </section>
      </article>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
