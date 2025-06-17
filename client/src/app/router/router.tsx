import { Routes, Route } from 'react-router';
import { Layout } from '@/app/layout/layout';
import { CLIENT_ROUTING } from '@/shared/enums/clientRouting';
import React from 'react';
import { MainPage } from '@/pages/MainPage/ui/MainPage';
import { SignInPage, SignUpPage } from '@/pages/AuthPages';
import { PricePage } from '@/pages/PricePage/ui/PricePage';
import { PregnancyPricePage } from '@/pages/CategoryPricePocketPages/PregnancyPricePage/ui/PregnancyPricePage';
import NotFound from '@/pages/Not-found/ui/Not-found';
import { Oferta } from '@/pages/Oferta/ui/Oferta';
import { Politics } from '@/pages/Politics/ui/Politics';
import { BirthPricePage } from '@/pages/CategoryPricePocketPages/BirthPricePage/ui/BirthPricePage';
import { NewbornPricePage } from '@/pages/CategoryPricePocketPages/NewbornPricePage/ui/NewbornPricePage';
import { BaptismPricePage } from '@/pages/CategoryPricePocketPages/BaptismPricePage/ui/BaptismPricePage';
import { FamilyPricePage } from '@/pages/CategoryPricePocketPages/FamilyPricePage/ui/FamilyPricePage';
import { OneYearPricePage } from '@/pages/CategoryPricePocketPages/OneYearPricePage/ui/OneYearPricePage';
import { PhotoBookPricePage } from '@/pages/CategoryPricePocketPages/PhotoBooksPricePage/ui/PhotoBooksPricePage';
import ContactsPage from '@/pages/Contacts/ui/ContactsPage';
import ReviewsPage from '@/pages/Reviews/ui/ReviewsPage';
import { PortfolioPage } from '@/pages/PortfolioPage/ui/PortfolioPage';
import { ExtractsGroup } from '@/pages/CategoryPricePocketPages/ExtractsGroup/ui/ExtractsGroup';
import { CKBPricePage } from '@/pages/CategoryPricePocketPages/ExtractsGroup/ExtractsCKBPage/ui/ExtractsCKBPage';
import { LapinoPricePage } from '@/pages/CategoryPricePocketPages/ExtractsGroup/ExtractsLapinoPage/ui/ExtractsLapinoPage';
import { MDPricePage } from '@/pages/CategoryPricePocketPages/ExtractsGroup/ExtractsMDPage/ui/ExtractsMDPage';
import { TownExtraPricePage } from '@/pages/CategoryPricePocketPages/ExtractsGroup/ExtractsTownextraPage/ui/ExtractsTownextraPage';

export function RouterProvider(): React.JSX.Element {
  return (
    <Routes>
      <Route path={CLIENT_ROUTING.MAIN} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={CLIENT_ROUTING.SIGN_IN} element={<SignInPage />} />
        <Route path={CLIENT_ROUTING.SIGN_UP} element={<SignUpPage />} />
        <Route path={CLIENT_ROUTING.PRICE_POST} element={<PricePage />} />
        <Route
          path={CLIENT_ROUTING.PRICE_PREGNANCY}
          element={<PregnancyPricePage />}
        />
        <Route path={CLIENT_ROUTING.PRICE_BIRTH} element={<BirthPricePage />} />
        <Route
          path={CLIENT_ROUTING.PRICE_NEWBORN}
          element={<NewbornPricePage />}
        />
        <Route
          path={CLIENT_ROUTING.PRICE_BAPTISM}
          element={<BaptismPricePage />}
        />
        <Route
          path={CLIENT_ROUTING.PRICE_FAMILY}
          element={<FamilyPricePage />}
        />
        <Route
          path={CLIENT_ROUTING.PRICE_ONE_YEAR}
          element={<OneYearPricePage />}
        />
        <Route
          path={CLIENT_ROUTING.PRICE_PHOTO_BOOKS}
          element={<PhotoBookPricePage />}
        />
         <Route
          path={CLIENT_ROUTING.PRICE_EXTRACTS}
          element={<ExtractsGroup />}
        />
          <Route
          path={CLIENT_ROUTING.PRICE_CKB}
          element={<CKBPricePage />}
        />
          <Route
          path={CLIENT_ROUTING.PRICE_LAPINO}
          element={<LapinoPricePage />}
        />
          <Route
          path={CLIENT_ROUTING.PRICE_MD}
          element={<MDPricePage />}
        />
        <Route
          path={CLIENT_ROUTING.PRICE_TOWNEXTRA}
          element={<TownExtraPricePage />}
        />
        <Route path={CLIENT_ROUTING.PORTFOLIO} element={<PortfolioPage />} />
        <Route path={CLIENT_ROUTING.CONTACTS} element={<ContactsPage />} />
        <Route path={CLIENT_ROUTING.REVIEWS} element={<ReviewsPage />} />
        <Route path={CLIENT_ROUTING.OFERTA} element={<Oferta />} />
        <Route path={CLIENT_ROUTING.PRIVACY_POLICY} element={<Politics />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
