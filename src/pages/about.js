import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"About • " + siteTitle} />
      <article>
        <header>
          <div className="page-header">
            <h1>About Me</h1>
            <p>
              Web developer, avid stationary cyclist, and wannabe writer
            </p>
          </div>
        </header>

        <section>
          <StaticImage
            src="../images/Aaron-Durant-Catanzaro-Supercross.jpg"
            alt="Aaron Durant at the 2022 Indianapolis Supercross."
            placeholder="blurred"
            layout="fixed"
            width={750}
            className="about-image"
          />
          <p>Howdy, I'm Aaron Durant, an aspiring front-end web developer in Michigan. This is my tiny corner of the internet where I display projects I've created, write about things I enjoy, and procrastinate over unimportant details knowing I'll probably just redesign this whole website around the new year anyway.</p>
          <p>I come to the land of web development from the adjacent nation of online publishing, where I created and maintained websites about motorsports for about five years. Though I halted my pursuit of a motorsports journalism career, my experience enables me to bring forward invaluable lessons on good writing, effective communication, and general business. (Some of the most interesting parts of racing happen off the racetrack. Also, the media business is hard.)</p>
          <p>I figured I'd get around to learning true web development later on at least as a hobby, but when I realized I enjoyed tinkering with the layout of <a href="https://www.theapex.racing/" target="_blank" rel="noreferrer">The Apex</a> more than I enjoyed writing for it, I knew I needed to grow my skills and make a change. After a yearlong project-based online bootcamp and several months of additional self-directed learning, I aim to start in my first role as a front-end developer in 2022.</p>
          <p>Away from my laptop, I enjoy reading, snowboarding, playing drums, and spending time with my girlfriend and family. Most prominent, though, is my love for motocross. Reconnecting in 2020 with the sport that comprised my childhood sparked the crazy idea of participating again and while I'm not there yet, I could talk to you all day about fitness, nutrition, and every other related component of the sport. I suppose that's what my <Link to="/blog">blog</Link> is for.</p>
          <h2>Connect</h2>
          <p>You can contact me via email at <strong>aaron</strong> at <strong>aarondurant.com</strong>. I'm also on:</p>
          <ul>
            <li><a href="https://twitter.com/AaronRDurant" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://github.com/AaronRDurant" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/aaron-durant/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://www.strava.com/athletes/70892495" target="_blank" rel="noreferrer">Strava</a></li>
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
