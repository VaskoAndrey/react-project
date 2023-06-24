import { useAuth } from "../../../hooks/useAuth"

const {isAuth} = useAuth()

export const menu = [
	{
		title: 'Workouts',
		link: '/workouts',
		isAuth
	},
	{
		title: 'Create new',
		link: '/new-workout',
		isAuth
	},
	{
		title: 'Profile',
		link: '/profile',
		isAuth
	},
	{
		title: 'Sing in',
		link: '/auth',
		isAuth: !isAuth
	}
]
