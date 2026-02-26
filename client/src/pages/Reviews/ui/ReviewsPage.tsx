import React from 'react';
import styles from './ReviewsPage.module.css';
import { reviews } from '../models';

export default function ReviewsPage(): React.JSX.Element {
  return (
    <div className={styles.reviewsWrapper}>
      {reviews.map((review, idx) => (
        <div
          className={
            styles.reviewItem +
            ' ' +
            (idx % 2 === 0 ? styles.left : styles.right)
          }
          key={review.id}
        >
          <img
            src={review.avatar}
            alt="avatar"
            loading="lazy"
            className={styles.reviewAvatar}
          />
          <div className={styles.reviewBubble}>{review.text}</div>
        </div>
      ))}
    </div>
  );
}
