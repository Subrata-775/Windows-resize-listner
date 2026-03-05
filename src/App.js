import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [windowsize, setwindowsize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {

    function handleResize() {
      setwindowsize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, []);

  return (
    <div className="container">

      <div className="card">

        <h1 className="title">Window Resize Listener</h1>

        <div className="sizeBox">
          <h2>Width</h2>
          <p>{windowsize.width}px</p>
        </div>

        <div className="sizeBox">
          <h2>Height</h2>
          <p>{windowsize.height}px</p>
        </div>

      </div>

    </div>
  );
}

export default App;