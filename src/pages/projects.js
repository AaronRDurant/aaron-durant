import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

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
    name: "Dashboard",
    description:
      "I wanted to add to my repertoire the skills necessary to create a corporate-themed admin panel. The result: a dashboard, three pages sourcing dummy data, four mini apps, seven functional charts, and experience with Tailwind CSS, Syncfusion, and more.",
    code: "dashboard",
    demo: "https://dashboard-ad.netlify.app/",
    emoji: "📊",
    label: "Bar chart emoji",
  },
  {
    name: "Tech Commerce",
    description:
      'After acquiring lots of Gatsby experience, I switched to Next.js to create this simple e-commerce website. Beyond "the React framework for production," I was pleased to also use Sanity for content and Stripe for payments.',
    code: "tech-commerce",
    demo: "https://tech-commerce-ad.netlify.app",
    emoji: "🛒",
    label: "Shopping cart emoji",
  },
  {
    name: "ARMA Sport Concept",
    description:
      "In putting my spin on the website of nutritional supplement brand ARMA Sport, I fortified my knowledge of React and CSS, including Flexbox, Grid, the BEM methodology, media queries, and more.",
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
      <Seo title={"Projects • " + siteTitle} />
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
