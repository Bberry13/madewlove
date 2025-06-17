import React from 'react';
import styles from './Footer.module.css';
import { CLIENT_ROUTING } from '@/shared/enums/clientRouting';
import { useNavigate } from 'react-router';
export function Footer(): React.JSX.Element {
  const navigate = useNavigate();
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerLinksColumn}>
        <div className={styles.footerLinks}>
          <span
            className={styles.footerLink}
            onClick={() => {navigate(CLIENT_ROUTING.PRIVACY_POLICY); window.scrollTo({ top: 0, behavior: 'smooth' })}}
          >
            Политика конфиденциальности
          </span>
          <span
            className={styles.footerLink}
            onClick={() => {navigate(CLIENT_ROUTING.OFERTA); window.scrollTo({ top: 0, behavior: 'smooth' })}}
          >
            Оферта
          </span>
        </div>
        <div className={styles.footerDetails}>
          ИП Черничкина Анастасия Алеексеевна
          <br />
          ИНН 772453181190
          <br />
          ОГРНИП 320774600293334
        </div>
      </div>
      <div className={styles.footerIconsColumn}>
        <div className={styles.footerIcons}>
          <a
            href="https://wa.me/+79163108899?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%82%D0%B5%D0%BB%D0%B0%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D1%83%20%D0%B2%D0%B0%D1%81%20%D1%84%D0%BE%D1%82%D0%BE%D1%81%D1%8A%D0%B5%D0%BC%D0%BA%D1%83%21%29"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerIcon}
            aria-label="WhatsApp"
          >
            <svg
              className={styles.footerIconSvg}
              width="20"
              height="20"
              viewBox="0 0 90 90"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <path
                    d="M90,43.8c0,24.2-19.8,43.8-44.2,43.8c-7.7,0-15-2-21.4-5.5L0,90l8-23.5c-4-6.6-6.3-14.4-6.3-22.6     C1.6,19.6,21.4,0,45.8,0C70.2,0,90,19.6,90,43.8z M45.8,7C25.3,7,8.7,23.5,8.7,43.8c0,8.1,2.6,15.5,7.1,21.6l-4.6,13.7l14.3-4.5     c5.9,3.9,12.9,6.1,20.4,6.1C66.3,80.7,83,64.2,83,43.8S66.3,7,45.8,7z M68.1,53.9c-0.3-0.4-1-0.7-2.1-1.3     c-1.1-0.5-6.4-3.1-7.4-3.5c-1-0.4-1.7-0.5-2.4,0.5c-0.7,1.1-2.8,3.5-3.4,4.2c-0.6,0.7-1.3,0.8-2.3,0.3c-1.1-0.5-4.6-1.7-8.7-5.3     c-3.2-2.8-5.4-6.4-6-7.4c-0.6-1.1-0.1-1.7,0.5-2.2c0.5-0.5,1.1-1.3,1.6-1.9c0.5-0.6,0.7-1.1,1.1-1.8c0.4-0.7,0.2-1.3-0.1-1.9     c-0.3-0.5-2.4-5.8-3.3-8c-0.9-2.1-1.8-1.8-2.4-1.8c-0.6,0-1.4-0.1-2.1-0.1s-1.9,0.3-2.9,1.3c-1,1.1-3.8,3.7-3.8,9     c0,5.3,3.9,10.4,4.4,11.1c0.5,0.7,7.5,11.9,18.5,16.2c11,4.3,11,2.9,13,2.7c2-0.2,6.4-2.6,7.3-5.1C68.4,56.5,68.4,54.4,68.1,53.9     z"
                    id="WhatsApp"
                  />
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UC6f6qzzBKkCOI1PhDkX6o-Q"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerIcon}
            aria-label="Youtube"
          >
            <svg
              className={styles.footerIconSvg}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                    id="Youtube"
                  />
                </g>
              </g>
            </svg>
          </a>
          <a
            href="tel:+79163108899"
            className={styles.footerIcon}
            aria-label="Телефон"
          >
            <svg
              className={styles.footerIconSvg}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.01192 5.6023C1.83312 3.50023 3.61574 2 5.51161 2H7.88594C9.01915 2 10.0411 2.68182 10.4762 3.72819L11.6459 6.54152C12.0464 7.50457 11.8795 8.61027 11.2126 9.41219L9.96021 10.9182C10.7683 12.1458 11.7862 13.2527 12.9455 14.169L14.5827 12.8019C15.386 12.1311 16.4959 11.9632 17.4616 12.3664L20.2638 13.5364C21.3081 13.9725 21.9881 14.9933 21.9881 16.125C21.9881 16.5154 21.9911 16.906 21.9941 17.3009L21.9941 17.3025C21.997 17.6956 22 18.093 22 18.4913C22 20.387 20.4999 22.1699 18.3975 21.9904C9.85772 21.2613 2.74005 14.1628 2.01192 5.6023ZM5.51161 4C4.56806 4 3.94287 4.70566 4.00472 5.43279C4.65016 13.0211 10.9966 19.3513 18.5676 19.9977C19.2944 20.0597 20 19.4349 20 18.4913C20 18.1013 19.9971 17.7109 19.9941 17.316L19.9941 17.3135C19.9911 16.9206 19.9881 16.5234 19.9881 16.125C19.9881 15.8002 19.7929 15.5072 19.4932 15.382L16.691 14.212C16.4138 14.0963 16.0952 14.1444 15.8646 14.337L13.0326 16.7019L12.4051 16.2603C10.5707 14.9694 8.9987 13.2704 7.86741 11.3384L7.51296 10.733L9.67483 8.13339C9.86626 7.90321 9.91417 7.58583 9.79923 7.30939L8.62943 4.49606C8.50455 4.19571 8.21122 4 7.88594 4H5.51161Z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/madewlove.ru?igsh=MXViYWZtajhucXNtcg=="
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerIcon}
            aria-label="Instagram"
          >
            <svg
              className={styles.footerIconSvg}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://t.me/madewloveru"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerIcon}
            aria-label="Telegram"
          >
            <svg
              className={styles.footerIconSvg}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.429.26-.107 0-.34-.066-.34-.341v-2.59l5.18-4.68c.205-.185-.045-.286-.317-.104l-6.41 4.06-2.76-.917c-.64-.203-.658-.64.135-.953l10.71-4.12c.525-.196 1.002.13.832.942z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
