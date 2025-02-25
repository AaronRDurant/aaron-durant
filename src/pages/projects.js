import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

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
                  <a
                    href="https://www.youtube.com/@aarondurant80"
                    target="_blank"
                    rel="noreferrer"
                    className="motocross"
                  >
                    80HD
                  </a>{" "}
                  is my motocross YouTube channel, where I capture the
                  experience of growing as an amateur racer. It's not just about
                  results — it's about the mindset, challenges, and progress
                  that come with pushing my limits in motocross.
                </p>

                <p>
                  I created{" "}
                  <a
                    href="https://www.tableovertwo.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Table Over Two
                  </a>
                  , a motocross publication that explores the deeper layers of
                  Supercross and motocross. More than a race recap site, it's a
                  space for analysis, insight, and storytelling that goes beyond
                  the results sheet. Every article unpacks pivotal moments, the
                  mental and technical aspects of performance, and the broader
                  dynamics of the sport.
                </p>

                <p>
                  Right now, beyond these projects, I'm in a major rebuilding
                  phase. I'm aggressively job searching, seriously considering
                  freelance website development, and focused on regaining
                  financial stability after a tough stretch.
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
                  coverage into a specialized, high-quality platform. It
                  sharpened my ability to create engaging, strategic digital
                  content, and though I stepped away from daily operations, I
                  still edit and publish select articles.
                </p>

                <p>
                  I made a sports dictionary in second grade, an animal magazine
                  in third grade, a newspaper in fifth grade, and a blog about
                  IndyCar in eighth grade. At some point, I also started a band
                  with my brother.
                </p>

                <p>
                  Not to mention the Nitro Circus-esque front-yard action sports
                  video series my brothers and I filmed — it never quite took
                  off.
                </p>

                <p>Does any of that count?</p>

                <p>
                  Maybe not, but I'd bet on young people like that 10 times out
                  of 10. Curiosity is everything.
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
