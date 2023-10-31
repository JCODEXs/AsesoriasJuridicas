import React from "react";
import styles from './contact-form.module.css';
export  const  EmailTemplate= ({contact}) => {
    console.log(contact)
    return (
    <li className={styles.card} >
{contact.name && (
<div>
  <strong>Nombre:</strong> {contact.name} <br />
</div>
)}
{contact.email && (
<div>
  <strong>Email:</strong> {contact.email} <br />
</div>
)}
{contact.message && (
<div>
  <strong>Mensaje:</strong> {contact.message} <br />
</div>
)}
{contact.contactDetails && (
<div>
  <strong>Email:</strong> {contact.contactDetails} <br />
</div>
)}
{contact.phone && (
<div>
  <strong>Telefono:</strong> {contact.phone} <br />
</div>
)}
<br />
</li>
    );}