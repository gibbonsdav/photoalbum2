import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "../styles/app.css"

import Home from "./Home"
import Album from "./Album"
import Photo from "./Photo"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/album/:id" component={Album} />
        <Route path="/photo/:id" component={Photo} />
      </div>
    </Router>
  )
}
