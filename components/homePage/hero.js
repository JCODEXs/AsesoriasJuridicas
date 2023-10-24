'use client'
import Image from 'next/image'

import classes from './hero.module.css'
import { useEffect, useRef, useState } from 'react'
import EmailForm from '../footer/emailForm'

function Hero () {
  const videoRef = useRef(null)
  console.log(videoRef)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current

    // Check if the video element exists and can be played
    if (video) {
      video.autoplay = true
      video.loop = true

      // Add an event listener for user interaction (e.g., click)
      const handleUserInteraction = () => {
        if (video.paused) {
          // Unmute the video and play it when user interacts
          setIsMuted(false)
          video.play().catch(error => {
            // Handle autoplay error (e.g., browser restrictions)
            console.error('Autoplay error:', error)
          })
        }
      }

      // Attach the event listener to the video element
      video.addEventListener('click', handleUserInteraction)

      // Clean up the event listener when the component unmounts
      return () => {
        video.removeEventListener('click', handleUserInteraction)
      }
    }
  }, [videoRef])
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Handle autoplay error (e.g., browser restrictions)
        console.error('Autoplay error:', error)
      })
      setIsMuted(!isMuted)
    }
  }
  return (
    <section className={classes.hero}>
      <div style={{
        //  marginBottom: '0.7rem' 
         }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            marginBottom: '0.7rem'
          }}
        >
          <div style={{ display: 'flex', fontSize: '1.7rem' }}>
            Hola soy Edgar Tabares{' '}
          </div>
         { isMuted?<button onClick={handlePlay}>
            <Image
              src='/images/site/muted.png'
              alt='Pensiones Colombianos'
              width={25}
              height={23}
            />
          </button>:<button onClick={handlePlay}>
            <Image
              src='/images/site/sound4.png'
              alt='Pensiones Colombianos'
              width={25}
              height={23}
            />
          </button>
          }
        </div>
        <q>Soy CASACIONISTA porque llevo en la sangre justicia</q>
      </div>
      <div className={classes.image}>
        <video
          className={classes.reactive}
          controls
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          width={350} // Set the width of the video
          height={280} // Set the height of the video
        >
          <source
            src='./images/site/Pensiones_Colombianos._720p.mp4'
            type='video/mp4'
          />
          {/* Add additional source elements for other video formats if needed */}
          Your browser does not support the video tag.
        </video>
        <EmailForm />
        {/* <Image
          src='/images/site/icono.png'
          alt='Pensiones Colombianos'
          width={200}
          height={200}
        /> */}
        <div style={{ marginBottom: '0.6rem',margin: '0.3rem' }}>
          <div style={{ marginBottom: '0.3rem',fontSize:"1.4rem" }}>NUESTRO COMPROMISO ES USTED!</div>
          <p>
            {' '}
            Tenemos la experiencia para garantizar el éxito en demandas por
            pensión de vejez, invalidez, sobreviiente, tutelas y recursos de
            casacion ante la Corte Suprema de Justicia, Sala Laboral.
          </p>
          <p>
            {' '}
            Para ello, tenemos un equipo con Alta calidad humana, que se
            compromete con cada gestión que se realice para conseguir la pensión
            a que tiene derecho o indemnización de perjuicios para los
            pensionados o Afiliados que se trasladaron por engaño de los fondos
            privados de pensión.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
