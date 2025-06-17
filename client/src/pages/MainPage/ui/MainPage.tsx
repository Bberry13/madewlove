import React from 'react';
import { photos } from '@/assets/MainPage/Photos';
import { faqMainPage } from '@/features/FAQ/FAQ_data';
import { VideoContainer } from '@/features/Video/VideoContainer';
import { Company } from '@/features/Company/Company';
import { CarouselPhoto } from '@/features/CaruselPhoto/CaruselPhoto';
import { FAQ } from '@/features/FAQ/FAQ';
import { RecordingForm } from '@/entities/recorder/ui/RecForm';
import { CarouselServices } from '@/features/CarouselServices/CarouselServices';

export function MainPage(): React.JSX.Element {

  return (
    <>
      <VideoContainer />
      <Company />
      <CarouselPhoto photos={photos} />
      <CarouselServices />
      <RecordingForm />
      <FAQ faq={faqMainPage} />
    </>
  );
}
