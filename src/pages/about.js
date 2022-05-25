import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"About • " + siteTitle} />
      <article>
        <header>
          <div className="page-header">
            <h1>About Me</h1>
            <p>Web developer, avid stationary cyclist, and wannabe writer</p>
          </div>
        </header>

        <section>
          <p>
            Howdy! I'm Aaron Durant, an aspiring front-end web developer in
            Michigan. This is my tiny spot on the internet where I share{" "}
            <Link to="/projects">projects</Link> I've made and things I{" "}
            <Link to="/blog">write</Link>.
          </p>
          <p>
            I come to the land of web development from the adjacent nation of
            online publishing. In working on a motorsports journalism project
            simply for the love of it for five years, I developed a deep
            interest in the intersection of web design and content through
            attending three dozen motorsports events and publishing more than
            1,000 articles.
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
            of additional self-directed learning, I aim to start in my first
            role as a front-end developer in 2022.
          </p>
          <p>
            I enjoy reading, biking, weight training, playing golf, playing
            drums, snowboarding, and spending time with my girlfriend and
            family. I also really love motocross.
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
                href="https://www.strava.com/athletes/70892495"
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
