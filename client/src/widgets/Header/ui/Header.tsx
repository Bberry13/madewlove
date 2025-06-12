import React from 'react'
import logo from '@/assets/Header/Header_Logo.png'
import styles from './styles.module.css'
import { useNavigate } from 'react-router';

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
    <div className={styles.header}>
      <div className={styles.header__logo} onClick={() => navigate('/')}><img src={logo} alt="logo" /></div>
      <div className={styles.header_nav}>Портфолио</div>
      <div className={styles.header_nav}>Прайс</div>
      <div className={styles.header_nav}>Отзывы</div>
      <div className={styles.header_nav}>Контакты</div>
    </div>
    </>
  )
}
