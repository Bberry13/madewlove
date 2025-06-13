import React from 'react';
import styles from './CookieConsentModal.module.css';
import { useNavigate } from 'react-router';

interface CookieConsentModalProps {
  open: boolean;
  onAccept: () => void;
}

const CookieConsentModal: React.FC<CookieConsentModalProps> = ({
  open,
  onAccept,
}) => {
  const navigate = useNavigate();
  if (!open) return null;
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalMessage}>
          Продолжая использовать наш сайт,
          <br />
          вы даете согласие на обработку
          <br />
          файлов cookie, которые
          <br />
          обеспечивают правильную работу
          <br />
          сайта и подтверждаете, что
          <br />
          ознакомились и согласны с<br />
          условиями{' '}
          <span className={styles.link} onClick={() => navigate('/oferta')}>
            Оферты
          </span>{' '}
          и{' '}
          <span className={styles.link} onClick={() => navigate('/politics')}>
            Политики обработки персональных данных
          </span>
        </div>
        <button className={styles.okButton} onClick={onAccept}>
          ОК
        </button>
      </div>
    </div>
  );
};

export default CookieConsentModal;
