import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const projectsList = [
  {
    name: 'Personal Website',
    description: 'Built with Gatsby and hosted on Netlify. This version of aarondurant.com marks a significant step forward from the personal websites I made on WordPress over the last several years but never really updated.',
    code: 'personal-website',
    demo: 'https://www.aarondurant.com',
    emoji: '🤘🏻',
    label: 'Hand making devil horns sign emoji'
  },
  {
    name: 'Dashboard',
    description: 'I wanted to add to my repertoire the skills necessary to create a corporate-themed admin panel. The result: a dashboard, three pages sourcing dummy data, four mini apps, seven functional charts, and experience with Tailwind CSS, Syncfusion, and more.',
    code: 'dashboard',
    demo: 'https://dashboard-ad.netlify.app/',
    emoji: '📊',
    label: 'Bar chart emoji'
  },
  {
    name: 'ARMA Sport Concept',
    description: 'In putting my spin on the website of nutritional supplement brand ARMA Sport, I fortified my knowledge of React and CSS, including Flexbox, Grid, the BEM methodology, media queries, and more.',
    code: 'arma-concept',
    demo: 'https://arma-concept.netlify.app',
    emoji: '💪🏻',
    label: 'Flexed bicep emoji'
  },
  {
    name: 'Pipe Dream Blog',
    description: 'Given my background in writing about racing, ceaseless thoughts about writing about motocross, and my deep interest in static websites paired with a headless CMS, it was only a matter of time before Pipe Dream hit a server near you.',
    code: 'pipe-dream',
    demo: 'https://pipedreammoto.com',
    emoji: '🏁',
    label: 'Checkered flag emoji'
  }
]

const Projects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"Projects • " + siteTitle} />
      <article>
        <header>
          <div className="page-header">
            <h1>Projects</h1>
            <p>
              My favorite web development projects. Source code is on <Link to="https://github.com/AaronRDurant" target="_blank">GitHub</Link>.
            </p>
          </div>
        </header>

        <section>
          {projectsList.map((project) => (
            <div className="project" key={project.name}>
              <div className="desktop-only">
                <span role="img" aria-label={project.label} className="emoji">{project.emoji}</span>
              </div>
              <div>
                <h2 className="name">{project.name}</h2>
                <p className="description">{project.description}</p>
                <div className="buttons">
                  <a
                    href={`https://github.com/AaronRDurant/${project.code}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
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
