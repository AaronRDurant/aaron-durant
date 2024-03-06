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
                  I'm a software developer, motocross racer, and writer in
                  Michigan. I work mostly on minimum advertised price (MAP)
                  monitoring software at my day job. Beyond that, I'm writing
                  about professional Supercross and motocross at{" "}
                  <a
                    href="https://www.motoonline.com"
                    target="_blank"
                    rel="noreferrer"
                    className="motoonline"
                  >
                    MotoOnline
                  </a>{" "}
                  and wrapping up my first full motocross season in 15 years
                  (with an eye on 2024!).
                </p>

                <p>
                  Coding and motocross have been my primary focuses since 2020.
                  It all came together in the second half of 2022, beginning
                  with the start of my software development career in July. In
                  October, I lapped a motocross track for the{" "}
                  <a
                    href="https://www.youtube.com/watch?v=vx0bHlUrSGw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    first time since 2008
                  </a>
                  .
                </p>

                <p>
                  With the ball finally rolling, 2023 is about building on this
                  thrilling foundation. Especially with motocross, I've been
                  careful to set goals for this year that seamlessly advance
                  into more audacious targets for 2024 and beyond.
                </p>

                <p>
                  I've only cracked the surface of coding in the second year of
                  my professional career and remain excited to take the one-two
                  combo of coding + motocross as far as possible.
                </p>

                <p>
                  Previously, I attended three dozen motorsports events across
                  North America with media accreditation between 2015 and 2020
                  and published over 1,500 articles on a website I co-founded
                  called{" "}
                  <a
                    href="https://www.theapex.racing/author/aaron-durant/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Apex
                  </a>
                  . The intersection of website design and content is one of my
                  central passions, and I plan to channel it more in the future
                  as time allows and my career progresses.
                </p>

                <p>
                  I try to have most things flow toward coding and motocross,
                  but I also enjoy playing golf, playing drums, snowboarding,
                  attending heavy metal concerts, and laughing with family and
                  friends.
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
