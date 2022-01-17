import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <article>
        <header className="hero">
          <div className="flex-content">
            <div className="hero-content">
              <h1>
                Hey, I'm Aaron
                <span role="img" aria-label="Hand waving emoji"> 👋🏻</span>
              </h1>
              <p>I'm a front-end developer in Michigan fascinated by the intersection of web design and media. This is my tiny corner of the internet where I <Link to="/blog">write</Link>.</p>
            </div>
            <StaticImage
              className="hero-photo desktop-only"
              formats={["auto", "webp", "avif"]}
              src="../images/me-with-donut.jpg"
              width={250}
              height={250}
              quality={100}
              alt="Aaron Durant"
            />
          </div>
        </header>

        <div>
          <h2 className="subheading">
            <span>Latest Writing</span> <Link to="/blog">View all →</Link>
          </h2>
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
        </div>
      </article>
    </Layout>
  )
}

export default BlogIndex

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
