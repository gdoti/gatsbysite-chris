import React from "react"
import {Link} from 'gatsby'

const IndexPage = () => {
  return(
    <div>
      <h1>Hello.</h1>
      <h2>
        I'm GoheiIsowa, a medical doctor living in beautiful Kyoto.
      </h2>
      <p> need a doctor?<a href="/contact">Contact me!</a></p>
      <p>Need a doctor? <Link to="/contact">Contact me</Link></p>
    </div>
  )
}

export default IndexPage