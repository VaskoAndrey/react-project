import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Loader from '../../ui/Loader';
import Button from '../../ui/button/Button';
import Field from '../../ui/field/Field';

import WorkoutService from '../../../services/workout.service';
import Layout from '../../layout/Layout';

import styles from './NewWorkout.module.scss';

const NewWorkout = () => {
  // Состояние для хранения текущего типа аутентификации (вход или регистрация)
  const [type, setType] = useState('workout');
  const navigate = useNavigate();

  // Инициализация формы с использованием хука useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onChange'
  });

  // Использование хука useMutation для создания мутации
  const { mutate, isLoading } = useMutation(
    ['workout'], // Ключ для идентификации мутации
    ({ workoutName, workoutDescription, workoutTime}) =>
    WorkoutService.main({workoutName, workoutDescription, workoutTime}), // Функция, вызываемая при выполнении мутации
    {
      onSuccess: data => {
           navigate('/workouts');
        reset(); // Сброс формы
      }
    }
  );

  // Обработчик отправки формы
  const onSubmit = data => {
    mutate({ ...data }); // Выполнение мутации с данными из формы 
  };

  return (
    <>
      <Layout heading='New workout' bgImage='/workout.jpg' />
      <div className={styles.wrapper}>
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.workoutName?.message} // Отображение ошибки валидации для поля email
            name='workoutName'
            register={register}
            options={{
              required: 'Workout is required' // Установка правила обязательного заполнения поля
            }}
            type='text'
            placeholder='Workout name'
          />
          <textarea
            className={styles.textarea}
            name='workoutDescription'
            {...register('workoutDescription', {
              required: 'Workout description is required' // Установка правила обязательного заполнения поля
            })}
            placeholder='Workout description'
          />


          <Field
            error={errors?.workoutTime?.message} // Отображение ошибки валидации для поля password
            name='workoutTime'
            register={register}
            options={{
              required: 'Workout time is required' // Установка правила обязательного заполнения поля
            }}
            type='text'
            placeholder='Workout time'
          />

          <div className={styles.wrapperButtons}>
            <Button clickHandler={() => setType('workout')}>Create workout</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewWorkout;
