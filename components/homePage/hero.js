"use client";
import Image from "next/image";

import classes from "./hero.module.css";
import { useEffect, useRef, useState } from "react";
import EmailForm from "../footer/emailForm";

function Hero() {
  const videoRef = useRef(null);
  console.log(videoRef);
  const [isMuted, setIsMuted] = useState(true);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle autoplay error (e.g., browser restrictions)
        console.error("Autoplay error:", error);
      });
      setIsMuted(!isMuted);
    }
  };
  const soundButton = isMuted ? (
    <button onClick={handlePlay}>
      <span class="material-symbols-outlined">volume_off</span>
    </button>
  ) : (
    <button onClick={handlePlay}>
      <span class="material-symbols-outlined">volume_up</span>
    </button>
  );
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
            console.error("Autoplay error:", error);
          });
        }
      };

      // Attach the event listener to the video element
      video.addEventListener("click", handleUserInteraction);

      // Clean up the event listener when the component unmounts
      return () => {
        video.removeEventListener("click", handleUserInteraction);
      };
    }
  }, [videoRef]);
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <video
          className={classes.reactive}
          controls
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          width={350} // Set the width of the video
          height={480} // Set the height of the video
          style={{
            objectFit: "cover",
            width: "100%",
            maxWidth: "1000px",
            maxHeight: "300px",
          }}
        >
          <source
            src="./images/site/Pensiones_Colombianos._720p.mp4"
            type="video/mp4"
          />
          {/* Add additional source elements for other video formats if needed */}
          Your browser does not support the video tag.
        </video>

        {/* <EmailForm /> */}

        {/* <Image
          src='/images/site/icono.png'
          alt='Pensiones Colombianos'
          width={200}
          height={200}
        /> */}
      </div>
      <div
        style={
          {
            //  marginBottom: '0.7rem'
          }
        }
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: "0.7rem",
          }}
        >
          <div style={{ display: "flex", fontSize: "1.7rem" }}>
            Hola soy Edgar Tabares {soundButton}
          </div>
          <q
            style={{
              margin: "0.6rem",
              fontFamily: "Crimson Text",
              fontWeight: "600",
              fontSize: "1.6rem",
            }}
          >
            Soy CASACIONISTA porque llevo en la sangre justicia
          </q>
        </div>
      </div>
    </section>
  );
}

export default Hero;
