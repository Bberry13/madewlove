import { signUpThunk } from "@/entities/user/api/userThunkApi";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import React, { useState, type JSX } from "react";
// import { useNavigate } from "react-router";

type InputsSignUpType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialInputs: InputsSignUpType = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function SignUpForm(): JSX.Element {
    // const navigate = useNavigate();

  // типизируем хук
  const [inputs, setInputs] = useState<InputsSignUpType>(initialInputs);

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
      dispatch(signUpThunk(inputs));
      // navigate('/') 
    // навигируем с сохранением состояния на мейн пагу
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Имя"
          onChange={handleChange}
          name="name"
        />
      </div>
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
      <div className="mb-3">
      <input
          type="password"
          className="form-control"
          placeholder="Повторите пароль"
          onChange={handleChange}
          name="confirmPassword"
        />
      </div>
      <button type="submit" className="btn btn-primary">Зарегестрироваться</button>
    </form>
  );
}
