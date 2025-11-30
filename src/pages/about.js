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
                  I'm a front-end engineer who cares deeply about clarity,
                  performance, and thoughtful UX.
                </p>

                <p>
                  For more than a decade, I've been designing and building
                  digital experiences at the intersection of front-end
                  engineering, UX, and content systems — all centered on making
                  complex information feel simple and usable.
                </p>

                <p>
                  I started in motorsports media, co-founding{" "}
                  <a
                    href="https://www.theapex.racing/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Apex
                  </a>{" "}
                  as an independent publication covering North American racing.
                  I owned everything users touched: information architecture,
                  layout systems, editorial workflows, performance, and SEO.
                  That end-to-end ownership naturally led me into front-end
                  engineering, where I now specialize in React, Next.js, and
                  clean, predictable interfaces.
                </p>

                <p>
                  With{" "}
                  <a
                    href="https://www.tableovertwo.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Table Over Two
                  </a>
                  , I've taken that blend of engineering and content thinking
                  further by building a modern Next.js + Ghost CMS stack for
                  analysis-driven Supercross and motocross coverage. The
                  publication has earned media accreditation and has been
                  credentialed at multiple Monster Energy Supercross rounds —
                  all on a platform I designed and built myself. I'm also in the
                  early stages of launching{" "}
                  <a
                    href="https://www.lucidsuspension.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lucid Suspension
                  </a>
                  , a dirt bike suspension service built around a transparent,
                  modern customer experience.
                </p>

                <p>
                  As a motocross racer, I bring the sport's mindset into my
                  front-end work — deliberate practice, pressure management, and
                  a constant focus on refinement. That shows up in how I work:
                  steady iteration, clear feedback loops, and attention to
                  detail that compounds over time.
                </p>

                <p>
                  Outside of work, you'll usually find me riding, training,
                  snowboarding, drumming, or building something new. The common
                  thread is the same: I like solving problems, I like improving
                  systems, and I like making experiences that feel smooth,
                  obvious, and well-designed.
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
