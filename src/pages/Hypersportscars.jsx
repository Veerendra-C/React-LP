import React from 'react'
import '../styles/hypersupercars.css'

export default function Hypersportscars() {
  return (
    <div className="hypersupercars">
      <video
        src="/video4.mp4"
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
      <div className="block6">
        <h2>UNMISTAKABLE POWER</h2>
        <p>
          The addition of three electric motors, contributing an extra 800 HP,
          completes the next-generation BUGATTI powertrain, enhancing and
          enabling the emotional essence of the naturally aspirated V16 engine.
        </p>
      </div>
      <div className="block7">
        <h2>UNMISTAKABLE POWER</h2>
        <p>
          The addition of three electric motors, contributing an extra 800 HP,
          completes the next-generation BUGATTI powertrain, enhancing and
          enabling the emotional essence of the naturally aspirated V16 engine.
        </p>
      </div>
      <div className="block8">
        <h2>UNMISTAKABLE POWER</h2>
        <p>
          The addition of three electric motors, contributing an extra 800 HP,
          completes the next-generation BUGATTI powertrain, enhancing and
          enabling the emotional essence of the naturally aspirated V16 engine.
        </p>
      </div>
    </div>
  );
}
