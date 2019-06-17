import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About me</h1>
      <p>I'm just student who love front-end and design</p>
      <p>
        <Link to="/contact">Want to work with me? Reach out</Link>
      </p>
    </div>
  )
}

export default AboutPage
