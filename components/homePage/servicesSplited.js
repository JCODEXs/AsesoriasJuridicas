import React, { useState } from "react";
import Image from "next/image";
import FallingImage from "../fallinImage/fallInImage";

const Services = ({ setSelectedItem, scrollToRef }) => {
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "1.5rem", margin: "1rem" }}>
        Servicios
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "1rem",
          // padding: "10px",
        }}
      >
        <div
          onMouseEnter={() => {
            setSelectedItem(0), scrollToRef();
          }}
          style={{
            flex: "1",
            maxWidth: "400px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "3em",
          }}
        >
          <div
            style={{
              fontSize: "1.2rem",
              textAlign: "center",
              margin: "0.15rem",
              minHeight: "65px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Pensión de vejez
          </div>
          <Image
            src="/images/site/vejez.jpg"
            alt="Imagen 1"
            width={170}
            height={105}
          />
          {/* <p style={{ margin: "5px",maxWidth:"320px",flexGrow:1}}>
            Obtenga la seguridad financiera que merece en sus años dorados con
            nuestra asesoría experta en pensiones de vejez. Le guiamos en cada
            paso para asegurar que disfrute de una jubilación cómoda y estable.
          </p> */}
        </div>
        <div
          onMouseEnter={() => {
            setSelectedItem(1), scrollToRef();
          }}
          style={{
            flex: "1",
            maxWidth: "400px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "3em",
          }}
        >
          <div
            style={{
              fontSize: "1.2rem",
              textAlign: "center",
              margin: "0.15rem",
              minHeight: "65px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Pensión de invalidez
          </div>
          <Image
            src="/images/site/disability.jpg"
            alt="Imagen 2"
            width={170}
            height={105}
          />
          {/* <p style={{ margin: "5px",maxWidth:"320px",flexGrow:1 }}>
            Brindamos apoyo integral a aquellos que enfrentan desafíos de salud
            incapacitantes. Nuestro equipo se compromete a asegurar que reciba la
            asistencia y los beneficios necesarios con respecto a su pensión por
            invalidez.
          </p> */}
        </div>
        <div
          onMouseEnter={() => {
            setSelectedItem(2), scrollToRef();
          }}
          style={{
            flex: "1",
            maxWidth: "400px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "3em",
          }}
        >
          <div
            style={{
              fontSize: "1.2rem",
              textAlign: "center",
              margin: "0.15rem",
              minHeight: "65px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Pensión sobreviviente
          </div>
          <Image
            src="/images/site/advisor1.jpg"
            alt="Imagen 3"
            width={170}
            height={105}
          />
          {/* <p style={{ margin: "5px",maxWidth:"320px",flexGrow:1 }}>
            En momentos difíciles, le ofrecemos apoyo para asegurar su estabilidad
            financiera. Nuestra dedicación a garantizar beneficios justos y
            oportunos le proporciona la tranquilidad necesaria durante su proceso
            de pensión de supervivencia.
          </p> */}
        </div>
        <div
          onMouseEnter={() => {
            setSelectedItem(3), scrollToRef();
          }}
          style={{
            flex: "1",
            maxWidth: "400px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "3em",
          }}
        >
          <div
            style={{
              fontSize: "1.2rem",
              textAlign: "center",
              margin: "0.15rem",
              minHeight: "65px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Tutelas y recursos de casasion{" "}
          </div>
          <Image
            src="/images/site/signing.jpg"
            alt="Imagen 4"
            width={170}
            height={105}
          />
          {/* <p style={{ margin: "5px",maxWidth:"320px",flexGrow:1 }}>
            Nuestro equipo legal está listo para defender sus derechos y
            garantizar un proceso legal justo y transparente. Con nuestra
            experiencia en tutelas, abogamos por sus intereses y luchamos por su
            acceso equitativo a los beneficios y recursos adecuados.
          </p> */}
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "0.6rem",
            margin: "1.3rem",
            // fontFamily: "palo seco",
          }}
        > */}

        {/* <Image
            src="/images/site/balance.jpg"
            alt="Imagen 2"
            width={320}
            height={310}
            style={{ width: "100%",maxWidth: "15%" }}
          />
          <div
            style={{
              display: "block",
              alignItems: "center",
              marginBottom: "0.3rem",
              fontSize: "1.1rem",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <p>
              {" "}
              Para ello, contamos con un equipo de alta calidad humana,
              comprometido con cada gestión que se realice para obtener la pensión
              a la que tiene derecho o la indemnización de perjuicios para los
              pensionados o afiliados que fueron trasladados por engaño de los
              fondos privados de pensión.{" "}
            </p> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Services;
