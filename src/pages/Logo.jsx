import { useState } from 'react';
import LogoButton from '../components/LogoButton';
import '../styles/Logo.css';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

export default function Logo() {
  const [toggle, setToggle] = useState(true);

  function handleChangeToggle() {
    setToggle(!toggle);
  }

  if (toggle) return (
    <div className="logo">
      <video
        src={video1}
        loop
        autoPlay
        muted
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      ></video>
      <div>
        <h1>THIS IS FOR</h1>
        <h1>ETERNITY</h1>
        <LogoButton name={"DISCOVER THE BUGATTI TOURBILLON"} onClick={handleChangeToggle} />
      </div>
    </div>
  );
  else
    return (
      <div className="logo">
        <video
          src={video2}
          loop
          autoPlay
          muted
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        ></video>
        <div>
          <h3 style={{color:"whitesmoke"}}>POUR L’ÉTERNITÉ</h3>
          <h1>TOURBILLON</h1>
          <LogoButton name={"BACK TO HOME PAGE"} onClick={handleChangeToggle} />
        </div>
      </div>
    );
}
