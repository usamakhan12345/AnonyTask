import React from 'react'
import logo from '../../assets/logo.png'
import styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <div className={styles.main}>
        <span className={styles.mainHead}>Anony</span>
        <img src={logo} alt="" />
    </div>
  )
}

export default NavBar