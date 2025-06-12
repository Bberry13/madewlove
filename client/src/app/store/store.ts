import { userReducer } from '@/entities/user/slice/userSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Определяем тип состояния всего хранилища
// Используем typeof для получения типа getState функции хранилища
export type RootState = ReturnType<typeof store.getState>;

// Определяем тип диспатча для отправки действий
export type AppDispatch = typeof store.dispatch;

// Экспортируем созданное хранилище как дефолтный экспорт
// Теперь мы можем использовать это хранилище во всем приложении
export default store;
