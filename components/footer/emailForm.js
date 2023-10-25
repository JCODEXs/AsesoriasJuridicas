"use client"
import React, { useEffect, useState } from 'react';
import Notification from "../../components/notifications/notification"
function EmailForm() {
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [email, setEmail] = useState('');
  const [error, setError] = useState('Email invalido');
  const [emailValid, setEmailValid] = useState(false);

  const checkEmail = (input) => {
    setEmail(input);
    if (validateEmail(input)) {
      setEmailValid(true);
    } else {
      console.log("Invalid email");
      setEmailValid(false);
    }
  };
  
  async function sendContactData(contactDetails) {
    const response = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({contactDetails}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailValid) {
      setRequestStatus('error');
      return;
    }
    setRequestStatus('pending');
   try{
     sendContactData(email)
     setRequestStatus('success');
     setEmail('');
       }catch(er){
        console.log(er)
         setRequestStatus('error');
         setError(er)
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
      <form onSubmit={handleSubmit} style={{margin:"0.3rem"}}>
        <input
          className="InputField"
          type="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={(e) => checkEmail(e.target.value)}
          required
        />
        <button className="SubmitButton" type="submit">
          Enviar
        </button>
      </form>
      {requestStatus && (
        <Notification
          status={requestStatus}
          requestError={error}
      
        />
      )}
    </div>
  );
}

export default EmailForm;
