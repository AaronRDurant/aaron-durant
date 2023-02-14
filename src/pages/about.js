import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const About = ({ date }) => {
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
                  Michigan. I work on Minimum Advertised Price (MAP) monitoring
                  software at my day job. Beyond that, I'm training for the 2023
                  motocross season and writing about professional Supercross and
                  motocross at{" "}
                  <a
                    href="https://www.motoonline.com"
                    target="_blank"
                    rel="noreferrer"
                    className="motoonline"
                  >
                    MotoOnline
                  </a>
                  .
                </p>

                <p>
                  Coding and motocross have been my primary focuses since late
                  2020. It all came together in the second half of 2022,
                  beginning with the start of my development career in July. In
                  October, I lapped a motocross track for the{" "}
                  <a
                    href="https://www.youtube.com/watch?v=vx0bHlUrSGw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    first time in 13 years
                  </a>
                  .
                </p>

                <p>
                  Now that the ball is rolling, 2023 is about determining where
                  to take it all from here. I'm adhering to a rigorous weight
                  and cardio training plan, intending to ride my dirt bike a ton
                  this year, expanding my coding abilities, and sticking to many
                  other healthy habits like reading to give myself the best shot
                  at realizing my potential.
                </p>

                <p>
                  I'm finally doing what I should be, and things are fantastic.
                </p>

                <p>
                  Previously, I attended three dozen motorsports events across
                  North America with media accreditation between 2015 and 2020
                  and published nearly 2,000 articles for a publication I
                  co-founded called{" "}
                  <a
                    href="https://www.theapex.racing/author/aaron-durant/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Apex
                  </a>
                  . However, my passion for the intersection of web design and
                  content remains, and I have yet to totally find a way to
                  channel it since. Writing here is likely a good start —
                  perhaps 2023 is the year.
                </p>

                <p>
                  I try to have most things flow toward coding and motocross,
                  but I also enjoy snowboarding, playing golf, playing drums,
                  attending heavy metal concerts, and spending time with family
                  and friends.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

export const Head = () => (
  <Seo
    title="About • Aaron Durant"
    description="Software developer, motocross racer, and writer."
  />
);
