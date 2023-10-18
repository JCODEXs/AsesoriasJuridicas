import React from 'react';
import styles from './contact-form.module.css';
const UserList = ({ users }) => {
    const contacts = users.combinedResults
    console.log(contacts)
    console.log(contacts[1].contactDetails)
    console.log(contacts.length)
  return (
    <div>
      <h2>Lista de registro de Contactos:</h2>
      <div className={styles.grid}>
        {contacts.length && contacts.map((user, index) => (
          <li className={styles.card} key={index}>
              <button styles={{justifySelf:"flex-end",fontSize:"0.8rem", margin:"1rem"}}>メ</button>
            {user.name && (
              <div>
                <strong>Nombre:</strong> {user.name} <br />
              </div>
            )}
            {user.email && (
              <div>
                <strong>Email:</strong> {user.email} <br />
              </div>
            )}
            {user.message && (
              <div>
                <strong>Mensaje:</strong> {user.message} <br />
              </div>
            )}
            {user.contactDetails && (
              <div>
                <strong>Email:</strong> {user.contactDetails} <br />
              </div>
            )}
            <br />
          </li>
        ))}
      </div>
    </div>
  );
};

export default UserList;
