import React, { type JSX } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { sendRecordingThunk } from '../api/recorderThunkApi';
import type { TypeRecording } from '../model/TypeRecording';

export const RecordingForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TypeRecording>();

  const onSubmit = async (data: TypeRecording) => {
    const result = await dispatch(sendRecordingThunk(data));
    if (sendRecordingThunk.fulfilled.match(result)) {
      alert('Заявка успешно отправлена!');
      reset();
    } else {
      alert(`Ошибка: ${result.payload?.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Имя</label>
        <input
          {...register('name', { required: 'Введите имя' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Введите email',
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: 'Некорректный email',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Телефон</label>
        <input
          {...register('tel', { required: 'Введите номер телефона' })}
        />
        {errors.tel && <p>{errors.tel.message}</p>}
      </div>

      <div>
        <label>Сообщение</label>
        <textarea {...register('message')}/>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            {...register('personalData', { required: true })}
          />
          Я даю согласие на обработку персональных данных
        </label>
        {errors.personalData && (
          <p>Обязательное соглашение</p>
        )}

        <label>
          <input type="checkbox" {...register('oferta', { required: true })} />Я
          принимаю публичную оферту
        </label>
        {errors.oferta && <p>Обязательное согласие</p>}

        <label>
          <input type="checkbox" {...register('mailing')} />
          Подписаться на рассылку
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка...' : 'Записаться'}
      </button>
    </form>
  );
};
