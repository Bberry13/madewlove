import { photosPortfolio } from '@/assets/MainPage/Photos';

export const portfolioCardsData = [
  {
    key: 'pregnancy',
    title: 'Беременность',
    photo: photosPortfolio[0],
    buttonText: 'Посмотреть все работы',
    path: '/portfolio/pregnancy',
  },
  {
    key: 'birth',
    title: 'Рождение',
    photo: photosPortfolio[1],
    buttonText: 'Посмотреть все работы',
    path: '/portfolio/birth',
  },
  {
    key: 'extracts',
    title: 'Выписки',
    photo: photosPortfolio[2],
    buttonText: 'Посмотреть все работы',
    path: '/portfolio/extracts',
  },
  {
    key: 'newborn',
    title: 'Ньюборн',
    photo: photosPortfolio[3],
    buttonText: 'Посмотреть все работы',
    path: '/portfolio/newborn',
  },
  {
    key: 'baptism',
    title: 'Крещение',
    photo: photosPortfolio[4],
    buttonText: 'Посмотреть все работы',
    path: '/portfolio/baptism',
  },
  {
    key: 'familyPhotoShoot',
    title: 'Семейная фотосессия',
    photo: photosPortfolio[5],
    buttonText: 'Посмотреть все работы',
    path: '/portfolio/family',
  },
  {
    key: 'oneYearPhoto',
    title: 'Годовасие',
    photo: photosPortfolio[6],
    buttonText: 'Посмотреть все работы',
    path: '/portfolio/one-year',
  },
  {
    key: 'photoBooks',
    title: 'Фотокниги',
    photo: photosPortfolio[7],
    buttonText: 'Посмотреть все работы',
    path: '/portfolio/photo-books',
  },
];

export const portfolioCardsDataExtracts = [
  {
    key: 'ckb',
    title: 'Роддом ЦКБ',
    photo: photosPortfolio[2],
    buttonText: 'Посмотреть все работы',
    path: '/portfolio/extracts/ckb',
  },
  {
    key: 'lapino',
    title: 'Роддом Лапино',
    photo: photosPortfolio[2],
    buttonText: 'Посмотреть все работы',
    path: '/portfolio/extracts/lapino',
  },
  {
    key: 'md',
    title: 'Роддом MD GROUP',
    photo: photosPortfolio[2],
    buttonText: 'Посмотреть все работы',
    path: '/portfolio/extracts/md',
  },
  {
    key: 'townextra',
    title: 'Городские роддоа',
    photo: photosPortfolio[2],
    buttonText: 'Посмотреть все работы',
    path: '/portfolio/extracts/townextra',
  },
];

export const titlesPortfolioCards = [
  {
    key: 'pregnancy',
    title: 'Беременность',
    title1: 'Пакет PREMIUM',
    photo1: photosPortfolio,
    title2: 'Пакет STANDART',
    photo2: photosPortfolio,
    title3: 'Пакет HOME',
    photo3: photosPortfolio,
  },
  {
    key: 'birth',
    title: 'Рождение',
    title1: 'Пакет «ФОТО/ВИДЕО»',
    photo1: photosPortfolio,
  },

  {
    key: 'extracts',
    title: 'Выписки',
    title1: 'Пакет «ФОТО/ВИДЕО»',
    photo1: photosPortfolio,
    title2: 'Пакет «ФОТО»',
    photo2: photosPortfolio,
    title3: 'Пакет «ВИДЕО»',
    photo3: photosPortfolio,
  },
  {
    key: 'newborn',
    title: 'Ньюборн',
    title1: 'CLASSIC NEWBORN',
    photo1: photosPortfolio,
    title2: 'NATURAL NEWBORN',
    photo2: photosPortfolio,
  },

  {
    key: 'baptism',
    title: 'Крещение',
    title1: 'Пакет «ФОТО/ВИДЕО»',
    photo1: photosPortfolio,
    title2: 'Пакет «ФОТО»',
    photo2: photosPortfolio,
  },
  {
    key: 'familyPhotoShoot',
    title: 'Семейная фотосессия',
    title1: 'HOME',
    photo1: photosPortfolio,
    title2: 'STREET',
    photo2: photosPortfolio,
    title3: 'STUDIO',
    photo3: photosPortfolio,
  },
  {
    key: 'oneYearPhoto',
    title: 'Годовасие',
    title1: 'ФОТО',
    photo1: photosPortfolio,
    title2: 'ФОТО/ВИДЕО',
    photo2: photosPortfolio,
  },
  {
    key: 'photoBooks',
    title: 'Фотокниги',
    title1: 'Альбом LUX',
    photo1: photosPortfolio,
    title2: 'Альбом SMALL',
    photo2: photosPortfolio,
  },
];

