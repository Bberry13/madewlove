import React, { useEffect, useState } from 'react';
import Masonry from '@mui/lab/Masonry';
import styles from './PhotoGallery.module.css';
import { VKVideoPlayer } from '@/pages/PortfolioPage/ui/VKVideoPlayer';

interface PhotoItem {
  src: string;
  title: string;
  preview?: string; // легкая превьюшка (LQIP), если есть
}

interface ExtraSection {
  id: string;
  title: string;
  photos: PhotoItem[];
}

interface VideoItem {
  ownerId: number;
  videoId: string;
}

interface PhotoGalleryProps {
  category: string;
  photos?: PhotoItem[];
  homePhotos?: PhotoItem[];
  standardPhotos?: PhotoItem[];
  premiumPhotos?: PhotoItem[];
  classicPhotos?: PhotoItem[];
  naturalPhotos?: PhotoItem[];
  homeStudioPhotos?: PhotoItem[];
  streetPhotos?: PhotoItem[];
  extraSections?: ExtraSection[];
  video?: VideoItem[] | VideoItem;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  category,
  photos,
  homePhotos,
  standardPhotos,
  premiumPhotos,
  classicPhotos,
  naturalPhotos,
  homeStudioPhotos,
  streetPhotos,
  extraSections,
  video,
}) => {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});
  const PRIORITY_COUNT = 12;
  let renderCounter = 0;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePhoto(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const renderMasonry = (
    photoArray: PhotoItem[],
    title?: string,
    anchorId?: string
  ) => {
    return (
      <div key={anchorId || title || 'main'} className={styles.masonryContainer}>
        {title && (
          <h2 id={anchorId} className={styles.sectionTitle}>
            {title}
          </h2>
        )}
        <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
          {photoArray.map((item, idx) => {
            const loaded = item.preview ? loadedMap[item.src] : true;
            const isPriority = renderCounter < PRIORITY_COUNT;
            renderCounter += 1;
            return (
              <div key={idx} className={styles.photoItem}>
                <div className={styles.photoFrame}>
                  {item.preview && (
                    <img
                      src={item.preview}
                      alt=""
                      aria-hidden
                      className={`${styles.photoPreview} ${
                        loaded ? styles.photoPreviewHidden : ''
                      }`}
                      loading="lazy"
                    />
                  )}
                    <img
                      src={item.src}
                      alt={item.title}
                      className={`${styles.photoImage} ${
                        loaded ? styles.photoImageLoaded : ''
                      }`}
                      loading={isPriority ? 'eager' : 'lazy'}
                      fetchPriority={isPriority ? 'high' : undefined}
                      onLoad={() =>
                        setLoadedMap((prev) => ({ ...prev, [item.src]: true }))
                      }
                    onClick={() => setActivePhoto(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActivePhoto(item);
                      }
                    }}
                  />
                </div>
              </div>
            );
          })}
        </Masonry>
      </div>
    );
  };

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

       {/* Новые категории */}
      {homePhotos && renderMasonry(homePhotos, 'Home', 'home-photos')}
      {standardPhotos && renderMasonry(standardPhotos, 'Standard', 'standard-photos')}
      {premiumPhotos && renderMasonry(premiumPhotos, 'Premium', 'premium-photos')}
      {extraSections &&
        extraSections.map((section) =>
          renderMasonry(section.photos, section.title, section.id)
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
      {activePhoto && (
        <div
          className={styles.lightbox}
          onClick={() => setActivePhoto(null)}
          role="presentation"
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setActivePhoto(null)}
              aria-label="Закрыть"
            >
              ×
            </button>
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
