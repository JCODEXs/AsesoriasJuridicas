import React from "react";
import Image from "next/image";
import FallingImage from "../fallinImage/fallInImage";

const Experience = () => {
  return (
    <div
      style={{
        display: "block",
        alignItems: "center",
        fontSize: "1.1rem",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <FallingImage
        image="/images/site/edgar.jpg"
        text=" Tenemos la experiencia para garantizar el éxito en demandas por
    pensión de vejez, invalidez, sobrevivencia, tutelas y recursos de
    casación ante la Corte Suprema de Justicia, Sala Laboral."
        inverted={true}
        title="Nosotros"
        width={320}
        height={310}
      />

      {/* <Image
    src="/images/site/edgar.jpg"
    alt="Imagen 2"
    width={320}
    height={310}
    style={{ width: "100%",maxWidth: "35%",aspectRatio:"auto" }}
    /> */}
      <FallingImage
        image="/images/site/balance.jpg"
        title="Eligenos"
        text="Para ello, contamos con un equipo de alta calidad humana,
  comprometido con cada gestión que se realice para obtener la pensión
  a la que tiene derecho o la indemnización de perjuicios para los
  pensionados o afiliados que fueron trasladados por engaño de los
  fondos privados de pensión"
        inverted={false}
        width={150}
        height={110}
      />
    </div>
  );
};
export default Experience;
