import React from 'react'
import { portfolioCardsDataExtracts } from '../model'
import { PriceCards } from '@/features/PriceCards/ui/PriceCards'

export function CategoryExtracts(): React.JSX.Element {
  return (
    <PriceCards cards={portfolioCardsDataExtracts} />
  )
}
