import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Writing = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className="container">
        <div className="grid">
          <div className="article-content">
            <div className="hero">
              <h1>Writing</h1>
            </div>
            <section className="segment small">
              <div className="post-content">
                <div>
                  {posts.map((post) => {
                    const title = post.frontmatter.title || post.fields.slug;

                    return (
                      <Link to={post.fields.slug} className="post">
                        <h3 key={post.fields.slug}>{title}</h3>
                        <time>{post.frontmatter.date}</time>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Writing;

export const Head = ({ data }) => (
  <Seo
    title={`Writing • ${data.site.siteMetadata.name}`}
    description="Occasional reflections on coding, motocross, and more."
  />
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
        }
      }
    }
  }
`;
