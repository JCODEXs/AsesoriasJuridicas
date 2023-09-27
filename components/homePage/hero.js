"use client"
import Image from 'next/image';

import classes from './hero.module.css';
import { useEffect, useRef, useState } from 'react';

function Hero() {
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    // Check if the video element exists and can be played
    if (video) {
      video.autoplay = true;
      video.loop = true;

      // Add an event listener for user interaction (e.g., click)
      const handleUserInteraction = () => {
        if (video.paused) {
          // Unmute the video and play it when user interacts
          setIsMuted(false);
          video.play().catch((error) => {
            // Handle autoplay error (e.g., browser restrictions)
            console.error('Autoplay error:', error);
          });
        }
      };

      // Attach the event listener to the video element
      video.addEventListener('click', handleUserInteraction);

      // Clean up the event listener when the component unmounts
      return () => {
        video.removeEventListener('click', handleUserInteraction);
      };
    }
  }, []);
  const handlePlay = () => {
    if (videoRef.current) {
      // videoRef.current.play().catch((error) => {
      //   // Handle autoplay error (e.g., browser restrictions)
      //   console.error('Autoplay error:', error);
      // });
      setIsMuted(!isMuted)
    }
  };
  return (
    <section className={classes.hero}>
      <h1>Hola soy Edgar Tabares </h1>
      <button onClick={handlePlay}>🔊</button>
      <div className={classes.image}>
      <video
          className={classes.reactive}
          controls
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          width={340} // Set the width of the video
          height={310} // Set the height of the video
        >
          <source src="./images/site/Pensiones_Colombianos._720p.mp4" type="video/mp4" />
          {/* Add additional source elements for other video formats if needed */}
          Your browser does not support the video tag.
        </video>
        {/* <Image
          src='/images/site/icono.png'
          alt='Pensiones Colombianos'
          width={200}
          height={200}
        /> */}
      </div>
      <h2>NUESTRO COMPROMISO ES USTED!</h2>
      <p> Tenemos la experiencia para garantizar el éxito en demandas por pensión de vejez, invalidez, sobreviiente, tutelas y recursos de casacion ante la Corte Suprema de Justicia, Sala Laboral. 
      </p>
      <p> Para ello, tenemos un equipo con Alta calidad humana, que se compromete con cada gestión que se realice para conseguir la pensión a que tiene derecho o indemnización de perjuicios para los pensionados o Afiliados que se trasladaron por engaño de los fondos privados de pensión.</p>
    </section>
  );
}

export default Hero;