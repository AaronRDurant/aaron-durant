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
                  is my motocross YouTube channel, where I document the journey
                  of growing as an amateur racer. Through racing highlights and
                  lessons learned, it offers an honest look at the challenges
                  and triumphs of pursuing my passion for motocross.
                </p>

                <p>
                  I recently created{" "}
                  <a
                    href="https://www.tableovertwo.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Table Over Two
                  </a>
                  , a publication where I dive into the factors that truly
                  influence Supercross and motocross results, along with other
                  related topics from my perspective.
                </p>

                <p>
                  Right now, I'm focused on securing a new software development
                  or writing role, setting up my townhome, and improving my
                  fitness and skills to reach my motocross potential.
                </p>

                <p>
                  I plan to <Link to="/writing">write</Link> on this website
                  about once a month as everything unfolds.
                </p>

                <h2 className="alternate-h2">Past Projects</h2>
                <p>
                  I created a publication about motorsports called{" "}
                  <a
                    href="https://www.theapex.racing/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Apex
                  </a>{" "}
                  with my friend Ben Hinc in 2015 but stepped away to focus on
                  web development in 2020. An{" "}
                  <a
                    href="https://www.theapex.racing/2023/04/the-apex-back-refined-approach/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    attempted return in 2023 was exciting
                  </a>
                  , but I quickly faced the difficult truth that my hands were
                  full with coding and motocross.
                </p>
                <p>
                  I made a sports dictionary in second grade, an animal magazine
                  in third grade, a newspaper in fifth grade, and a Twitter
                  account and blog about IndyCar in eighth grade. I also started
                  a band with my brother at some point. (Not to mention the
                  Nitro Circus-esque front-yard action sports video series my
                  brothers and I started; it never quite took off.)
                </p>

                <p>Does any of that count?</p>

                <p>
                  Perhaps not, but I'll admit I was one of <i>those</i> kids who
                  did lots of extracurricular stuff growing up. I'd bet on young
                  people like that 10 times out of 10; I would be very different
                  now if I weren't so curious as a kid.
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
