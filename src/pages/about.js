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
              <h1>About</h1>
            </div>
            <section className="segment small">
              <div className="post-content">
                <p>
                  For nearly a decade, I've been refining digital experiences
                  and exploring what separates good from great in UX, content,
                  and motocross.
                </p>

                <p>
                  I co-founded{" "}
                  <a
                    href="https://www.theapex.racing/author/aaron-durant/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Apex
                  </a>{" "}
                  in 2015 as a broad motorsports publication. It evolved into a
                  specialized, high-quality platform where I sharpened my
                  ability to craft clear, engaging experiences and develop
                  digital content that resonates.
                </p>

                <p>
                  With{" "}
                  <a
                    href="https://www.tableovertwo.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Table Over Two
                  </a>
                  , I've taken that foundation further — combining my expertise
                  in UX, content strategy, and motorsports storytelling to
                  analyze racecraft, rider psychology, and pivotal moments in
                  Supercross and motocross.
                </p>

                <p>
                  Beyond writing about the sport, I'm{" "}
                  <a
                    href="https://www.youtube.com/@aarondurant80"
                    target="_blank"
                    rel="noreferrer"
                  >
                    pushing myself within it
                  </a>{" "}
                  by training, competing, and refining my skills on the bike.
                </p>

                <p>
                  Outside of work, I'm just as obsessed with improving — on a
                  motocross bike, a snowboard, or behind a drum kit. At the core
                  of everything I do is a drive to refine, improve, and push the
                  limits.
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
