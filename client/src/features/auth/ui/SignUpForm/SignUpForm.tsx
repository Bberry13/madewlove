import {
  signUpThunk,
  verifySignUp2FAThunk,
} from '@/entities/user/api/userThunkApi';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import React, { useEffect, useState, type JSX } from 'react';
import { useNavigate } from 'react-router';
import styles from './RecordingForm.module.css';

type InputsSignUpType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type TwoFAInputType = {
  code: string;
};

const initialInputs: InputsSignUpType = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const initial2FAInput: TwoFAInputType = {
  code: '',
};

export function SignUpForm(): JSX.Element {
  const navigate = useNavigate();

  // типизируем хук состояния форм для реги
  const [inputs, setInputs] = useState<InputsSignUpType>(initialInputs);

  // состояние инпута для кода двухфакторки
  const [twoFAInput, setTwoFAInput] = useState<TwoFAInputType>(initial2FAInput);

  // уже типизрован, потому и кастомка
  const dispatch = useAppDispatch();

  const { isInitialized, twoFAPending, error, twoFAUserId } = useAppSelector(
    (state) => state.user
  );

  // Перенаправление после успешной регистрации
  useEffect(() => {
    if (isInitialized) {
      navigate('/');
    }
  }, [isInitialized, navigate]);

  // обраьотчик на изменение в полях формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // на изменение инпута для 2FA
  const handle2FAChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTwoFAInput({ ...twoFAInput, [e.target.name]: e.target.value });
  };

  // сам сабмит реги
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (inputs.password !== inputs.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    try {
      await dispatch(signUpThunk(inputs)).unwrap();
      // navigate('/')
      // навигируем с сохранением состояния на мейн пагу
    } catch (error) {
      console.log(error);
    }
  };

  // Сабмит формы 2FA
  const handle2FASubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!twoFAUserId) return;
    try {
      await dispatch(
        verifySignUp2FAThunk({ userId: twoFAUserId, code: twoFAInput.code })
      ).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      {twoFAPending ? (
        <form onSubmit={handle2FASubmit}>
          <div>
            <input
              type="text"
              placeholder="Введите код 2FA"
              onChange={handle2FAChange}
              name="code"
              value={twoFAInput.code}
              className={styles.inputField}
            />
          </div>
          {error && <div className={styles.errorText}>{error}</div>}
          <button type="submit" className={styles.submitButton}>
            Подтвердить
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Имя"
              onChange={handleChange}
              name="name"
              value={inputs.name}
              className={styles.inputField}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={inputs.email}
              className={styles.inputField}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Пароль"
              onChange={handleChange}
              name="password"
              value={inputs.password}
              className={styles.inputField}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Повторите пароль"
              onChange={handleChange}
              name="confirmPassword"
              value={inputs.confirmPassword}
              className={styles.inputField}
            />
          </div>
          {error && <div className={styles.errorText}>{error}</div>}
          <button type="submit" className={styles.submitButton}>
            Зарегистрироваться
          </button>
        </form>
      )}
    </div>
  );
}
