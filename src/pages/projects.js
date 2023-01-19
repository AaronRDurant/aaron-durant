import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Projects = ({ data }) => {
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
                  is my motocross vlog.
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
                  is regarded as one of the most influential media outlets in
                  the dirt bike industry, and I'm proud to write for it.
                </p>
                <p>
                  <a
                    href="https://travel-mate-ad.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Travel Mate
                  </a>
                  ,{" "}
                  <a
                    href="https://brand-ad.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    brand.
                  </a>
                  ,{" "}
                  <a
                    href="https://tech-commerce-ad.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tech Commerce
                  </a>
                  ,{" "}
                  <a
                    href="https://dashboard-ad.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dashboard
                  </a>
                  , and{" "}
                  <a
                    href="https://arma-concept-ad.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ARMA Sport Concept
                  </a>{" "}
                  are a few websites I created while initially learning to code.
                  The source code for those and more is on{" "}
                  <a
                    href="https://github.com/AaronRDurant"
                    target="_blank"
                    rel="noreferrer"
                    className="developer"
                  >
                    GitHub
                  </a>
                  . I have some ideas for side projects that are much more
                  substantial — we'll see what 2023 brings on that front.
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
                  with my friend Ben Hinc in 2015. He's continued, but I stepped
                  away to focus on web development in 2020.
                </p>
                <p>
                  I made a sports dictionary in second grade, an animal magazine
                  in third grade, a newspaper in fifth grade, a Twitter account
                  and blog about IndyCar in eighth grade, and I started a band
                  with my brother somewhere in there, too. Does any of that
                  count?
                </p>
                <p>
                  Perhaps not, but I'll admit I was one of those weird kids into
                  doing lots of extracurricular stuff growing up. I'll bet on
                  young people like that 10 times out of 10; I would be very
                  different now if I wasn't a curious kid.
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

export const Head = () => (
  <Seo
    title="Projects • Aaron Durant"
    description="I'm Aaron Durant and this is the stuff I'm working on."
  />
);
