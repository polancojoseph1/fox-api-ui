import { useState } from "react"
import Row from "./Row"
export default function Main() {
  let rows = new Array(6).fill(<Row />);
  return (<div className="main">
    { rows }
  </div>)
}