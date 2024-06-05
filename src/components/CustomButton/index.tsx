import React from 'react';
import styles from './CustomButton.module.css'
const CustomButton = ({name, ...props}:CustomButtonProps) => {
  return (
    <button className={styles.button} {...props}>
        {name}
    </button>
  )
}

export default CustomButton
