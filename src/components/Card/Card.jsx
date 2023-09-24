import React from 'react'
import styles from './Card.module.css'
const Card = ({heading,icon,children}) => {
    let logo =`/src/assets/${icon}`
  return (
    <div className={styles.main}>
      
      <div className={styles.wrap}>
      <img src={logo} alt="" />
        <span className={styles.headSet}>{heading}</span>
        
      </div>
      {children}
    </div>
  )
}

export default Card