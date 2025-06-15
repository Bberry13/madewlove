import React, { useState, type JSX } from 'react';
import styles from './FAQ.module.css';

type FAQProps = {
  faq: { question: string; answer: string }[];
};

export function FAQ({ faq }: FAQProps): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>FAQ / Вопрос-ответ</h2>
      <div className={styles.faqAccordion}>
        {faq.map((item, idx) => (
          <div key={idx} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              {item.question}
              <span className={styles.faqArrow}>
                {openIndex === idx ? '▲' : '▼'}
              </span>
            </button>
            {openIndex === idx && (
              <div className={styles.faqAnswer}>
                {item.answer.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
