import React from 'react'
import styles from './Button.module.css'
import forward from '../../assets/arrow_forward.png'
const Button = ({text,onNext}) => {
  return (
    <div>
        <button onClick={onNext} className={styles.btnSet}><span>{text}</span><img src={forward} alt="" /></button>
    </div>
  )
}

export default Button