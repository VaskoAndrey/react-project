import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import '../../../assets/styles/index.scss'
import Button from '../../ui/button/Button'
import Layout from '../../layout/Layout'

import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()
	const { isAuth, isTrainer } = useAuth()

	return (
		<Layout bgImage='/bg.jpg'>
			{isTrainer === 'user' ? 
				<Button clickHandler={() => navigate( '/workouts')}>Go to workouts</Button> :
				null
			} 
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>{isAuth ? 'New' : 'Sign in'}</Button>
			<h1 className={styles.heading}>DO YOUR BEST</h1>
		</Layout>
	)
}

export default Home
