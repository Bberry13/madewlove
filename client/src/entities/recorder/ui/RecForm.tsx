import React, { useEffect, type JSX } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { sendRecordingThunk } from '../api/recorderThunkApi';
import type { TypeRecording } from '../model/TypeRecording';
import styles from './RecordingForm.module.css';
import { useNavigate } from 'react-router';
import SuccessModal from './SuccessModal';

export const RecordingForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    control,
  } = useForm<TypeRecording>();

  const allChecked = useWatch({
    control,
    name: 'agreeAll',
    defaultValue: false,
  });

  useEffect(() => {
    setValue('personalData', !!allChecked);
    setValue('oferta', !!allChecked);
    setValue('mailing', !!allChecked);
  }, [allChecked, setValue]);

  const onSubmit = async (data: TypeRecording) => {
    const result = await dispatch(sendRecordingThunk(data));
    if (sendRecordingThunk.fulfilled.match(result)) {
      reset();
      setModalOpen(true);
    } else {
      alert(`Ошибка: ${result.payload?.message}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div>
          <label>Имя</label>
          <input
            {...register('name', { required: 'Введите имя' })}
            className={styles.inputField}
          />
          {errors.name && (
            <p className={styles.errorText}>{errors.name.message}</p>
          )}
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
            className={styles.inputField}
          />
          {errors.email && (
            <p className={styles.errorText}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Телефон</label>
          <input
            {...register('tel', { required: 'Введите номер телефона' })}
            className={styles.inputField}
          />
          {errors.tel && (
            <p className={styles.errorText}>{errors.tel.message}</p>
          )}
        </div>

        <div>
          <label>Сообщение</label>
          <input {...register('message')} className={styles.inputField} />
        </div>

        <div className={styles.checkboxContainer}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              {...register('personalData', { required: true })}
            />
            Я согласен на обработку персональных данных, с условиями{' '}
            <span className={styles.link} onClick={() => navigate('/politics')}>
              Политики
            </span>
          </label>
          {errors.personalData && (
            <p className={styles.errorText}>Обязательное соглашение</p>
          )}

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              {...register('oferta', { required: true })}
            />
            Я ознакомлен и согласен с{' '}
            <span className={styles.link} onClick={() => navigate('/oferta')}>
              Офертой
            </span>
          </label>
          {errors.oferta && (
            <p className={styles.errorText}>Обязательное согласие</p>
          )}

          <label className={styles.checkboxLabel}>
            <input type="checkbox" {...register('mailing')} />Я{' '}
            <span className={styles.link} onClick={() => navigate('/oferta')}>
              согласен
            </span>{' '}
            на получение рассылки
          </label>

          <label className={styles.checkboxLabel}>
            <input type="checkbox" {...register('agreeAll')} />
            Согласиться со всем
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          Записаться
        </button>
      </form>
      <SuccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
