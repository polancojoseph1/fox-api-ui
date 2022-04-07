import { useEffect, useState } from "react"

export default function Image(props) {
  let [url, setUrl] = useState("");
  useEffect(() => {
    fetch("https://randomfox.ca/floof/")
      .then(res => res.json())
    .then(data => setUrl(data ? data.image : null))
  }, [])

  return (<div className="image">
    <img src={ url } width="200" height="200"/>
  </div>)
}