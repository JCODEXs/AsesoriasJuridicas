"use client"
import React, { useEffect, useState,useRef } from "react";
import styles from "./fallInImage.module.css";
import Image from "next/image";
const FallingImage = ({ image, inverted, text, title }) => {
  console.log(inverted)
  const [shouldAnimate, setShouldAnimate] = useState(null);
  const refElement = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (refElement.current) {
        const refPosition = refElement.current.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;
        // console.log(scrollPosition,refPosition)
        if (scrollPosition > refPosition) {
          setShouldAnimate(true);
          // console.log(refPosition,scrollPosition)
         
        } else {
          setShouldAnimate(false);
          // console.log(refPosition)
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const animationClass = shouldAnimate ? (!inverted ? styles.animate : styles.animateLeft) : '';
  return (
    <div className={ styles.container } ref={refElement}  >
      <div className={inverted ?styles.inverted :styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <p>{text}</p>
        </div>
        <Image src={image} alt="Falling" width={200} height={200}  className={shouldAnimate ?  (!inverted ? `${styles.fallingImage} ${styles.animate}`: `${styles.fallingImage} ${styles.animateLeft}`) : styles.fallingImage} />
      </div>
    </div>
  );
};

export default FallingImage;