import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I am Chinmay. I am a full stack developer, living in Hyderabad.</h2>
      <p>
        Need a developer? <a href="/contact">Contact Me</a>
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>

      <Footer />
    </div>
  )
}

export default IndexPage
