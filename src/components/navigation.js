import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title

  return (
    <header className="navigation">
      <nav>
        <Link to="/" className="name">
          <span>{siteTitle}</span>
        </Link>
      </nav>
      <div>
        <nav>
          <Link to="/about" activeClassName="active">
            About
          </Link>
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
          <Link to="/now" activeClassName="active">
            Now
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navigation


// Build out the menu with: header, nav, Link, nav, Link, close header

// Then add CSS to make it look not horrible

// also remove anything "header" in style.css
