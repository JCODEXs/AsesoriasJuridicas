"use client"
import React, { useState } from 'react';

function EmailForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your desired action with the email, e.g., send it to the server.
    console.log('Email submitted:', email);
  };

  return (
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
  );
}

export default EmailForm;
