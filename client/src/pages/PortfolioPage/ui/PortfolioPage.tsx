import { CLIENT_ROUTING } from '@/shared/enums/clientRouting'
import PhotoGallery from '@/features/PhotoGallery/ui/PhotoGallery'
import React from 'react'
import { useLocation } from 'react-router'
import { CategoryExtracts } from './CategoryExtracts'
import { titlesPortfolioCards } from '../model'

export function PortfolioPage(): React.JSX.Element {
  const location = useLocation()
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_PREGNANCY) {
    return <PhotoGallery photos={titlesPortfolioCards[0]} />
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_BIRTH) {
    return <PhotoGallery photos={titlesPortfolioCards[1]} />
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_NEWBORN) {
    return <PhotoGallery photos={titlesPortfolioCards[3]} />
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_BAPTISM) {
    return <PhotoGallery photos={titlesPortfolioCards[4]} />
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_FAMILY) {
    return <PhotoGallery photos={titlesPortfolioCards[5]} />
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_ONE_YEAR) {
    return <PhotoGallery photos={titlesPortfolioCards[6]} />
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_PHOTO_BOOKS) {
    return <PhotoGallery photos={titlesPortfolioCards[7]} />
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_EXTRACTS) {
    return <CategoryExtracts />
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_TOWNEXTRA) {
    return <PhotoGallery photos={titlesPortfolioCards[2]} />
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_CKB) {
    return <PhotoGallery photos={titlesPortfolioCards[2]} />
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_LAPINO) {
    return <PhotoGallery photos={titlesPortfolioCards[2]} />
  }
  if (location.pathname === CLIENT_ROUTING.PORTFOLIO_MD) {
    return <PhotoGallery photos={titlesPortfolioCards[2]} />
  }
  return <PhotoGallery photos={titlesPortfolioCards[0]} />
}
