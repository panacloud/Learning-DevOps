import React from "react"
import { Link } from "gatsby"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/certification">Certifications</Link>
        </li>
        <li>
          <Link to="/course">Courses</Link>
        </li>
        <li>
          <Link to="/franchisee">Franchisee</Link>
        </li>
        <li>
          <Link to="/program">Program</Link>
        </li>
        <li>
          <Link to="/track">Track</Link>
        </li>
        <li>
          <Link to="/program-catalog">Program Catalog</Link>
        </li>
        <li>
          <Link to="/text-book">Text book</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
