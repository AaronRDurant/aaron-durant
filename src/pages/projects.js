import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Projects = () => {
  return (
    <Layout>
      <div className="container">
        <div className="grid">
          <div className="article-content">
            <div className="hero">
              <h1>Projects</h1>
            </div>
            <section className="segment small">
              <div className="post-content">
                <p>
                  Outside of front-end development, my biggest ongoing project
                  is my motocross program: training, racing, and systematically
                  improving as an amateur rider. I document that journey on{" "}
                  <a
                    href="https://www.youtube.com/@aarondurant80"
                    target="_blank"
                    rel="noreferrer"
                    className="motocross"
                  >
                    my YouTube channel
                  </a>
                  , focusing on mindset, progression, and what it actually looks
                  like to chase mastery over time.
                </p>

                <p>
                  I also run{" "}
                  <a
                    href="https://www.tableovertwo.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Table Over Two
                  </a>
                  , an analysis-driven Supercross and motocross publication
                  built on a custom Next.js + Ghost CMS stack. It explores
                  racecraft, rider psychology, and the pivotal moments that
                  shape a season, and has earned media accreditation at multiple
                  Monster Energy Supercross rounds.
                </p>

                <p>
                  In parallel, I'm building{" "}
                  <a
                    href="https://www.lucidsuspension.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lucid Suspension
                  </a>
                  , a dirt bike suspension service and web platform centered on
                  a clear, modern customer experience. I'm responsible for its
                  product design, front-end implementation, and the systems that
                  support customer workflows.
                </p>

                <h2 className="alternate-h2">Past Projects</h2>

                <p>
                  In 2015, I co-founded{" "}
                  <a
                    href="https://www.theapex.racing/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Apex
                  </a>
                  , a motorsports publication that evolved from broad racing
                  coverage into a focused, high-quality editorial brand. Over
                  more than 1,500 articles and coverage of dozens of major
                  events across North America, it shaped how I think about
                  content systems, UX clarity, and digital storytelling. These
                  days my involvement is lighter, but I still support select
                  coverage, including periodic media work at the Detroit Grand
                  Prix.
                </p>

                <p>
                  Long before that, I was experimenting with whatever I could
                  get my hands on: a sports dictionary in second grade, an
                  animal magazine in third, a school newspaper in fifth, an
                  IndyCar blog in eighth, a band with my brother, and a
                  short-lived backyard action sports video series. None of it
                  was polished, but all of it was driven by curiosity and a need
                  to make things.
                </p>

                <p>
                  That same curiosity is what still drives the projects I'm
                  working on today.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

export const Head = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);

  const siteName = site.siteMetadata.name;

  return (
    <Seo
      title={`Projects • ${siteName}`}
      description="Some details about what I'm focused on."
    />
  );
};
