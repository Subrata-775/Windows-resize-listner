import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [windowsize, setwindowsize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {

    function handleResize() {
      setwindowsize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    handleResize(); // set initial size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Window Resize Listener</h1>
        <h2>Width: {windowsize.width}px</h2>
        <h2>Height: {windowsize.height}px</h2>
      </div>
    </div>
  );
}

export default App;