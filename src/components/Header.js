import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav>
      <h1>Chinmay Joshi</h1>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/index">Home</Link>
    </nav>
  )
}

export default Header
