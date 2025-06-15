import React from "react";
import { Routes, Route } from "react-router";
import { Layout } from "@/app/layout/layout";
import { CLIENT_ROUTING } from "@/shared/enums/clientRouting";
import type { JSX } from "react";
import { MainPage } from "@/pages/MainPage/ui/MainPage";
import { SignInPage, SignUpPage } from "@/pages/AuthPages";
import NotFound from "@/pages/Not-found/ui/Not-found";
import { Oferta } from "@/pages/Oferta/ui/Oferta";
import { Politics } from "@/pages/Politics/ui/Politics";

export function RouterProvider(): JSX.Element {
  return (
    <Routes>
      <Route path={CLIENT_ROUTING.MAIN} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={CLIENT_ROUTING.SIGN_IN} element={<SignInPage />} />
        <Route path={CLIENT_ROUTING.SIGN_UP} element={<SignUpPage />} />
        <Route path={CLIENT_ROUTING.OFERTA} element={<Oferta />} />
        <Route path={CLIENT_ROUTING.PRIVACY_POLICY} element={<Politics />} />
        <Route path="*" element={<NotFound />} />
        {/* 

            <Route path={CLIENT_ROUTING.TASKS} element={<TasksPage />} />
            <Route path={CLIENT_ROUTING.ONE_TASK} element={<OneTaskPage />} />
            <Route
              path={CLIENT_ROUTING.EXPERIMENT}
              element={<ExperimentPage />}
            />
            <Route path={CLIENT_ROUTING.TEST} element={<TestPage />} /> */}
      </Route>
    </Routes>
  );
}
