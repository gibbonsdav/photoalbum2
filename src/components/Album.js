import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAlbum, getAlbums } from "../actions/data"

export default props => {
  const [album, setAlbum] = useState({})
  const [photos, setPhotos] = useState([])
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbum(props.match.params.id).then(data => {
      setAlbum(data)
      setPhotos(data.photos)
    })
    getAlbums().then(data => setAlbums(data))
  }, [props.match.params])

  return (
    <div>
      <div className="aname">
        <h1>{album.name}</h1>
      </div>
      <div className="albums">
        {albums.map(album => (
          <p className="sidebar">
            {" "}
            <Link to={`/album/${album.id}`}>{album.name}</Link>
          </p>
        ))}
      </div>
      <div className="grid">
        {photos.map(photo => (
          <Link to={`/photo/${photo.id}`}>
            <img src={photo.url} />
            <p className="title">{photo.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
