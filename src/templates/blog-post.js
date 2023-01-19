import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div className="container">
        <div className="grid">
          <div className="article-content">
            <div className="post-header medium width">
              <h1>{post.frontmatter.title}</h1>
              <time>{post.frontmatter.date}</time>
            </div>
            <section className="segment small">
              <div
                id={post.fields.slug}
                dangerouslySetInnerHTML={{ __html: post.html }}
              ></div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const Head = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const post = data.markdownRemark;

  return (
    <Seo
      title={post.frontmatter.title + " • " + siteTitle}
      description={post.frontmatter.description || post.excerpt}
    />
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