// Беременность
const pregnancyPhotoModules = import.meta.glob(
  '../../../assets/Pregnancy/Photos/Home/*.jpg',
  { eager: true, import: 'default' }
) as Record<string, string>;
export const pregnancyHomePhotos = Object.entries(pregnancyPhotoModules)
  .sort(([a], [b]) => {
    const getNumber = (str: string) => Number(str.match(/\((\d+)\)/)?.[1]) || 0;
    return getNumber(a) - getNumber(b);
  })
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));

// Рождение
const birthPhotoModules = import.meta.glob(
  '../../../assets/Birth/Photos/*.jpg',
  { eager: true, import: 'default' }
) as Record<string, string>;
export const birthPhotos = Object.entries(birthPhotoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));

// Ньюборн
const newbornPhotoModules = import.meta.glob(
  '../../../assets/NewBorn/Photos/*.jpg',
  { eager: true, import: 'default' }
) as Record<string, string>;
export const newbornClassicPhotos = Object.entries(newbornPhotoModules)
  .filter(([key]) => key.toLowerCase().includes('classic'))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));

export const newbornNaturalPhotos = Object.entries(newbornPhotoModules)
  .filter(([key]) => key.toLowerCase().includes('natural'))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));

// Крещение
const baptismPhotoModules = import.meta.glob(
  '../../../assets/Baptism/Photos/*.jpg',
  { eager: true, import: 'default' }
) as Record<string, string>;
export const baptismPhotos = Object.entries(baptismPhotoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));

// Семейная фотосессия
const familyPhotoModules = import.meta.glob(
  '../../../assets/Family/Photos/*.jpg',
  { eager: true, import: 'default' }
) as Record<string, string>;
export const familyHomeStudioPhotos = Object.entries(familyPhotoModules)
  .filter(([key]) => key.toLowerCase().includes('homestudio'))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));

export const familyStreetPhotos = Object.entries(familyPhotoModules)
  .filter(([key]) => key.toLowerCase().includes('street'))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));

// Годовасие
const oneYearPhotoModules = import.meta.glob(
  '../../../assets/OneYear/Photos/*.jpg',
  { eager: true, import: 'default' }
) as Record<string, string>;
export const oneYearPhotos = Object.entries(oneYearPhotoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));

// Фотокниги
const photoBookModules = import.meta.glob(
  '../../../assets/PhotoBook/Photos/*.jpg',
  { eager: true, import: 'default' }
) as Record<string, string>;
export const photoBookPhotos = Object.entries(photoBookModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));

// Выписки - ЦКБ
const extractsCKBModules = import.meta.glob(
  '../../../assets/Extracts/CKB/Photos/*.jpg',
  { eager: true, import: 'default' }
) as Record<string, string>;
export const extractsCKBPhotos = Object.entries(extractsCKBModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));

// Выписки - Лапино
const extractsLapinoModules = import.meta.glob(
  '../../../assets/Extracts/Lapino/Photos/*.jpg',
  { eager: true, import: 'default' }
) as Record<string, string>;
export const extractsLapinoPhotos = Object.entries(extractsLapinoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));

// Выписки - MD GROUP
const extractsMDModules = import.meta.glob(
  '../../../assets/Extracts/MDGroup/Photos/*.jpg',
  { eager: true, import: 'default' }
) as Record<string, string>;
export const extractsMDPhotos = Object.entries(extractsMDModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));

// Выписки - Городские роддома
const extractsTownModules = import.meta.glob(
  '../../../assets/Extracts/TownHospitals/Photos/*.jpg',
  { eager: true, import: 'default' }
) as Record<string, string>;
export const extractsTownPhotos = Object.entries(extractsTownModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([key, value]) => ({
    src: value,
    title: key.split('/').pop() || '',
  }));
