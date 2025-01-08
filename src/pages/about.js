import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const About = () => {
  return (
    <Layout>
      <div className="container">
        <div className="grid">
          <div className="article-content">
            <div className="hero">
              <h1>About Me</h1>
            </div>
            <section className="segment small">
              <div className="post-content">
                <p>
                  I'm a software developer, writer, and motocross racer based in
                  Michigan. Currently, I'm preparing for the 2025{" "}
                  <a
                    href="https://www.youtube.com/@aarondurant80"
                    target="_blank"
                    rel="noreferrer"
                    className="motocross"
                  >
                    motocross
                  </a>{" "}
                  season while seeking a new software development or writing
                  role.
                </p>

                <p>
                  Coding and motocross have been my main focuses since 2020.
                  Everything came together in the second half of 2022 when I
                  started my software development career in July and, in
                  October, lapped a motocross track for the first time since
                  2008.
                </p>

                <p>
                  Between 2015 and 2020, I attended over three dozen motorsports
                  events across North America with media credentials and
                  published more than 1,500 articles on{" "}
                  <a
                    href="https://www.theapex.racing/author/aaron-durant/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Apex
                  </a>
                  , a website I co-founded that's celebrating its 10th
                  anniversary this year.
                </p>
                <p>
                  Recently, I started{" "}
                  <a
                    href="https://www.tableovertwo.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Table Over Two
                  </a>
                  , a new motocross publication.
                </p>

                <p>
                  I also enjoy playing drums, playing golf, snowboarding, taking
                  in heavy metal concerts from the front row, and laughing with
                  my family, girlfriend, and friends.
                </p>

                <StaticImage
                  src="../images/Aaron-Durant-motocross-Supercoop-MX.jpg"
                  alt="Aaron Durant practicing during the 2024 motocross season"
                  title="Aaron Durant practicing motocross on his 2023 Honda CRF250R"
                  className="image"
                  placeholder="blurred"
                  formats={["auto", "webp", "avif"]}
                  quality={100}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

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

  return <Seo title={`About • ${siteName}`} />;
};
