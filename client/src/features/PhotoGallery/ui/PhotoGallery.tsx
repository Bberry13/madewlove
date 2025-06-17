import  React from 'react';
import styles from './PhotoGallery.module.css';

const PhotoGallery = ({ photos }: { photos: string[] }): React.JSX.Element => {
  return (
    <div className={styles.gallery}>
      {photos.map((photo, index) => (
        <div key={index} className={styles.item}>
          <img src={photo} alt={`Gallery item ${index + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
