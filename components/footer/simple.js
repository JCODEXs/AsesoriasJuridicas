"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ContactInfo from "../contactInfo/contactInfo";
import classes from "./simple.module.css";
function FooterSimple() {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        // borderTop: "2px solid black",
        fontSize: "1rem",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "0.25rem",
          alignItems: "center",
        }}
      >
        <ContactInfo />
        <div>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              marginBottom: "1rem",
            }}
          >
            Enlaces de interes{" "}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "10rem 1fr",
              alignItems: "center",
              maxHeight: "175px",
              gap: "0.68rem",
            }}
          >
            <div className={classes.link}>
              <Link
                href="https://procesos.ramajudicial.gov.co/procesoscs/ConsultaJusticias21.aspx?EntryId=fhew4AwaFKC0TSKjVfuB0BkS4MY%3d "
                target="_blank"
                rel="noopener noreferrer"
              >
                Corte Suprema
              </Link>
            </div>
            {/* <div className={classes.link}>
                <Link
                  href="https://sede.colpensiones.gov.co/tramite/updInfo/74/ "
                  target="_blank" rel="noopener noreferrer"
                >
                  Calcula tu pension
                </Link>
              </div> 
           <div className={classes.link}>
                <Link
                  href="https://www.porvenir.com.co/web/personas/inicio "
                  target="_blank" rel="noopener noreferrer"
                >
                  Porvenir
                </Link>
              </div> 
           <div className={classes.link}>
                <Link
                  href="https://www.colfondos.com.co/dxp/web/guest"
                  target="_blank" rel="noopener noreferrer"
                >
                  Colfondos
                </Link>
              </div> 
           <div className={classes.link}>
                <Link
                  href="https://www.proteccion.com/contenidos/personas/inversion/ "
                  target="_blank" rel="noopener noreferrer"
                >
                  Proteccion
                </Link>
              </div> 
           <div className={classes.link}>
                <Link
                  href="https://www.skandia.co/ "
                  target="_blank" rel="noopener noreferrer"
                >
                  Skandia
                </Link>
              </div>  */}
          </div>
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "0.7rem",
            margin: "1rem",
          }}
        >
          <div>
            <p className={classes.link}>
              <Link href="/contact" target="undefined">
                Contacto
              </Link>
            </p>
          </div>
          <div>
            <p className={classes.link}>
              <Link href="https://www.triptyclondon.com/faq" target="_self">
                T&Cs
              </Link>
            </p>
          </div>
          <div>
            <p className={classes.link}>
              <Link
                href="https://www.triptyclondon.com/store-policy"
                target="_self"
                data-anchor="dataItem-j4o5zeeb"
              >
                Metodos De pago
              </Link>
            </p>
          </div>
          <div>
            <p style={linkStyle}>
              <Link
                href="/posts"
                target="_self"
                data-anchor="dataItem-j2rimwuo"
              >
                Sentencias
              </Link>
            </p>
          </div>
          <div>
            <p style={linkStyle}>
              <Link
                href=""
                target="_self"
              >
                Politica de Privacidad
              </Link>
            </p>
          </div>
        </div> */}
      </div>

      <div>
        卷<div className="text-xs">Copyright © 2023 Metta Flow</div>
        <div>
          <ul aria-label="Social Bar">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                borderTop: "2px solid black",
                fontSize: "0.5rem",
                gap: "20px",
                paddingTop: 10,
              }}
            >
              <div style={{ zIndex: 10 }}>
                <a
                  href="https://www.instagram.com/pensionescolombianos/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    height={30}
                    width={30}
                    src="/instagram.png"
                    alt="insta"
                  />
                </a>
              </div>
              <div style={{ zIndex: 10 }}>
                <a
                  href="https://www.facebook.com/pensiones.colombianos.9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    height={26}
                    width={26}
                    src="/facebook.png"
                    alt="face"
                  />
                </a>
              </div>
              <div style={{ zIndex: 10 }}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    height={30}
                    width={30}
                    src="/twitter.svg"
                    alt="twitter"
                  />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterSimple;
