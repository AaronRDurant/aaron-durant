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
      <div className="navigation-inner">
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
            <Link to="/projects" activeClassName="active">
              Projects
            </Link>
            <Link to="/blog" activeClassName="active">
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navigation
