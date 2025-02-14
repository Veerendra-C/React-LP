import React from 'react'
import '../styles/lamarque.css'

export default function Lamarque() {
  return (
    <div className="lamarque">
      <video
        src="/assets/video3.mp4"
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
      />
      <div className="block1">
        <h2>Distinctly BUGATTI</h2>
        <p>
          Instantly recognizable. The TOURBILLON draws upon 115 years of BUGATTI
          design DNA to evolve the ’Forme Follows Performance’ philosophy into a
          new era. These are entirely new proportions, but unmistakably BUGATTI.
        </p>
      </div>
      <div className="block2">
        <h2>BUGATTI Line</h2>
        <p>
          The BUGATTI C line, inspired by the marque's pioneering use of duotone
          paintwork, takes on a new form in the TOURBILLON. Its sharper, more
          angular contour infuses the profile with a sense of movement and
          power, even at a standstill.
        </p>
      </div>
      <div className="block3">
        <h2>Center Line</h2>
        <p>
          Drawing from the iconic bolted central fin of the TYPE 57SC ATLANTIC,
          an elegant center line runs from the TOURBILLON’S new wider grille,
          forming a flying buttress over the spectacular V16 engine bay.
        </p>
      </div>
      <div className="block4">
        <h2>Duotone</h2>
        <p>
          Jean Bugatti's adept pairing of colors and shapely forms for the TYPE
          57, renowned for its captivating play of light, remains a cornerstone
          of modern BUGATTI design. With a profound grasp of these principles,
          we evolve their timeless allure for a new era.
        </p>
      </div>
      <div className="block5">
        <h2>Horseshoe Grille</h2>
        <p>
          The iconic grille undergoes an intelligent transformation —
          brandishing a new broader, athletic persona. Widened, it channels air
          more efficiently to dual radiators, amping up cooling, boosting
          efficiency, and enhancing handling prowess.
        </p>
      </div>
    </div>
  );
}
