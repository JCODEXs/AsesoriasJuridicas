import React, { useEffect, useState } from "react";
import styles from "./contact-form.module.css";
import Notification from "../notifications/notification";
const UserList = ({ contacts }) => {
  const [requestStatus, setRequestStatus] = useState();
  const [contactsList, setContactsList] = useState(
    contacts?.combinedResults || contacts
  );
  // console.log(requestStatus);
  async function deleteContact(contact) {
    setRequestStatus("pending");
    try {
      const response = await fetch("/api/contact", {
        method: "DELETE",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setRequestStatus("success");
        setContactsList(contactsList.filter((element) => element !== contact));
      } else {
        console.error("Failed to delete contact");
        setRequestStatus("error");
      }
    } catch (error) {
      setRequestStatus("error");
      console.error("Error deleting contact:", error);
    }
  }
  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);
  return (
    <div>
      <h2>Lista de registro de Contactos:</h2>
      <div className={styles.grid}>
        {contactsList?.length &&
          contactsList.map((contact, index) => (
            <li className={styles.card} key={index}>
              <button
                styles={{
                  justifySelf: "flex-end",
                  fontSize: "0.8rem",
                  margin: "0.51rem",
                }}
                onClick={() => deleteContact(contact)}
              >
                メ
              </button>
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
          ))}
      </div>
      {requestStatus && <Notification status={requestStatus} />}
    </div>
  );
};

export default UserList;
