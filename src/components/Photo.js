import React, { useEffect, useState } from "react"
import { getPhoto } from "../actions/data"

export default props => {
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    getPhoto(props.match.params.id).then(data => {
      setPhoto(data)
    })
  }, [props.match.params])

  return (
    <div className="lastpic">
      <div className="photo">
        <h1>{photo.title}</h1>
        <img src={photo.url} />
      </div>
    </div>
  )
}
