import { Routes, Route } from 'react-router';
import { Layout } from '@/app/layout/layout';
import { CLIENT_ROUTING } from '@/shared/enums/clientRouting';
import React, { useLayoutEffect } from 'react';
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
import { ExtractsGroupPage } from '@/pages/CategoryPricePocketPages/ExtractsGroup/ui/ExtractsGroupPage';
import { CKBPricePage } from '@/pages/CategoryPricePocketPages/ExtractsGroup/ExtractsCKBPage/ui/ExtractsCKBPage';
import { LapinoPricePage } from '@/pages/CategoryPricePocketPages/ExtractsGroup/ExtractsLapinoPage/ui/ExtractsLapinoPage';
import { MDPricePage } from '@/pages/CategoryPricePocketPages/ExtractsGroup/ExtractsMDPage/ui/ExtractsMDPage';
import { TownExtraPricePage } from '@/pages/CategoryPricePocketPages/ExtractsGroup/ExtractsTownextraPage/ui/ExtractsTownextraPage';
import { CategoryPortfolioPage } from '@/pages/PortfolioPage/ui/CategoryPage';
import { useLocation } from 'react-router';

export function RouterProvider(): React.JSX.Element {
  const location = useLocation();
  useLayoutEffect(() => {
    if (location.pathname === CLIENT_ROUTING.SIGN_IN) {
      document.title = 'Madewlove | Вход';
    }
    if (location.pathname === CLIENT_ROUTING.SIGN_UP) {
      document.title = 'Madewlove | Регистрация';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_POST) {
      document.title = 'Madewlove | Цены';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_PREGNANCY) {
      document.title = 'Madewlove | Цены | Беременность';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_BIRTH) {
      document.title = 'Madewlove | Цены | Рождение';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_NEWBORN) {
      document.title = 'Madewlove | Цены | Новорожденный';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_BAPTISM) {
      document.title = 'Madewlove | Цены | Крещение';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_FAMILY) {
      document.title = 'Madewlove | Цены | Семья';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_ONE_YEAR) {
      document.title = 'Madewlove | Цены | Год';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_PHOTO_BOOKS) {
      document.title = 'Madewlove | Цены | Фотоальбомы';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_EXTRACTS) {
      document.title = 'Madewlove | Цены | Вырезки';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_CKB) {
      document.title = 'Madewlove | Цены | Вырезки | СКБ';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_LAPINO) {
      document.title = 'Madewlove | Цены | Вырезки | Лапино';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_MD) {
      document.title = 'Madewlove | Цены | Вырезки | МД';
    }
    if (location.pathname === CLIENT_ROUTING.PRICE_TOWNEXTRA) {
      document.title = 'Madewlove | Цены | Вырезки | Топ-экстра';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO) {
      document.title = 'Madewlove | Портфолио';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO_PREGNANCY) {
      document.title = 'Madewlove | Портфолио | Беременность';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO_BIRTH) {
      document.title = 'Madewlove | Портфолио | Рождение';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO_NEWBORN) {
      document.title = 'Madewlove | Портфолио | Новорожденный';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO_BAPTISM) {
      document.title = 'Madewlove | Портфолио | Крещение';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO_FAMILY) {
      document.title = 'Madewlove | Портфолио | Семья';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO_ONE_YEAR) {
      document.title = 'Madewlove | Портфолио | Год';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO_PHOTO_BOOKS) {
      document.title = 'Madewlove | Портфолио | Фотоальбомы';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO_EXTRACTS) {
      document.title = 'Madewlove | Портфолио | Вырезки';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO_CKB) {
      document.title = 'Madewlove | Портфолио | Вырезки | СКБ';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO_LAPINO) {
      document.title = 'Madewlove | Портфолио | Вырезки | Лапино';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO_MD) {
      document.title = 'Madewlove | Портфолио | Вырезки | МД';
    }
    if (location.pathname === CLIENT_ROUTING.PORTFOLIO_TOWNEXTRA) {
      document.title = 'Madewlove | Портфолио | Вырезки | Топ-экстра';
    }
    if (location.pathname === CLIENT_ROUTING.CONTACTS) {
      document.title = 'Madewlove | Контакты';
    }
    if (location.pathname === CLIENT_ROUTING.REVIEWS) {
      document.title = 'Madewlove | Отзывы';
    }
    if (location.pathname === CLIENT_ROUTING.OFERTA) {
      document.title = 'Madewlove | Оферта';
    }
    if (location.pathname === CLIENT_ROUTING.PRIVACY_POLICY) {
      document.title = 'Madewlove | Политика конфиденциальности';
    }
    if (location.pathname === CLIENT_ROUTING.NOT_FOUND) {
      document.title = 'Madewlove | 404';
    }
  }, [location.pathname]);
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
          element={<ExtractsGroupPage />}
        />
        <Route path={CLIENT_ROUTING.PRICE_CKB} element={<CKBPricePage />} />
        <Route
          path={CLIENT_ROUTING.PRICE_LAPINO}
          element={<LapinoPricePage />}
        />
        <Route path={CLIENT_ROUTING.PRICE_MD} element={<MDPricePage />} />
        <Route
          path={CLIENT_ROUTING.PRICE_TOWNEXTRA}
          element={<TownExtraPricePage />}
        />
        <Route
          path={CLIENT_ROUTING.PORTFOLIO}
          element={<CategoryPortfolioPage />}
        />
        <Route
          path={CLIENT_ROUTING.PORTFOLIO_PREGNANCY}
          element={<PortfolioPage />}
        />
        <Route
          path={CLIENT_ROUTING.PORTFOLIO_BIRTH}
          element={<PortfolioPage />}
        />
        <Route
          path={CLIENT_ROUTING.PORTFOLIO_NEWBORN}
          element={<PortfolioPage />}
        />
        <Route
          path={CLIENT_ROUTING.PORTFOLIO_BAPTISM}
          element={<PortfolioPage />}
        />
        <Route
          path={CLIENT_ROUTING.PORTFOLIO_FAMILY}
          element={<PortfolioPage />}
        />
        <Route
          path={CLIENT_ROUTING.PORTFOLIO_ONE_YEAR}
          element={<PortfolioPage />}
        />
        <Route
          path={CLIENT_ROUTING.PORTFOLIO_PHOTO_BOOKS}
          element={<PortfolioPage />}
        />
        <Route
          path={CLIENT_ROUTING.PORTFOLIO_EXTRACTS}
          element={<PortfolioPage />}
        />
        <Route
          path={CLIENT_ROUTING.PORTFOLIO_CKB}
          element={<PortfolioPage />}
        />
        <Route
          path={CLIENT_ROUTING.PORTFOLIO_LAPINO}
          element={<PortfolioPage />}
        />
        <Route path={CLIENT_ROUTING.PORTFOLIO_MD} element={<PortfolioPage />} />
        <Route
          path={CLIENT_ROUTING.PORTFOLIO_TOWNEXTRA}
          element={<PortfolioPage />}
        />
        <Route path={CLIENT_ROUTING.CONTACTS} element={<ContactsPage />} />
        <Route path={CLIENT_ROUTING.REVIEWS} element={<ReviewsPage />} />
        <Route path={CLIENT_ROUTING.OFERTA} element={<Oferta />} />
        <Route path={CLIENT_ROUTING.PRIVACY_POLICY} element={<Politics />} />
        <Route path={CLIENT_ROUTING.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}
