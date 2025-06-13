import { signInThunk } from "@/entities/user/api/userThunkApi";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import React, { useState, type JSX } from "react";
import { useNavigate } from "react-router";

type InputsSignInType = {
  email: string;
  password: string;
};

const initialInputs: InputsSignInType = {
  email: "",
  password: "",
};

export function SignInForm(): JSX.Element {
    const navigate = useNavigate();

  // типизируем хук
  const [inputs, setInputs] = useState<InputsSignInType>(initialInputs);

  // уже типизрован, потому и кастомка
  const dispatch = useAppDispatch();

  // обраьотчик на изменение в полях формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // сам сабмит
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      e.preventDefault();
      dispatch(signInThunk(inputs));
      navigate('/')
      //  навигируем с сохранением состояния на мейн пагу
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Пароль"
          onChange={handleChange}
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Войти
      </button>
    </form>
  );
}
