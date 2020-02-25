import React from "react"
import { Link } from "react-router-dom"

export default props => {
  return (
    <div>
      <h1>My Albums</h1>
      <div className="albums">
        <Link to="/album/1">
          <img src="https://placehold.it/200/200" />
          <p className="title">Some Title</p>
        </Link>
        <Link to="/album/1">
          <img src="https://placehold.it/200/200" />
          <p className="title">Some Title</p>
        </Link>
        <Link to="/album/1">
          <img src="https://placehold.it/200/200" />
          <p className="title">Some Title</p>
        </Link>
        <Link to="/album/1">
          <img src="https://placehold.it/200/200" />
          <p className="title">Some Title</p>
        </Link>
        <Link to="/album/1">
          <img src="https://placehold.it/200/200" />
          <p className="title">Some Title</p>
        </Link>
        <Link to="/album/1">
          <img src="https://placehold.it/200/200" />
          <p className="title">Some Title</p>
        </Link>
      </div>
    </div>
  )
}
