import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const projectsList = [
  {
    name: 'Personal Website',
    slug: 'personal-website',
    description: 'My tiny corner of the internet.',
    emoji: '🤘🏻',
    label: 'Hand making devil horns sign',
    url: 'https://www.aarondurant.com/',
  },
  {
    name: 'fastFlix (React)',
    slug: 'fastFlix-React-client',
    description: 'The front-end of the web app fastFlix, built with React.',
    emoji: '🔯',
    label: 'Six-pointed star',
  },
  {
    name: 'fastFlix (Angular)',
    slug: 'fastFlix-Angular-client',
    description: 'An alternative front-end for the web app fastFlix, built with Angular.',
    emoji: '🅰️',
    label: 'Letter A',
  },
  {
    name: 'fastFlix Back-end',
    slug: 'fastFlix-backend',
    description: 'A REST API that provides access to a database of movies and users as the server-side of the MERN/MEAN stack app fastFlix.',
    emoji: '😴',
    label: 'Sleeping face',
  },
  {
    name: 'meet',
    slug: 'meet',
    description: 'A serverless PWA built with React using test-driven development and the Google Calendar API to fetch and display events.',
    emoji: '🗓',
    label: 'Calendar',
  },
  {
    name: 'Chat App',
    slug: 'chat-app',
    description: 'A mobile chat app built with Expo and React Native that saves data with Google Firebase.',
    emoji: '💬',
    label: 'Thought bubble',
  },
  {
    name: 'Simple Portfolio',
    slug: 'simple-portfolio',
    description: 'A simple portfolio website using no frameworks or libraries — just HTML and CSS.',
    emoji: '👨🏻‍💻',
    label: 'Man technologist',
  },
  {
    name: 'Pokédex',
    slug: 'pokedex',
    description: 'A small web app that loads data from an external API and enables detailed viewing of Pokémon.',
    emoji: '🟡',
    label: 'Yellow circle',
  },
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
              Highlights of my web development work, with source code viewable on <Link to="https://github.com/AaronRDurant" target="_blank">GitHub</Link>.
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
