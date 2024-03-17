"use client";
import Services from "../../components/homePage/servicesSplited";
import ServiceCarousel from "../../components/heroCarrusel/servicesCarrusel";
import Experience from "../../components/homePage/experience";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const EspecialInfo = forwardRef((props, ref) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const servicesRef = useRef(null);

  const scrollToRef = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useImperativeHandle(ref, () => ({
    scrollToRef,
  }));

  return (
    <div>
      <Experience />
      <Services setSelectedItem={setSelectedItem} scrollToRef={scrollToRef} />
      <div ref={servicesRef}>
        <ServiceCarousel selectedItem={selectedItem} />
      </div>
    </div>
  );
});
EspecialInfo.displayName = "EspecialInfo";
export default EspecialInfo;
