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

  if (!open) return <></>;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Настройки Cookie</h2>
        <p>
          Продолжая использовать сайт, вы можете выбрать, какие cookie
          разрешить:
        </p>
        <div className={styles.checkboxContainer}>
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
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.rejectButton}
            onClick={() => {
              onSave(prefs);
            }}
          >
            Принять
          </button>
          <button
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
          </button>
        </div>

        <p className={styles.footnote}>
          Ознакомьтесь с{' '}
          <span className={styles.link} onClick={() => navigate('/politics')}>
            Политикой конфиденциальности
          </span>{' '}
          и{' '}
          <span className={styles.link} onClick={() => navigate('/oferta')}>
            Офертой
          </span>
          .
        </p>
      </div>
    </div>
  );
};
