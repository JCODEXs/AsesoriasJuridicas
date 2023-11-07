"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const servicesData = [
  {
    title: "Pensión de vejez",
    image: "/images/site/vejez.jpg",
    description:
      "Obtenga la seguridad financiera que merece en sus años dorados con nuestra asesoría experta en pensiones de vejez. Le guiamos en cada paso para asegurar que disfrute de una jubilación cómoda y estable.",
  },
  {
    title: "Pensión de invalidez",
    image: "/images/site/disability.jpg",
    description:
      "Brindamos apoyo integral a aquellos que enfrentan desafíos de salud incapacitantes. Nuestro equipo se compromete a asegurar que reciba la asistencia y los beneficios necesarios con respecto a su pensión por invalidez.",
  },
  {
    title: "Pensión sobreviviente",
    image: "/images/site/advisor1.jpg",
    description:
      "En momentos difíciles, le ofrecemos apoyo para asegurar su estabilidad financiera. Nuestra dedicación a garantizar beneficios justos y oportunos le proporciona la tranquilidad necesaria durante su proceso de pensión de supervivencia.",
  },
  {
    title: "Tutelas y recursos de casasion",
    image: "/images/site/signing.jpg",
    description:
      "Nuestro equipo legal está listo para defender sus derechos y garantizar un proceso legal justo y transparente. Con nuestra experiencia en tutelas, abogamos por sus intereses y luchamos por su acceso equitativo a los beneficios y recursos adecuados.",
  },
  // Add more objects for each service item
  // Example:
  // {
  //   title: "Service Title",
  //   image: "Image URL",
  //   description: "Service Description",
  // },
];

const ServiceCarousel = ({ selectedItem,serviceRef }) => {
  console.log(selectedItem);

  return (
    <div className="hero-carousel" style={{ justifyContent: "center" }}>
      {/* <div style={{fontSize:"1.6rem",fontWeight:500,textAlign: "center"}}>Servicios</div> */}
      <Carousel
        selectedItem={selectedItem}
        showThumbs={false}
        //  autoPlay
        // infiniteLoop
        //  interval={7000}
        showArrows={false}
        showStatus={true}
        transitionTime={1500}
        width={"95%"}
        swipeable={true}
             >
        {servicesData.map((image) => (
         <div
         key={image.image}
         style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '330px',
          maxWidth: '100%',
          margin: '1rem',
          position: 'relative',
         }}
       >
         <Image 
           src={image.image}
           alt={"Law service"}
           width={320}
           height={285}
           style={{maxWidth: '550px',opacity:0.45}}
         />
         <div 
         ref={serviceRef}
           style={{
             position: 'absolute',
            //  top: '5%',
            //  left: '15%',
              // transform: 'translate(15%, 15%)',
             display: 'flex',
             flexDirection: 'column',
             margin: '1rem',
             alignItems: 'center',
             maxWidth: '400px',
             color: 'black', // change as needed
             // add more styles as needed
           }}
         >
           <div style={{fontSize: '1.5rem'}}>{image.title}</div>
           <div style={{fontWeight: 500,maxWidth:"370px"}}>{image.description}</div>
         </div>
       </div>
       
        ))}
      </Carousel>

      {/* <Image 
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      /> */}
    </div>
  );
};

export default ServiceCarousel;
