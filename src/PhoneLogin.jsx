import React, { useState } from 'react';
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

function PhoneLogin({ onVerify }) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmObj, setConfirmObj] = useState(null);

  const setUpRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      if (!auth) {
        alert("Firebase auth is not defined!");
        return;
      }
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        'recaptcha-container', // ID of div
        {
          size: 'invisible',
          callback: (response) => {
            console.log("Recaptcha solved");
          },
        },
         // ✅ This is the missing piece!
      );
    }
  };

  const sendOtp = () => {
    if (!phone.startsWith('+') || phone.length < 10) {
      alert("Please enter a valid phone number (e.g. +919876543210)");
      return;
    }

    setUpRecaptcha();

    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        setConfirmObj(confirmationResult);
        alert("OTP sent!");
      })
      .catch((error) => {
        alert("Error sending OTP: " + error.message);
      });
  };

  const verifyOtp = () => {
    if (confirmObj && otp) {
      confirmObj.confirm(otp)
        .then(() => {
          alert("Phone number verified!");
          onVerify();
        })
        .catch(() => alert("Invalid OTP"));
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login with Phone OTP</h2>
      <input
        type="tel"
        placeholder="e.g. +919876543210"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>
      <br /><br />
      {confirmObj && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
      <div id="recaptcha-container"></div>
    </div>
  );
}

export default PhoneLogin;
