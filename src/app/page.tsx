'use client';

import React from 'react'

import styles from './page.module.css'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'next/navigation'

const HomePage = () => 
   {
    const router = useRouter();
    const nav=(text:string)=>{
      router.push(text);
    }
    return ( <div className={styles.main}>

    <CustomButton name='Sign in' onClick={(_e)=>{
      nav('login');
    }} />
    <CustomButton name='Dashboard' onClick={(_e)=>{
      nav('dashboard');
    }}/>
    
  </div>)
   }

export default HomePage
