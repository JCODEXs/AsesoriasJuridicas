import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <div
        style={{
          flex: "1 0 23%",
          margin: "10px",
          maxWidth: "400px",
        }}
      >
        <h3>Pensión de vejez</h3>
        <Image
          src="/images/site/vejez.jpg"
          alt="Imagen 1"
          width={250}
          height={170}
        />
        <p style={{ margin: "5px" }}>
          Obtenga la seguridad financiera que merece en sus años dorados con
          nuestra asesoría experta en pensiones de vejez. Le guiamos en cada
          paso para asegurar que disfrute de una jubilación cómoda y estable.
        </p>
      </div>
      <div
        style={{
          flex: "1 0 23%",
          margin: "10px",
          maxWidth: "400px",
        }}
      >
        <h3>Pensión de invalidez</h3>
        <Image
          src="/images/site/disability.jpg"
          alt="Imagen 2"
          width={250}
          height={170}
        />
        <p style={{ margin: "5px" }}>
          Brindamos apoyo integral a aquellos que enfrentan desafíos de salud
          incapacitantes. Nuestro equipo se compromete a asegurar que reciba la
          asistencia y los beneficios necesarios con respecto a su pensión por
          invalidez.
        </p>
      </div>
      <div
        style={{
          flex: "1 0 23%",
          margin: "10px",
          maxWidth: "400px",
        }}
      >
        <h3>Pensión sobreviviente</h3>
        <Image
          src="/images/site/advisor1.jpg"
          alt="Imagen 3"
          width={250}
          height={170}
        />
        <p style={{ margin: "5px" }}>
          En momentos difíciles, le ofrecemos apoyo para asegurar su estabilidad
          financiera. Nuestra dedicación a garantizar beneficios justos y
          oportunos le proporciona la tranquilidad necesaria durante su proceso
          de pensión de supervivencia.
        </p>
      </div>
      <div
        style={{
          flex: "1 0 23%",
          margin: "10px",
          maxWidth: "400px",
        }}
      >
        <h3>Tutelas y recursos de casasion </h3>
        <Image
          src="/images/site/signing.jpg"
          alt="Imagen 4"
          width={250}
          height={170}
        />
        <p style={{ margin: "5px" }}>
          Nuestro equipo legal está listo para defender sus derechos y
          garantizar un proceso legal justo y transparente. Con nuestra
          experiencia en tutelas, abogamos por sus intereses y luchamos por su
          acceso equitativo a los beneficios y recursos adecuados.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "0.6rem",
          margin: "1.3rem",
          fontFamily: "palo seco",
        }}
      >
        <div
          style={{
            display: "block",
            alignItems: "center",
            margin: "0.83rem",
            fontSize: "1.5rem",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          NUESTRO COMPROMISO ES USTED!
        </div>
        <div style={{
            display: "flex",
            flexDirection:"row-reverse",
            alignItems: "center",
            marginBottom: "0.3rem",
            fontSize: "1.2rem",
            justifyContent: "space-between",
            alignContent: "space-evenly",
          }}>
          {" "}
          Tenemos la experiencia para garantizar el éxito en demandas por
          pensión de vejez, invalidez, sobreviviente, tutelas y recursos de
          casación ante la Corte Suprema de Justicia, Sala Laboral.
        </div>
       
          <Image
          src="/images/site/balance.jpg"
          alt="Imagen 2"
          width={250}
          height={170}
        />
         
 <div style={{
            display: "block",
            alignItems: "center",
            marginBottom: "0.3rem",
            fontSize: "1.1rem",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <p> {" "}
          Para ello, contamos con un equipo de alta calidad humana, comprometido
          con cada gestión que se realice para obtener la pensión a la que tiene
          derecho o la indemnización de perjuicios para los pensionados o
          afiliados que fueron trasladados por engaño de los fondos privados de
          pensión. </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
