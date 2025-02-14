import React from 'react'
import '../styles/Newsroom.css'
import LogoButton from '../components/LogoButton';

export default function Newsroom() {
  return (
    <div className="newsroom">
      <h1
        style={{
          position: "absolute",
          top: "14%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          zIndex: 1,
        }}
      >
        OUR LATEST NEWS
      </h1>
      <iframe
        width="100%"
        height="80%"
        src="https://www.youtube.com/embed/R-1YNV3XcE0?autoplay=1&loop=1&playlist=R-1YNV3XcE0&controls=0&modestbranding=1&showinfo=0&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: "20%",
          left: "0",
          width: "100%",
          height: "70%",
          zIndex: 0,
          opacity: 1, 
        }}
      ></iframe>
      <div
        className="text"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          zIndex: 1,
          fontSize: "clamp(10px, 1.5vw, 2000px)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",  
        }}
      >
        <h2>A RECORD-BREAKING FORCE OF NATURE</h2>
        <p>Setting a bench mark at 453.91km/h. A triamph of passion,precision,and performance.</p>
        <LogoButton name="WATCH THE RECORD" onClick={() => {}} />
      </div>
    </div>
  );
}
