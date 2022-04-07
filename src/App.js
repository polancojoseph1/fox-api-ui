import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import { useEffect, useState } from "react"
// https://randomfox.ca/floof/ <- random fox api
function App() {
  useEffect(() => {
    localStorage.clear();
  }, [])
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
