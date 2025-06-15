import React, { type JSX } from 'react';
import { photos } from '@/assets/MainPage/Photos';
import { faqMainPage } from '@/features/FAQ/FAQ_data';
import { VideoContainer } from '@/features/Video/VideoContainer';
import { Company } from '@/features/Company/Company';
import { CaruselPhoto } from '@/features/CaruselPhoto/CaruselPhoto';
import { FAQ } from '@/features/FAQ/FAQ';
import { RecordingForm } from '@/entities/recorder/ui/RecForm';
import PhotoGallery from '@/features/PhotoGallery/ui/PhotoGallery';

export function MainPage(): JSX.Element {
  return (
    <>
      <VideoContainer />  
      <Company />
      <CaruselPhoto photos={photos} />
      <FAQ faq={faqMainPage} />
      <RecordingForm />
      <PhotoGallery photos={photos} />
    </>
  );
}
