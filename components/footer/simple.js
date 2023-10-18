// "use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import EmailForm from "./emailForm";
import ContactInfo from "../contactInfo/contactInfo";

function FooterSimple() {
  const linkStyle = {
    textAlign: "center",
    fontSize: "13px",
    color: "#333",
    textDecoration: "underline",
  };

  const iconStyle = {
    width: "28px",
    height: "28px",
    objectFit: "cover",
  };
  return (
    <div
      class="footer"
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
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            fontSize: "0.7rem",
            margin: "1rem",
          }}
        >
          <div>
            <p style={linkStyle}>
              <Link href="/contact" target="undefined">
                Contacto
              </Link>
            </p>
          </div>
          {/* <div>
            <p style={linkStyle}>
              <Link href="https://www.triptyclondon.com/faq" target="_self">
                T&Cs
              </Link>
            </p>
          </div> */}
          {/* <div>
            <p style={linkStyle}>
              <Link
                href="https://www.triptyclondon.com/store-policy"
                target="_self"
                data-anchor="dataItem-j4o5zeeb"
              >
                Metodos De pago
              </Link>
            </p>
          </div> */}
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
          {/* <div>
            <p style={linkStyle}>
              <Link
                href=""
                target="_self"
              >
                Politica de Privacidad
              </Link>
            </p>
          </div> */}
        </div>

        <ContactInfo />
      </div>

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
              <a href="https://www.instagram.com/pensionescolombianos/?hl=en">
                <Image height={30} width={30} src="/instagram.png" alt="insta" />
              </a>
            </div>
            <div style={{ zIndex: 10 }}>
              <a href="https://www.facebook.com/pensiones.colombianos.9">
                <Image height={30} width={30} src="/facebook.png" alt="face" />
              </a>
            </div>
            <div style={{ zIndex: 10 }}>
              <a href="">
                <Image height={30} width={30} src="/twitter.svg" alt="twitter"/>
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default FooterSimple;
