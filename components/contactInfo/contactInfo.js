import React from 'react'
import classes from "./contactInfo.module.css"
const ContactInfo = () => {
  return (
    <div className={classes.contactinfo}>
    <ul>
        <li >
            <i className={classes.icon}>📧</i>
            <span>asesoriastabares@hotmail.com</span>
        </li>
        <li>
            <i className={classes.icon}>📞</i>
            <span> (+57) 3167591399</span>
            <br>
                </br>
            <i className={classes.icon}>📞</i>
            <span> (+1) 954-534-4388</span>
        </li>
        <li>
            <i className={classes.icon}>🏢</i>
            <span>
            Edificio Plaza de Cayzedo  
                <br>
                </br>
              Cali, Carrera 4 No. 10-44 Of. 718
            </span>
        </li>
    </ul>
</div>

  )
}

export default ContactInfo