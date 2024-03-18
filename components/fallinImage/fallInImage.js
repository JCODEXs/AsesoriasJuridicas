"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./fallInImage.module.css";
import Image from "next/image";
const FallingImage = ({
  image,
  inverted,
  text,
  title,
  width = 150,
  height = 120,
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(null);
  const refElement = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (refElement.current) {
        const refPosition =
          refElement.current.getBoundingClientRect().top - 372;
        const scrollPosition = window.scrollY;
        // console.log(scrollPosition,refPosition)
        if (scrollPosition > refPosition) {
          setShouldAnimate(true);
          // console.log(refPosition,scrollPosition)
        }
        // else {
        //   setShouldAnimate(false);
        //   // console.log(refPosition)
        // }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const animationClass = shouldAnimate
    ? !inverted
      ? styles.animate
      : styles.animateLeft
    : "";
  return (
    <div className={styles.container} ref={refElement}>
      <div className={inverted ? styles.inverted : styles.content}>
        <div
          className={
            shouldAnimate ? ` ${styles.animateText}` : ` ${styles.text}`
          }
        >
          <div className={styles.title}>{title}</div>
          <p>{text}</p>
        </div>
        <Image
          src={image}
          alt="Falling"
          width={width}
          height={height}
          className={
            shouldAnimate
              ? !inverted
                ? ` ${styles.animate}`
                : ` ${styles.animateLeft}`
              : styles.fallingImage
          }
        />
      </div>
    </div>
  );
};

export default FallingImage;
