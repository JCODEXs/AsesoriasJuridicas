import React from 'react'
import classes from "./contactInfo.module.css"
const ContactInfo = () => {
  return (
    <div className={classes.contactInfo}>
    <ul>
        <li >
            <i className={classes.icon}>📧</i>
            <span> asesoriastabares@hotmail.com</span>
        </li>
        <li>
            <i className={classes.icon}>📞</i>
            <div> (+57) 316 759 13 99</div>
          </li>
          <li>
          <i className={classes.icon}>📞</i>
            <div> (+1) 954 534 43 88</div>
          </li>
        <li>
            <i className={classes.icon}>🏢</i>
            <div>
            Edificio Plaza de Cayzedo  
            Cali, Carrera 4 No. 10-44 Of. 718
            </div>
        </li>
    </ul>
</div>

  )
}

export default ContactInfo