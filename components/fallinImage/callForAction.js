"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./fallInImage.module.css";
import EmailForm from "../footer/emailForm";
const CallForAction = ({ text, title, width = 150, height = 120 }) => {
  //   console.log(inverted);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const refElement = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (refElement.current) {
        const refPosition2 =
          refElement.current.getBoundingClientRect().top - 200;
        const scrollPosition = window.scrollY;

        // console.log(scrollPosition,refPosition)
        if (scrollPosition > refPosition2) {
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

  return (
    <div className={styles.container} ref={refElement}>
      <div className={styles.contentCallAction}>
        <div className={` ${styles.text}`}>
          <div className={styles.title}>{title}</div>
          <p>{text}</p>
        </div>
        <div
          className={
            shouldAnimate ? ` ${styles.animate}` : `${styles.fallingImage}`
          }
        >
          {" "}
          <EmailForm
            shouldAnimate={shouldAnimate}
            setShouldAnimate={setShouldAnimate}
          />
        </div>
      </div>
    </div>
  );
};

export default CallForAction;
