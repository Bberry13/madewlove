// src/entities/recorder/ui/CookieConsentModal.tsx
import React, { useState, type JSX } from 'react';
import styles from './CookieConsentModal.module.css';
import { useNavigate } from 'react-router';

export interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
  essential: boolean; // всегда true
}

interface CookieConsentModalProps {
  open: boolean;
  onSave: (prefs: CookiePreferences) => void;
  onRejectAll: () => void;
}

export const CookieConsentModal: React.FC<CookieConsentModalProps> = ({
  open,
  onSave,
}): JSX.Element => {
  const navigate = useNavigate();
  const [prefs, setPrefs] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  if (!open) return <></>;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Настройки Cookie</h2>
        <p>
        Продолжая использовать наш сайт, вы даете согласие на обработку файлов cookie, которые обеспечивают правильную работу сайта и подтверждаете, что ознакомились и согласны с условиями Оферты и Политики обработки персональных данных
        </p>
        {isOpen && <div className={styles.checkboxContainer}>
          <label className={styles.checkboxLabel}>
            <input
              className={styles.realCheckbox}
              type="checkbox"
              checked
              disabled
            />
            <span className={styles.customCheckbox}></span>
            Обязательные
          </label>
          <br />
          <label className={styles.checkboxLabel}>
            <input
              className={styles.realCheckbox}
              type="checkbox"
              checked={prefs.analytics}
              onChange={() =>
                setPrefs((p) => ({ ...p, analytics: !p.analytics }))
              }
            />
            <span className={styles.customCheckbox}></span>
            Аналитические
          </label>
          <br />
          <label className={styles.checkboxLabel}>
            <input
              className={styles.realCheckbox}
              type="checkbox"
              checked={prefs.marketing}
              onChange={() =>
                setPrefs((p) => ({ ...p, marketing: !p.marketing }))
              }
            />
            <span className={styles.customCheckbox}></span>
            Маркетинговые
          </label>
        </div>}
        <div className={styles.buttons}>
          <button
            className={styles.rejectButton}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            Настроить
          </button>
          {isOpen ? <button
            className={styles.saveButton}
            onClick={() => {
              onSave(prefs);
            }}
          >
            Принять
          </button> : <button
            className={styles.saveButton}
            onClick={() => {
              onSave({
                essential: true,
                analytics: true,
                marketing: true,
              });
            }}
          >
            Принять все
          </button>}
        </div>

        <p className={styles.footnote}>
          Ознакомьтесь с{' '}
          <span className={styles.link} onClick={() => {navigate('/politics'); window.scrollTo({ top: 0, behavior: 'smooth' })}}>
            Политикой конфиденциальности
          </span>{' '}
          и{' '}
          <span className={styles.link} onClick={() => {navigate('/oferta'); window.scrollTo({ top: 0, behavior: 'smooth' })}}>
            Офертой
          </span>
          .
        </p>
      </div>
    </div>
  );
};
