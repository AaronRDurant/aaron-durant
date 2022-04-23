import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const projectsList = [
  {
    name: 'Personal Website',
    description: 'My tiny corner of the internet, built with Gatsby, hosted on Netlify, and maintained with incremental correctness.',
    words: 'https://www.aarondurant.com/hello-world/',
    code: 'personal-website',
    demo: 'https://www.aarondurant.com',
    emoji: '🤘🏻',
    label: 'Hand making devil horns sign emoji'
  },
  {
    name: 'ARMA Sport Concept',
    description: 'Reimagining the website for nutritional supplement brand ARMA Sport using React.',
    words: 'https://www.aarondurant.com/hello-world/',
    code: 'arma-concept',
    demo: 'https://arma-concept.netlify.app',
    emoji: '💪🏻',
    label: 'Flexed bicep emoji'
  },
  {
    name: 'Pipe Dream Blog',
    description: 'A blog built using Next.js and the Ghost CMS. I aim to consistently write here about motocross, Supercross, fitness, and more.',
    words: 'https://www.aarondurant.com/hello-world/',
    code: 'pipe-dream',
    demo: 'https://nextjs-ghost-blog.netlify.app',
    emoji: '🏁',
    label: 'Checkered flag emoji'
  },
  {
    name: 'Some Sort of Full-Stack App',
    description: 'This is a to-be-determined and yet-to-be-built project. More to come!',
    words: 'https://www.aarondurant.com/hello-world/',
    code: 'fastflix-backend',
    demo: 'https://nextjs-ghost-blog.netlify.app',
    emoji: '💻',
    label: 'Laptop computer emoji'
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
              My favorite few web development projects. Source code is on <Link to="https://github.com/AaronRDurant" target="_blank">GitHub</Link>.
            </p>
          </div>
        </header>

        <section>
          {projectsList.map((project) => (
            <div className="project" key={project.name}>
              <div>
                <span role="img" aria-label="{project.label}" className="emoji">{project.emoji}</span>
              </div>
              <div>
                <h2 className="name">{project.name}</h2>
                <p className="description">{project.description}</p>
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
