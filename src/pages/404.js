import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout>
      <div className="container">
        <div className="grid">
          <div className="article-content">
            <div className="hero">
              <h1>
                404: There's nothing here!
                <span role="img" aria-label="Surprised emoji">
                  {" "}
                  😳
                </span>
              </h1>
            </div>
            <section className="segment small">
              <div className="post-content">
                <p>
                  Either something used to be here and I deleted it (a habit of
                  mine...), or nothing ever was and you ended up here anyway.
                  Impressive!
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => (
  <Seo
    title="Whoa! Page Not Found • Aaron Durant"
    description="You found something that doesn't exist. Nice job!"
  />
);
