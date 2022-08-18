import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <h1>
        404: There's nothing here!
        <span role="img" aria-label="Surprised emoji">
          {" "}
          😳
        </span>
      </h1>
      <p>
        Either something used to be here and I deleted it (a habit of mine), or
        nothing ever was and you ended up here anyway. Impressive!
      </p>
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
