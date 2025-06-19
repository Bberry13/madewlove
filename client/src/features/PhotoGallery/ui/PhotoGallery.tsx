import React from 'react';
import Masonry from '@mui/lab/Masonry';
import styles from './PhotoGallery.module.css';

interface PhotoItem {
  src: string;
  title: string;
}

interface PhotoGalleryProps {
  category: string;
  photos?: PhotoItem[];
  classicPhotos?: PhotoItem[];
  naturalPhotos?: PhotoItem[];
  homeStudioPhotos?: PhotoItem[];
  streetPhotos?: PhotoItem[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  category,
  photos,
  classicPhotos,
  naturalPhotos,
  homeStudioPhotos,
  streetPhotos,
}) => {
  const renderMasonry = (
    photoArray: PhotoItem[],
    title?: string,
    anchorId?: string
  ) => (
    <div key={title || 'main'} className={styles.masonryContainer}>
      {title && (
        <h2 id={anchorId} className={styles.sectionTitle}>
          {title}
        </h2>
      )}
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
        {photoArray.map((item, idx) => (
          <div key={idx} className={styles.photoItem}>
            <img
              src={item.src}
              alt={item.title}
              className={styles.photoImage}
              loading='lazy'
            />
          </div>
        ))}
      </Masonry>
    </div>
  );

  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.mainTitle}>{category}</h1>

      {/* Для категорий с подкатегориями */}
      {classicPhotos && naturalPhotos && (
        <>
          {renderMasonry(classicPhotos, 'Classic NewBorn', 'classic-newborn')}
          {renderMasonry(naturalPhotos, 'Natural Newborn', 'natural-newborn')}
        </>
      )}

      {homeStudioPhotos && streetPhotos && (
        <>
          {renderMasonry(homeStudioPhotos, 'Home/Studio', 'home-studio')}
          {renderMasonry(streetPhotos, 'Street', 'street')}
        </>
      )}

      {/* Для обычных категорий */}
      {photos && renderMasonry(photos)}
    </div>
  );
};

export default PhotoGallery;
