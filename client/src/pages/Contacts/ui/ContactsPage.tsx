import React from 'react';
import styles from './ContactsPage.module.css';
import { RecordingForm } from '@/entities/recorder/ui/RecForm';

export default function ContactsPage(): React.JSX.Element {
  return (
    <div className={styles.contactsWrapper}>
      <div className={styles.contactsHeader}>
        Чтобы заказать съемку, задать интересующие вопросы, вы можете связаться
        с нами удобным для вас способом или оставить свои данные и наш менеджер
        обязательно с вами свяжется
      </div>
      <div className={styles.contactsContent}>
        <div className={styles.contactsLeft}>
          Телефон: <a href="tel:+79163108899">8(916) 310-88-99</a>
        </div>
        <div className={styles.contactsRight}>
          <RecordingForm />
        </div>
      </div>
    </div>
  );
}
