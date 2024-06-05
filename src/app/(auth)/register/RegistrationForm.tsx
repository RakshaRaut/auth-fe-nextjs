"use client"; // This directive ensures the component is treated as a client component

import React from 'react';
import styles from '@/styles/AuthForm.module.css';
import Link from 'next/link';

const RegistrationForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input type="email" id="email" className={styles.input} required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input type="password" id="password" className={styles.input} required />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
        <input type="password" id="confirmPassword" className={styles.input} required />
      </div>
      <button type="submit" className={styles.button}>Register</button>
      <Link href='/login' className='center gap'>
        Login
      </Link>
    </form>
    </div>
  );
};

export default RegistrationForm;
