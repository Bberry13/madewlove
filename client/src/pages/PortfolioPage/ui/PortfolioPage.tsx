import { CLIENT_ROUTING } from '@/shared/enums/clientRouting';
import PhotoGallery from '@/features/PhotoGallery/ui/PhotoGallery';
import React from 'react';
import { useLocation } from 'react-router';
import { CategoryExtracts } from './CategoryExtracts';
import {
  pregnancyHomePhotos,
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

export function PortfolioPage(): React.JSX.Element {
  const location = useLocation();

  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_PREGNANCY) {
    return (
      <PhotoGallery category='Беременность' photos={pregnancyHomePhotos} />
    );
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_BIRTH) {
    return <PhotoGallery category='Рождение' photos={birthPhotos} />;
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
    return <PhotoGallery category='Крещение' photos={baptismPhotos} />;
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
    return <PhotoGallery category='Фотокниги' photos={photoBookPhotos} />;
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_EXTRACTS) {
    return <CategoryExtracts />;
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_TOWNEXTRA) {
    return (
      <PhotoGallery category='Городские роддома' photos={extractsTownPhotos} />
    );
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_CKB) {
    return <PhotoGallery category='Роддом ЦКБ' photos={extractsCKBPhotos} />;
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_LAPINO) {
    return (
      <PhotoGallery category='Роддом Лапино' photos={extractsLapinoPhotos} />
    );
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_MD) {
    return <PhotoGallery category='MD GROUP' photos={extractsMDPhotos} />;
  }
  return <PhotoGallery category='Беременность' photos={pregnancyHomePhotos} />;
}
