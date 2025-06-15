import React from 'react'
import { useNavigate } from 'react-router'
import styles from './Not-found.module.css'

export default function NotFound(): React.JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>Страница не найдена</p>
      <button className={styles.submitButton} onClick={handleClick}>На главную</button>
    </div>
  )
}
