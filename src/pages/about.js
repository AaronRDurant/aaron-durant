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
                  I'm a software developer and motocross racer in Michigan. I
                  work mostly on minimum advertised price (MAP) monitoring
                  software at my day job. Beyond that, I'm diving into the 2024
                  motocross season striving for{" "}
                  <a
                    href="https://www.youtube.com/watch?v=bX5NcJnT1H8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    redemption during Labor Day weekend's Baja Brawl
                  </a>
                  .
                </p>

                <p>
                  Coding and motocross have been my primary focuses since 2020.
                  It all came together in the second half of 2022, beginning
                  with the start of my software development career in July. In
                  October, I lapped a motocross track for the first time since
                  2008.
                </p>

                <p>
                  I've only cracked the surface of coding in the second year of
                  my professional career and remain excited to take the one-two
                  combo of coding + motocross as far as possible.
                </p>

                <p>
                  Previously, I attended three dozen motorsports events across
                  North America between 2015 and 2020 with media accreditation
                  and published over 1,500 articles on a website I co-founded
                  called{" "}
                  <a
                    href="https://www.theapex.racing/author/aaron-durant/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Apex
                  </a>
                  . The intersection of website design and content is a central
                  interest of mine and I plan to channel it more in the future.
                </p>

                <p>
                  I try to have most things flow toward coding and motocross,
                  but I also enjoy playing drums, playing golf, snowboarding,
                  taking in heavy metal concerts from the front row, and
                  laughing with my family, girlfriend, and friends.
                </p>

                <StaticImage
                  src="../images/aaron-durant-2023-detroit-gp-indycar-race.jpg"
                  alt="Aaron Durant at 2023 Detroit Grand Prix IndyCar race"
                  title="Aaron Durant at 2023 Detroit Grand Prix"
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
