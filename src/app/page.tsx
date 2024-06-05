import React from 'react'

import styles from './page.module.css'
import CustomButton from '@/components/CustomButton'

const HomePage = () => 
    <div className={styles.main}>

      <CustomButton name='Sign in'/>
      <CustomButton name='Dashboard'/>
      
    </div>

export default HomePage
