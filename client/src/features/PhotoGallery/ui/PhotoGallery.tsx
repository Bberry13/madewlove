import React from 'react';
import Masonry from '@mui/lab/Masonry';
import styles from './PhotoGallery.module.css';
import { VKVideoPlayer } from '@/pages/PortfolioPage/ui/VKVideoPlayer';

interface PhotoItem {
  src: string;
  title: string;
}

interface VideoItem {
  ownerId: number;
  videoId: string;
}

interface PhotoGalleryProps {
  category: string;
  photos?: PhotoItem[];
  classicPhotos?: PhotoItem[];
  naturalPhotos?: PhotoItem[];
  homeStudioPhotos?: PhotoItem[];
  streetPhotos?: PhotoItem[];
  video?: VideoItem[] | VideoItem;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  category,
  photos,
  classicPhotos,
  naturalPhotos,
  homeStudioPhotos,
  streetPhotos,
  video,
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
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );

  return (
    <div className={styles.galleryContainer}>
      {Array.isArray(video) ? (
        <VKVideoPlayer className={styles.videoPlayer} ownerId={video[0].ownerId} videoId={video[0].videoId} />
      ) : (
        video && (
          <VKVideoPlayer className={styles.videoPlayer} ownerId={video.ownerId} videoId={video.videoId} />
        )
      )}
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
      {Array.isArray(video) ? (
        <>
          <VKVideoPlayer className={styles.videoPlayer} ownerId={video[1].ownerId} videoId={video[1].videoId} />
          <VKVideoPlayer className={styles.videoPlayer} ownerId={video[2].ownerId} videoId={video[2].videoId} />
        </>
      ) : (
        video && (
          <>
          </>
        )
      )}
    </div>
  );
};

export default PhotoGallery;
