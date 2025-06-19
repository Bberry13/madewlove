import React from 'react';
import { PriceCards } from '@/features/PriceCards/ui/PriceCards';
import { portfolioCardsData } from '../model';

export function CategoryPortfolioPage(): React.JSX.Element {
  return <PriceCards cards={portfolioCardsData} title="Портфолио" />;
}
