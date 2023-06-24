import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm, Controller  } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import AuthService from '../../../services/auth.service'
import Layout from '../../layout/Layout'

import styles from './Auth.module.scss'


const Auth = () => {

  const [type, setType] = useState('login')
  const navigate = useNavigate()


  const {
	control,
    register,
	getValues,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onChange'
  })

  
  const { mutate, isLoading } = useMutation(
    ['auth'], 
    ({ login, password ,isTrainer}) => AuthService.main(login, password, type, isTrainer),
    {
      onSuccess: data => {
		if(data.body?.authification) {
			Cookies.set(
				'isAuth',
				 JSON.stringify({ isAuth: data.body.authification, isTrainer: data.body.isTrainer }),
				{ expires: 1 }
			);
			navigate('/')
		}
        reset() 
      }
    }
  )


  const onSubmit = data => {
	const isTrainer = getValues('type');
	mutate({ ...data, isTrainer }); 
  }

  return (
    <>
      <Layout heading='Sign in' bgImage='/auth1.jpg' />
      <div className='wrapper-inner-page'>
        {isLoading && <Loader />} 
        <form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.checkbox}>
				<Controller
					name='type'
					control={control}
					render={({ field }) => (
					<>
					<input
						{...field}
						id='trainer'
						type='radio'
						value='trainer'
						checked={field.value === 'trainer'}
						onChange={() => field.onChange('trainer')} 
					/>
					<label htmlFor='trainer'>Trainer</label>

					<input
						{...field}
						id='user'
						type='radio'
						value='user'
						checked={field.value === 'user'}
						onChange={() => field.onChange('user')} 
					/>
					<label htmlFor='user'>User</label>
					</>
				)}
				/>

			</div>

			<Field
				error={errors?.login?.message} 
				name='login'
				register={register}
				options={{
				required: 'Login is required' 
				}}
				type='text'
				placeholder='Enter login'
			/>

			<Field
				error={errors?.password?.message} 
				name='password'
				register={register}
				options={{
				required: 'Password is required' 
				}}
				type='password'
				placeholder='Enter password'
			/>

			<div className={styles.wrapperButtons}>
				<Button clickHandler={() => setType('login')}>Sign in</Button> 
				<Button clickHandler={() => setType('register')}>Sign up</Button> 
			</div>
        </form>
      </div>
    </>
  )
}

export default Auth
