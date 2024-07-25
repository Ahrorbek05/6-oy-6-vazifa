import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

function Index() {

  const [values, setValues] = useState([]);
  const [error, setError] = useState({});

  function handleChange(event) {
    let { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function validate() {
    let xatolik = {};

    if (!values.fullName.trim()) {
      xatolik.fullName = "Ismingizni to'g'ri va to'liq kiriting";
    }

    if (!values.username.trim()) {
      xatolik.username = "Foydalanuvchi nomini kiriting!";
    }

    if (!values.password) {
      xatolik.password = "Parol kiriting!";
    } else if (values.password.length < 8) {
      xatolik.password = "Parol kamida 8 ta belgidan iborat bo'lishi kerak!";
    }

    if (!values.biography.trim()) {
      xatolik.biography = "Biografiya kiriting!";
    }
    return xatolik;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let xatolik = validate();
    if (Object.keys(xatolik).length === 0) {
      console.log("Ma'lumotlar yuborildi!", values);
    } else {
      setError(xatolik);
    }
  }

  return (
    <div className={styles['wrap']}>
      <h1 className={styles['title']}>Create An Account</h1>
      <h3 className={styles['comment']}>Kindly fill the following details to create your account.</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name='fullName'
          value={values.fullName}
          type="text"
          placeholder='Enter your full name'
        />
        {error.fullName && <p style={{ color: 'red' }}>{error.fullName}</p>}  
        <br />
        <input
          value={values.email}
          onChange={handleChange}
          name='email'
          type="email"
          placeholder='Enter your email address'
        />
        {error.email && <p style={{ color: 'red' }}>{error.email}</p>}  
        <br />
        <input
          value={values.username}
          onChange={handleChange}
          name='username'
          type="text"
          placeholder='Enter your username'
        />
        {error.username && <p style={{ color: 'red' }}>{error.username}</p>}  
        <br />
        <input
          value={values.password}
          onChange={handleChange}
          name='password'
          type="password"
          placeholder='Enter password'
        />
        {error.password && <p style={{ color: 'red' }}>{error.password}</p>}  
        <br />
        <textarea
          value={values.biography}
          onChange={handleChange}
          name='biography'
          className={styles['biography']}
          placeholder='Your Biography'
        ></textarea>
        {error.biography && <p style={{ color: 'red' }}>{error.biography}</p>}  
        <br />
        <button type='submit' className={styles['btn']}>CREATE ACCOUNT</button>
        <br />
        <p>Your will receive an email after setting up your account</p>
      </form>
    </div>
  );
}

export default Index;
