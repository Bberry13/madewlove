// import { refreshTokensThunk } from '@/entities/user/api/userThunkApi';
// import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
// import { Footer, Header } from '@/widgets';
import Header from '@/widgets/Header/ui/Header';
import React, { type JSX } from 'react';
import { Outlet } from 'react-router';

export function Layout(): JSX.Element {
  // Получение функции для отправки действий в хранилище (store)
//   const dispatch = useAppDispatch();

  // Обновление токенов при загрузке страницы
//   useEffect(() => {
//     dispatch(refreshTokensThunk());
//   }, [dispatch]);

  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
