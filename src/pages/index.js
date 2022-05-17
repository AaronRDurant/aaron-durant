import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title={siteTitle} />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <article>
        <header className="hero">
          <div className="flex-content">
            <div className="hero-content">
              <h1>
                Hey, I'm Aaron
                <span role="img" aria-label="Hand waving emoji"> 👋🏻</span>
              </h1>
              <p>I'm a front-end developer in Michigan intrigued by the intersection of web design and content. This is my tiny spot on the internet where I display <Link to="/projects">projects</Link> I've made and things I <Link to="/blog">write</Link>.</p>
            </div>
            <StaticImage
              className="hero-photo"
              formats={["auto", "webp", "avif"]}
              src="../images/Aaron-Durant-with-donut.jpg"
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
                      <div className="latest">
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

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
