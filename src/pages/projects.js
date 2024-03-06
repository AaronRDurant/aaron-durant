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
                    href="https://www.youtube.com/channel/UCD89j1lEDHzDZFXrOrrXhJw"
                    target="_blank"
                    rel="noreferrer"
                    className="motocross"
                  >
                    80HD
                  </a>{" "}
                  is my motocross vlog aimed at capturing and tracking the
                  progress of my primary endeavor outside my day job: racing my
                  dirt bike.
                </p>
                <p>
                  <a
                    href="https://www.motoonline.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="motoonline"
                  >
                    MotoOnline
                  </a>{" "}
                  is one of the most influential media outlets in the dirt bike
                  industry, and I'm proud to write for it and co-host the
                  MotoNow podcast.
                </p>

                <p>
                  I also sometimes <Link to="/writing">write</Link> on this
                  website.
                </p>

                <h2 className="alternate-h2">Past Projects</h2>
                <p>
                  I created an independent online publication about motorsports
                  called{" "}
                  <a
                    href="https://www.theapex.racing/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Apex
                  </a>{" "}
                  with my friend Ben Hinc in 2015. I stepped away to focus on
                  web development in 2020 and attempted to return in 2023, but
                  my hands are full with coding and motocross.
                </p>
                <p>
                  I made a sports dictionary in second grade, an animal magazine
                  in third grade, a newspaper in fifth grade, a Twitter account
                  and blog about IndyCar in eighth grade, and I also started a
                  band with my brother at some point. (Not to mention the Nitro
                  Circus-esque front-yard action sports video series my brothers
                  and I started; it never quite took off.)
                </p>

                <p>Does any of that count?</p>

                <p>
                  Perhaps not, but I'll admit I was one of <i>those</i> kids who
                  did lots of extracurricular stuff growing up. I'll bet on
                  young people like that 10 times out of 10; I would be very
                  different now if I weren't so curious as a kid.
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
