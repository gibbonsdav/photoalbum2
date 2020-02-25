import axios from "axios"

export function getAlbums() {
  return new Promise((resolve, reject) => {
    axios
      .get("/albums")
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject(e)
      })
  })
}

export function getAlbum(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/albums/${id}?_embed=photos`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject(e)
      })
  })
}
