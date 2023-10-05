import { useState, useEffect } from 'react';

import styles from './contact-form.module.css';
import Notification from '../ui/notification';
import Image from 'next/image';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    console.log("hi")
    throw new Error(data.message || 'Something went wrong!');
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();
    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Enviando mensaje...',
      message: 'Tu mensaje esta siendo enviado..',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Exito!',
      message: 'Mensaje Enviado Exitosamente!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <div style={{display:'flex',flexDirection:'row',flexWrap:"wrap",overflowY:"scroll",height:"100%",marginBottom:"3rem"}}>
      <section className={styles.contact}>
        <h1>¿Como podemos ayudarle?</h1>
        <form className={styles.form} onSubmit={sendMessageHandler}>
          <div className={styles.controls}>
            <div className={styles.control}>
              <label htmlFor='email'> Email</label>
              <input
                type='email'
                id='email'
                required
                value={enteredEmail}
                onChange={(event) => setEnteredEmail(event.target.value)}
              />
            </div>
            <div className={styles.control}>
              <label htmlFor='name'>Nombre</label>
              <input
                type='text'
                id='name'
                required
                value={enteredName}
                onChange={(event) => setEnteredName(event.target.value)}
              />
            </div>
          </div>
          <div className={styles.control}>
            <label htmlFor='message'>Mensaje</label>
            <textarea
              id='message'
              rows='5'
              required
              value={enteredMessage}
              onChange={(event) => setEnteredMessage(event.target.value)}
            ></textarea>
          </div>
          
            <button className="SubmitButton" >Enviar📨</button>
     
          <h1>Ingrese su informacion y nos pondremos en contacto con Usted</h1>
        </form>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        {/* <pre>{JSON.stringify(notification,null,2)}</pre> */}
      </section>
      <div className={styles.image}>
       <Image
         src='/images/site/edgar.jpg'
         alt='Pensiones Colombianos'
         width={200}
         height={200}
       />
     </div>
    </div>
  );
}

export default ContactForm;