import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const navItems = [
  {
    label: 'About',
    url: '/about',
    emoji: '👨🏻‍💻',
    description: 'Man using computer emoji'
  },
  {
    label: 'Projects',
    url: '/projects',
    emoji: '💻',
    description: 'Laptop emoji'
  },
  {
    label: 'Blog',
    url: '/blog',
    emoji: '✏️',
    description: 'Pencil emoji'
  }
]

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
        <nav className="brand-section">
          <Link to="/" className="brand">
            <span>{siteTitle}</span>
          </Link>
        </nav>
        <div>
          <nav>
            {navItems.map((item) => (
              <Link to={item.url} key={item.label} activeClassname="active">
                <span role="img" aria-label={item.description} className="emoji">{item.emoji}</span>
                <div>{item.label}</div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navigation
