import React from 'react';
import styles from './PhotoGallery.module.css';

interface PhotoGalleryProps {
  photos: {
    key: string;
    title: string;
    title1: string;
    photo1: string[];
    title2?: string;
    photo2?: string[];
    title3?: string;
    photo3?: string[];
  };
}

const PhotoGallery = ({ photos }: PhotoGalleryProps): React.JSX.Element => {
  return (
    <div className={styles.galleryContainer}>
      <div key={photos.key}>
        <h1 className={styles.title}>{photos.title}</h1>
        <h2 className={styles.title1}>{photos.title1}</h2>
        <div className={styles.gallery}>
          {photos.photo1.map((photo, index) => (
            <div key={photo} className={styles.item}>
              <img
                src={photo}
                alt={`Gallery item ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {photos.title2 && (
          <>
            <h2 className={styles.title2}>{photos.title2}</h2>
            <div className={styles.gallery}>
              {photos.photo2?.map((photo, index) => (
                <div key={photo} className={styles.item}>
                  <img
                    src={photo}
                    alt={`Gallery item ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </>
        )}
        {photos.title3 && (
          <>
            <h2 className={styles.title3} >{photos.title3}</h2>
            <div className={styles.gallery}>
              {photos.photo3?.map((photo, index) => (
                <div key={photo} className={styles.item}>
                  <img
                    src={photo}
                    alt={`Gallery item ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
