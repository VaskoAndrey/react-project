import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'
import Workouts from '../components/screens/workouts/Workouts'
import Cookies from 'js-cookie';
import { useAuth } from '../hooks/useAuth'

const {isAuth} = useAuth()

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth
	},
	{
		path: '/auth',
		component: Auth,
		isAuth
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth
	},
	{
		path: '/profile',
		component: Profile,
		isAuth
	} ,
	{
		path: '/workouts',
		component: Workouts,
		isAuth
	} 

]
