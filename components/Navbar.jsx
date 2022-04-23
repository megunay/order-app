import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

import {AiOutlinePhone} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'




const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <AiOutlinePhone className={styles.image} />
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>
            Order
          </div>

          <div className={styles.text}>
            +90(312)999-99-99
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HomePage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>

          <Image 
            src="/img/chelivery.png"
            alt='CompanyLogo' 
          />

          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <FiShoppingCart />
          <div className={styles.counter}>2</div>
        </div>
      </div>  
    </div>
  )
}

export default Navbar