import { BiUser } from 'react-icons/bi'
import {HiArrowSmLeft} from 'react-icons/hi'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'


const Header = ({ backLink = '' }) => {
	const { pathname, push } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			
			{pathname !== '/' ? (
				<button onClick={() => {navigate(backLink)}}>
					<HiArrowSmLeft className={styles.width} />
				</button>	
			) : <button onClick={() => {navigate(isAuth ? '/profile' : '/auth')}}>
					<BiUser className={styles.width} />
				</button>
			}  

			<Hamburger />
		</header>
	)
}

export default Header
