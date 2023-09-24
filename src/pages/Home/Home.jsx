import React from 'react'
import Card from '../../components/Card/Card'
import styles from './Home.module.css'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const next = ()=>{
    navigate('/authenticate')
  }
  return (
    <div className={styles.cardWrapper}>
      <Card heading='Welcome to Anony!' icon='logo.png'>
      <p className={styles.cardDis}>We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)</p>
     <div className={styles.btnCover}>
     <Button onNext={next} text='Get Your UserName' />
     </div>
      </Card>
    </div>
  )
}

export default Home