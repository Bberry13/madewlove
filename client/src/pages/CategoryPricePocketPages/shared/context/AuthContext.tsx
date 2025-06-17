// src/pages/CategoryPricePocketPages/shared/context/AuthContext.tsx
import React, { createContext, useContext, type ReactNode } from "react";
import { useAppSelector} from "@/shared/hooks/useAppSelector"
// import {useAppDispatch } from "@/shared/hooks/useAppDispatch";
import type { UserType } from "@/entities/user/model/userTypes";
// import { refreshTokenThunk } from "@/entities/user/api/userThunkApi";

interface AuthContextType {
  user: UserType | null;
  isAdmin: boolean;
  isInitialized: boolean; // Добавляем для отслеживания инициализации
  loading: boolean; // Добавляем для отслеживания загрузки
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
//   const dispatch = useAppDispatch();
  const { user, isInitialized, loading } = useAppSelector((state) => state.user);

//   useEffect(() => {
//     if (!isInitialized) {
//       dispatch(refreshTokenThunk()); // Восстанавливаем через refreshToken
//     }
//   }, [dispatch, isInitialized]);

  // Определяем isAdmin
  const isAdmin = user?.role === "ADMIN" || false;

  // Показываем заглушку, пока состояние не инициализировано
  if (!isInitialized && loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, isAdmin, isInitialized, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// import type { UserType } from '@/entities/user/model/userTypes'
// import { useAppSelector } from '@/shared/hooks/useAppSelector';
// import React, { createContext, useContext, type ReactNode } from 'react'

// interface IAuthContext {
//     user: UserType | null;
//     isAdmin: boolean;
// }

// const AuthContext = createContext<IAuthContext | undefined>(undefined) 

// export function AuthProvider({children }: {children: ReactNode}) {

//     const {user} = useAppSelector(state => state.user)

//     const isAdmin = user?.role === 'ADMIN' || false;

//   return (
//     <AuthContext.Provider value={{user, isAdmin}}>
//         {children}
//     </AuthContext.Provider>
//   )
// }

// export function useAuth() {
//     const context = useContext(AuthContext);
//     if(!context) {
//         throw new Error("useAuth must be used within an AuthProvider")
//     }
//     return context
// }
