import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <article>
        <header>
          <div className="page-header">
            <h1>About Me</h1>
            <p>Software developer, motocross fanatic, and floundering golfer</p>
          </div>
        </header>
        <section>
          <p>
            Howdy! I'm Aaron Durant, a software developer in Michigan. This is
            my spot on the internet for sharing things I make and write.
          </p>
          <p>
            In working on a motorsports journalism project simply for the love
            of it for five years, I developed a deep interest in the
            intersection of web design and content through attending three dozen
            motorsports events and publishing more than 1,000 articles.
          </p>
          <p>
            Realizing I preferred improving the design of{" "}
            <a
              href="https://www.theapex.racing/"
              target="_blank"
              rel="noreferrer"
            >
              The Apex
            </a>{" "}
            instead of writing for it, I knew I needed to make a change. So,
            after a year-long project-based online bootcamp and several months
            of additional self-directed learning, I started in my first role as
            a software developer in July 2022.
          </p>
          <p>
            I enjoy playing golf, drumming, biking, weight training,
            snowboarding, and spending time with my girlfriend and family. I
            also really love motocross.
          </p>
          <h2>Connect</h2>
          <p>
            You can contact me via email at <strong>aaron</strong> at{" "}
            <strong>aarondurant.com</strong>. I'm also on:
          </p>
          <ul>
            <li>
              <a
                href="https://twitter.com/AaronRDurant"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AaronRDurant"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aaron-durant/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.strava.com/athletes/ad80"
                target="_blank"
                rel="noreferrer"
              >
                Strava
              </a>
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  );
};

export default About;

export const Head = () => (
  <Seo
    title="About • Aaron Durant"
    description="Software developer, motocross fanatic, floundering golfer."
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
