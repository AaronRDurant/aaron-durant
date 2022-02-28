import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

/* import personal from '../images/AD-icon.png'

const projectsList = [
  {
    name: 'Personal Website',
    slug: 'personal-website',
    tagline: 'My tiny corner of the internet, built with Gatsby.',
    image: personal,
    url: 'https://www.aarondurant.com/',
  }
] */

const Projects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"Projects • " + siteTitle} />
      <article>
        <header>
          <div className="container">
            <h1>Projects</h1>
            <p className="description">
              Some stuff I've worked on, viewable for the most part on <Link to="https://github.com/AaronRDurant" target="_blank">GitHub</Link>.
            </p>
          </div>
        </header>

        <section className="projects large container">
          <p>My coding projects will be displayed here, likely along with other stuff that wasn't necessarily web development related, like <Link to="https://www.theapex.racing/" target="_blank">The Apex</Link>. Currently coming up with a nice way to lay them out!</p>
        </section>
      </article>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
