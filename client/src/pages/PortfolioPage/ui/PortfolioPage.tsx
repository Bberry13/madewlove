import { photos } from '@/assets/MainPage/Photos'
import PhotoGallery from '@/features/PhotoGallery/ui/PhotoGallery'
import React, { type JSX } from 'react'

export function PortfolioPage(): JSX.Element {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '150px', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '50px' }}>Портфолио</h1>
      <PhotoGallery photos={photos} />
    </div>
  )
}
