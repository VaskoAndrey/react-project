import cn from 'clsx'
import { Link } from 'react-router-dom'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data'
import Cookies from 'js-cookie'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Fragment, useState, useEffect } from 'react';


const Menu = ({ isShow }) => {
	const {isAuth} = useAuth()
	const navigate = useNavigate()
	const [state, setState] = useState(menu)

	useEffect(() => {
		setState(state);
	  }, [isAuth]);

	const logoutHandler = () => {
		Cookies.remove('isAuth')
		navigate('/auth')
	}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>

		<ul>
				{state.map((item, index) => (
				<Fragment key={`_index_${index}`}>
				{ item.isAuth ? 
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li> :
					null
			}
				</Fragment>
			))}
			{
				isAuth ? 
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li> :
				null
			}
		</ul> 

		</nav>
	)
}

export default Menu
