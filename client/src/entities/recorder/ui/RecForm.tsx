import React, { useEffect, useState, type JSX } from 'react';
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
  const [modalOpen, setModalOpen] = useState(false);

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
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            {...register('name', { required: 'Введите имя' })}
            className={styles.inputField}
          />
          {errors.name && (
            <p className={styles.errorText}>{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
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
          <label htmlFor="tel">Телефон</label>
          <input
            id="tel"
            {...register('tel', { required: 'Введите номер телефона' })}
            className={styles.inputField}
          />
          {errors.tel && (
            <p className={styles.errorText}>{errors.tel.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className={styles.labelName}>
            Сообщение
          </label>
          <input
            id="message"
            {...register('message')}
            className={styles.inputField}
          />
        </div>

        <div className={styles.checkboxContainer}>
          <label htmlFor="personalData" className={styles.checkboxLabel}>
            <input
              id="personalData"
              type="checkbox"
              className={styles.realCheckbox}
              {...register('personalData', { required: true })}
            />
            <span className={styles.customCheckbox}></span>
            <div>
              Я согласен на обработку персональных данных, с условиями{' '}
              <span
                className={styles.link}
                onClick={() => navigate('/politics')}
              >
                Политики
              </span>{' '}
              ознакомлен
            </div>
          </label>
          {errors.personalData && (
            <p className={styles.errorText}>Обязательное соглашение</p>
          )}

          <label htmlFor="oferta" className={styles.checkboxLabel}>
            <input
              id="oferta"
              type="checkbox"
              className={styles.realCheckbox}
              {...register('oferta', { required: true })}
            />
            <span className={styles.customCheckbox}></span>Я согласен с 
            <span className={styles.link} onClick={() => navigate('/oferta')}>
              Офертой
            </span>
          </label>
          {errors.oferta && (
            <p className={styles.errorText}>Обязательное согласие</p>
          )}

          <label htmlFor="mailing" className={styles.checkboxLabel}>
            <input
              id="mailing"
              type="checkbox"
              className={styles.realCheckbox}
              {...register('mailing')}
            />
            <span className={styles.customCheckbox}></span>
            <span className={styles.link} onClick={() => navigate('/oferta')}>
              Я согласен  на получение рассылки
            </span>
          </label>

          <label htmlFor="agreeAll" className={styles.checkboxLabel}>
            <input
              id="agreeAll"
              type="checkbox"
              className={styles.realCheckbox}
              {...register('agreeAll')}
            />
            <span className={styles.customCheckbox}></span>
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
