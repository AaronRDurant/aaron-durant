import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title={"Blog • " + siteTitle} />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"Blog • " + siteTitle} />
      <article>
        <header>
          <div className="page-header">
            <h1>Blog</h1>
            <p>
              Musings on coding, motorsports, fitness, and more, maybe with a few tutorials and helpful resources thrown in here and there.
            </p>
          </div>
        </header>

        <section>
          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <Link to={post.fields.slug} itemProp="url" className="post-link">
                  <li className="post-list-items" key={post.fields.slug}>
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <div className="flex-content">
                        <h3 itemProp="headline">{title}</h3>
                        <small><time>{post.frontmatter.date}</time></small>
                      </div>
                    </article>
                  </li>
                </Link>
              )
            })}
          </ol>
        </section>
      </article>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMM D")
          title
          description
        }
      }
    }
  }
`
