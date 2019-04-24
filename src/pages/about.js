import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        Adept at communicating, I'm a quick learner with a habit of implementing
        everything I learn to the best of my knowledge. I strongly believe in
        being a lifelong student because there is always something new around
        the corner. Generally a confident person, I step up and take the lead
        when the situation so demands. Even so, I follow the principle of
        'Ubuntu' which means 'I am, because we are'.
      </p>

      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
