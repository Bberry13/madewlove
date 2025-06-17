import React, { useRef } from 'react';
import { photos } from '@/assets/MainPage/Photos';
import { faqMainPage } from '@/features/FAQ/FAQ_data';
import { VideoContainer } from '@/features/Video/VideoContainer';
import { Company } from '@/features/Company/Company';
import { CarouselPhoto } from '@/features/CaruselPhoto/CaruselPhoto';
import { FAQ } from '@/features/FAQ/FAQ';
import { RecordingForm } from '@/entities/recorder/ui/RecForm';
import { CarouselServices } from '@/features/CarouselServices/CarouselServices';

export function MainPage(): React.JSX.Element {
  const companyRef = useRef<HTMLDivElement>(null);

  const handleScrollToCompany = () => {
    companyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <VideoContainer onScrollToCompany={handleScrollToCompany} />
      <Company ref={companyRef} />
      <CarouselPhoto photos={photos} />
      <CarouselServices />
      <RecordingForm />
      <FAQ faq={faqMainPage} />
    </>
  );
}
