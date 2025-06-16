import React from "react";
import { Routes, Route } from "react-router";
import { Layout } from "@/app/layout/layout";
import { CLIENT_ROUTING } from "@/shared/enums/clientRouting";
import type { JSX } from "react";
import { MainPage } from "@/pages/MainPage/ui/MainPage";
import { SignInPage, SignUpPage } from "@/pages/AuthPages";
import { PricePage } from "@/pages/PricePage/ui/PricePage";
import { PregnancyPricePage } from "@/pages/CategoryPricePocketPages/PregnancyPricePage/ui/PregnancyPricePage";
import NotFound from "@/pages/Not-found/ui/Not-found";
import { Oferta } from "@/pages/Oferta/ui/Oferta";
import { Politics } from "@/pages/Politics/ui/Politics";
import { BirthPricePage } from "@/pages/CategoryPricePocketPages/BirthPricePage/ui/BirthPricePage";
import { NewbornPricePage } from "@/pages/CategoryPricePocketPages/NewbornPricePage/ui/NewbornPricePage";
import { BaptismPricePage } from "@/pages/CategoryPricePocketPages/BaptismPricePage/ui/BaptismPricePage";
import { FamilyPricePage } from "@/pages/CategoryPricePocketPages/FamilyPricePage/ui/FamilyPricePage";
import { OneYearPricePage } from "@/pages/CategoryPricePocketPages/OneYearPricePage/ui/OneYearPricePage";
import { PhotoBookPricePage } from "@/pages/CategoryPricePocketPages/PhotoBooksPricePage/ui/PhotoBooksPricePage";

export function RouterProvider(): JSX.Element {
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
        <Route path={CLIENT_ROUTING.OFERTA} element={<Oferta />} />
        <Route path={CLIENT_ROUTING.PRIVACY_POLICY} element={<Politics />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
