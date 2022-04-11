import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  let [modalUrl, setModalUrl] = useState("");

  function Nav() {
    return (<div className="nav"></div>)
  }

  function Main() {
    let rows = new Array(6).fill(<Row />).map((e, i) => <Row count={ i }/>);
    return (<div className="main">
      { rows }
    </div>)
  }
  
  function Row(props) {
    let { count } = props;

    let images = new Array(3).fill(<Image />).map((e, i) => <Image count={(i + 1) + (count * 3)} />);
    
    return (<div className="row">
      {images}
    </div>)
  }

  function Image(props) {
    let [url, setUrl] = useState("");

    let { count } = props;
    
    useEffect(() => {
      if (localStorage.getItem(count)) {
        setUrl(localStorage.getItem(count));
      } else {
        fetch("https://randomfox.ca/floof/")
                .then(res => res.json())
                .then(data => {
                  localStorage.setItem(count, data.image);
                  setUrl(data ? data.image : null);
                })
      }
    }, [])

    const setModalImage = () => {
      setModalUrl(url);
    }
  
    return (<div onClick={setModalImage} className="image">
      <img className="fox-image" src={ url } width="200" height="200"/>
    </div>)
  }

  function ModalContainer(props) {
    let url = modalUrl;
    let display = url ? "" : "none";
    const handleClick = () => {
      setModalUrl("");
    }
    return (
      <div onClick={handleClick} className="modal-container" url={url} style={{display: display}}>
        <Modal/>
      </div>
    )
  }

  function Modal(props) {
    return (
      <div className="modal">
        <img className="modal-image" src={ modalUrl }/>
      </div>
    )
  }

  return (
    <div className="App">
      <Nav />
      <Main />
      <ModalContainer/>
    </div>
  );
}

export default App;
