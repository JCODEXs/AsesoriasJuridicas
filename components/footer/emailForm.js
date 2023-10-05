"use client"
import React, { useEffect, useState } from 'react';
import Notification from "../../components/notifications/notification"
function EmailForm() {
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [email, setEmail] = useState('');

  async function sendContactData(contactDetails) {
    const response = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({contactDetails}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequestStatus('pending');
   try{
     sendContactData(email)
     setRequestStatus('success');
     setEmail('');
       }catch(er){
        console.log(er)
         setRequestStatus('error');
       } 
    console.log('Email submitted:', email);
  };

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);
  return (
    <div>
      <form onSubmit={handleSubmit} style={{marginRight:"2rem"}}>
        <input
          className="InputField"
          type="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="SubmitButton" type="submit">
          Enviar
        </button>
      </form>
      {requestStatus && (
        <Notification
          status={requestStatus}
      
        />
      )}
    </div>
  );
}

export default EmailForm;
