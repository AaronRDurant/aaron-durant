import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const projectsList = [
  {
    name: "Personal Website",
    description:
      "Built with Gatsby and hosted on Netlify. This version of aarondurant.com marks a significant step forward from the personal websites I made on WordPress over the last several years but never really updated.",
    code: "personal-website",
    words: "new-personal-website",
    emoji: "🤘🏻",
    label: "Hand making devil horns sign emoji",
  },
  {
    name: "Travel Mate",
    description:
      "Incorporating three APIs to display information about restaurants, hotels, and attractions and show them on a map, this React web app became one of my most well-rounded projects to date.",
    code: "travel-mate",
    demo: "https://travel-mate-ad.netlify.app/",
    emoji: "✈️",
    label: "Airplane emoji",
  },
  {
    name: "brand.",
    description:
      "I built this modern business website with React and styled-components. It may be just another brochure-like website, but this increased my confidence that I could make things like this for actual production.",
    code: "brand",
    demo: "https://brand-ad.netlify.app/",
    emoji: "📁",
    label: "Folder emoji",
  },
  {
    name: "Tech Commerce",
    description:
      'After acquiring lots of Gatsby experience, I switched to Next.js to create this simple e-commerce website. Beyond "the React framework for production," I was pleased to use Sanity for content and Stripe for payments.',
    code: "tech-commerce",
    demo: "https://tech-commerce-ad.netlify.app",
    emoji: "🛒",
    label: "Shopping cart emoji",
  },
  {
    name: "Dashboard",
    description:
      "I wanted to add to my repertoire the skills necessary to create a corporate-themed admin panel. Creating this led to a dashboard, three pages sourcing dummy data, four mini apps, seven charts, and experience with Tailwind CSS, Syncfusion, and more.",
    code: "dashboard",
    demo: "https://dashboard-ad.netlify.app/",
    emoji: "📊",
    label: "Bar chart emoji",
  },

  {
    name: "ARMA Sport Concept",
    description:
      "In putting my spin on the current website for nutritional supplement brand ARMA Sport, I fortified my knowledge of React and CSS, including Flexbox, Grid, the BEM methodology, media queries, and more.",
    code: "arma-concept",
    demo: "https://arma-concept-ad.netlify.app",
    emoji: "💪🏻",
    label: "Flexed bicep emoji",
  },
];

const Projects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <article>
        <header>
          <div className="page-header">
            <h1>Projects</h1>
            <p>
              My favorite web development projects. Source code is on{" "}
              <Link to="https://github.com/AaronRDurant" target="_blank">
                GitHub
              </Link>
              .
            </p>
          </div>
        </header>
        <section>
          {projectsList.map((project) => (
            <div className="project" key={project.name}>
              <div className="desktop-only">
                <span role="img" aria-label={project.label} className="emoji">
                  {project.emoji}
                </span>
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
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  )}
                  {project.words && (
                    <Link to={`/${project.words}/`}>Words</Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </article>
    </Layout>
  );
};

export default Projects;

export const Head = () => (
  <Seo
    title="Projects • Aaron Durant"
    description="My favorite web development projects."
  />
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
