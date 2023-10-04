// "use client"
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import EmailForm from './emailForm';
import ContactInfo from "../contactInfo/contactInfo"

function FooterSimple() {

  const linkStyle = {
    textAlign: 'center',
    fontSize: '13px',
    color: '#333',
    textDecoration: 'underline',
  };

  const iconStyle = {
    width: '28px',
    height: '28px',
    objectFit: 'cover',
  };
    return (
      <div class="footer" style={{display:"flex", flexDirection:"column", justifyContent:"flex-start", borderTop:"2px solid black" ,fontSize:"0.8rem",width:"100%"}}> 
      
      <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start"}}>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start",fontSize:"0.8rem",width:"35%"}} >
          <div>
            <p style={linkStyle}>
             <Link href="/contact" target="undefined">
                Contacto
              </Link>
            </p>
          </div>
             <div>
            <p style={linkStyle}>
             <Link href="https://www.triptyclondon.com/faq" target="_self">
                T&Cs
              </Link>
            </p>
          </div>
          <div>
            <p style={linkStyle}>
             <Link href="https://www.triptyclondon.com/store-policy" target="_self" data-anchor="dataItem-j4o5zeeb">
                Metodos De pago
              </Link>
            </p>
          </div>
          <div>
            <p style={linkStyle}>
             <Link href="/posts" target="_self" data-anchor="dataItem-j2rimwuo">
                Sentencias
              </Link>
            </p>
          </div>
          <div>
            <p style={linkStyle}>
             <Link href="https://www.triptyclondon.com/privacy-policy" target="_self">
               Politica de Privacidad
              </Link>
            </p>
          </div>
          </div>
         <EmailForm/>
         <ContactInfo/>
      </div>

 

      <div>
        <ul aria-label="Social Bar">
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", borderTop:"2px solid black" ,fontSize:"0.5rem",gap:"20px",paddingTop:10}}>
        <div style={{zIndex:10}}>
          <a href="https://www.instagram.com/pensionescolombianos/?hl=en">
            <Image height={30} width={30} src="/instagram.png"/>
          </a>
              </div>   
        <div style={{zIndex:10}}>
          <a href="https://www.facebook.com/pensiones.colombianos.9">
            <Image height={30} width={30} src="/facebook.png"/>
          </a>
              </div>   
        <div style={{zIndex:10}}>
          <a href="">
            <Image height={30} width={30} src="/twitter.svg"/>
          </a>
              </div>   
              </div>   
          {/* <li>
            <a href="https://twitter.com/TriptycLondon" target="_blank" rel="noopener">
              <img alt="Twitter - White Circle" src="https://static.wixstatic.com/media/c4392d634a0148fda8b7b2b0ad98293b.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01/c4392d634a0148fda8b7b2b0ad98293b.webp" style={iconStyle} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Triptyclondon/" target="_blank" rel="noopener">
              <img alt="White Facebook Icon" src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01/23fd2a2be53141ed810f4d3dcdcd01fa.webp" style={iconStyle} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/triptyc.london/" target="_blank" rel="noopener">
              <img alt="White Instagram Icon" src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp" style={iconStyle} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
    )
}

export default FooterSimple