import Image from "./Image"
import { useState, useEffect } from "react";
export default function Row(props) {
  let [set, setSet] = useState(new Set());

  let images = new Array(3).fill(<Image set={ set }/>)
  
  return (<div className="row">
    {images}
  </div>)
}