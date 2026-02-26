import { CLIENT_ROUTING } from '@/shared/enums/clientRouting';
import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router';
import { CategoryExtracts } from './CategoryExtracts';
import {
  pregnancyHomePhotos,
  pregnancyStandardPhotos,
  pregnancyPremiumPhotos,
  birthPhotos,
  newbornClassicPhotos,
  newbornNaturalPhotos,
  baptismPhotos,
  familyHomeStudioPhotos,
  familyStreetPhotos,
  oneYearPhotos,
  photoBookPhotos,
  extractsCKBPhotos,
  extractsLapinoPhotos,
  extractsMDPhotos,
  extractsTownPhotos,
} from '../model';

const PhotoGallery = lazy(() => import('@/features/PhotoGallery/ui/PhotoGallery'));

export function PortfolioPage(): React.JSX.Element {
  const location = useLocation();
  //pregnancy
  const pregnancyVideo1 = { ownerId: -231076513, videoId: '456239017' };
  const pregnancyVideo2 = { ownerId: -231076513, videoId: '456239018' };
  const pregnancyVideo3 = { ownerId: -231076513, videoId: '456239019' };

  //extracts CKB
  const extractsCKBVideo1 = { ownerId: -231076513, videoId: '456239020' };
  //extracts Lapino
  const extractsLapinoVideo1 = { ownerId: -231076513, videoId: '456239021' };
  //extracts MD
  const extractsMDVideo1 = { ownerId: -231076513, videoId: '456239022' };
  //extracts Town
  const extractsTownVideo1 = { ownerId: -231076513, videoId: '456239023' };
  // baptism
  const baptismVideo1 = { ownerId: -231076513, videoId: '456239024' };
  //Books
  const booksVideo1 = { ownerId: -231076513, videoId: '456239025' };

  const renderGallery = (node: React.ReactNode) => (
    <Suspense
      fallback={
        <div style={{ color: '#e3c7a3', textAlign: 'center', padding: '120px 0' }}>
          Загружаем галерею…
        </div>
      }
    >
      {node}
    </Suspense>
  );
  const renderPage = () => {
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_PREGNANCY) {
    return (
      <PhotoGallery
        category='Беременность'
        homePhotos={pregnancyHomePhotos}
        standardPhotos={pregnancyStandardPhotos}
        premiumPhotos={pregnancyPremiumPhotos}
      />
    );
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_BIRTH) {
    return <PhotoGallery category='Рождение' photos={birthPhotos} video={[pregnancyVideo1, pregnancyVideo2, pregnancyVideo3]} />;
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_NEWBORN) {
    return (
      <PhotoGallery
        category='Ньюборн'
        classicPhotos={newbornClassicPhotos}
        naturalPhotos={newbornNaturalPhotos}
      />
    );
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_BAPTISM) {
    return (
      <PhotoGallery
        video={baptismVideo1}
        category='Крещение'
        photos={baptismPhotos}
      />
    );
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_FAMILY) {
    return (
      <PhotoGallery
        category='Семейная фотосессия'
        homeStudioPhotos={familyHomeStudioPhotos}
        streetPhotos={familyStreetPhotos}
      />
    );
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_ONE_YEAR) {
    return <PhotoGallery category='Годовасие' photos={oneYearPhotos} />;
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_PHOTO_BOOKS) {
    return (
      <PhotoGallery
        video={booksVideo1}
        category='Фотокниги'
        photos={photoBookPhotos}
      />
    );
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_EXTRACTS) {
    return <CategoryExtracts />;
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_TOWNEXTRA) {
    return (
      <PhotoGallery
        video={extractsTownVideo1}
        category='Городские роддома'
        photos={extractsTownPhotos}
      />
    );
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_CKB) {
    return (
      <PhotoGallery
        video={extractsCKBVideo1}
        category='Роддом ЦКБ'
        photos={extractsCKBPhotos}
      />
    );
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_LAPINO) {
    return (
      <PhotoGallery
        video={extractsLapinoVideo1}
        category='Роддом Лапино'
        photos={extractsLapinoPhotos}
      />
    );
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_MD) {
    return (
      <PhotoGallery
        video={extractsMDVideo1}
        category='MD GROUP'
        photos={extractsMDPhotos}
      />
    );
  }
  return <PhotoGallery category='Беременность' photos={pregnancyHomePhotos} />;
  };

  return renderGallery(renderPage());
}
