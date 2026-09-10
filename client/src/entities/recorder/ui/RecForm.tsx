import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { sendRecordingThunk } from '../api/recorderThunkApi';
import type { TypeRecording } from '../model/TypeRecording';
import styles from './RecordingForm.module.css';
import { useNavigate } from 'react-router';
import SuccessModal from './SuccessModal';

const FORM_STORAGE_KEY = 'recorder_form_draft';

export const RecordingForm = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [textModal, setTextModal] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    control,
    watch,
  } = useForm<TypeRecording>();

  const allChecked = useWatch({
    control,
    name: 'agreeAll',
    defaultValue: false,
  });

  // Восстановление черновика при монтировании
  useEffect(() => {
    const draft = localStorage.getItem(FORM_STORAGE_KEY);
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        Object.entries(parsed).forEach(([key, value]) => {
          if (
            typeof value === 'string' ||
            typeof value === 'boolean' ||
            typeof value === 'undefined'
          ) {
            setValue(key as keyof TypeRecording, value);
          }
        });
      } catch {
        // ignore
      }
    }
  }, [setValue]);

  // Сохраняем черновик при каждом изменении
  useEffect(() => {
    const subscription = watch((values) => {
      localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(values));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const MAX_SUBMISSIONS = 5;
  const STORAGE_KEY = 'recording_submissions';

  const getSubmissions = (): TypeRecording[] => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      console.error('Ошибка чтения из localStorage:', error);
      return [];
    }
  };

  const saveSubmission = (submission: TypeRecording) => {
    const submissions = getSubmissions();
    submissions.push(submission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  };

  useEffect(() => {
    setValue('personalData', !!allChecked);
    setValue('oferta', !!allChecked);
    setValue('mailing', !!allChecked);
  }, [allChecked, setValue]);

  const onSubmit = async (data: TypeRecording) => {
    const existingSubmissions = getSubmissions();

    if (existingSubmissions.length >= MAX_SUBMISSIONS) {
      setTextModal('Вы уже отправили 5 заявок. Спасибо!');
      return;
    }

    const result = await dispatch(sendRecordingThunk(data));

    if (result.meta?.requestStatus === 'fulfilled') {
      saveSubmission(data);
      reset();
      setModalOpen(true);
      setTextModal('Форма успешно отправлена!');
      localStorage.removeItem(FORM_STORAGE_KEY); // Очищаем черновик после отправки
    }
    if (result.meta?.requestStatus === 'rejected') {
      setModalOpen(true);
      const message =
        result.payload?.message || 'Произошла ошибка при отправке формы.';
      setTextModal(
        'Не удалось отправить форму. Попробуйте ещё раз или свяжитесь с нами по телефону.',
      );
      console.error('Ошибка отправки формы:', message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.formTitle}>
          <h3>
            Оставьте заявку <br />
          </h3>
          <span>
            мы свяжемся с вами
            <br className={styles.mobileLineBreak} /> как можно скорее
          </span>
        </div>
        <div className={styles.formItem}>
          <input
            id="name"
            {...register('name', { required: 'Введите имя' })}
            className={styles.inputField}
            placeholder="Имя"
          />
          {errors.name && (
            <p className={styles.errorText}>{errors.name.message}</p>
          )}
        </div>

        <div className={styles.formItem}>
          <input
            placeholder="Email"
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

        <div className={styles.formItem}>
          <input
            type="tel"
            placeholder="Телефон"
            id="tel"
            {...register('tel', { required: 'Введите номер телефона' })}
            className={styles.inputField}
          />
          {errors.tel && (
            <p className={styles.errorText}>{errors.tel.message}</p>
          )}
        </div>

        <div className={styles.formItem}>
          <input
            placeholder="Сообщение"
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
                onClick={() => {
                  navigate('/politics');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
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
            <span className={styles.customCheckbox}></span>
            <span>
              Я согласен с{' '}
              <span
                className={styles.link}
                onClick={() => {
                  navigate('/oferta');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Офертой
              </span>
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
            <span>
              Я согласен на получение{' '}
              <span
                className={styles.link}
                onClick={() => {
                  navigate('/oferta');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                рассылки
              </span>
            </span>
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
      <SuccessModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        textModal={textModal}
      />
    </>
  );
};
