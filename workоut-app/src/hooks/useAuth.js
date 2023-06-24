import Cookies from 'js-cookie'

export const useAuth = () => {
    return Cookies.get('isAuth') ? 
        JSON.parse(Cookies.get('isAuth')) : 	
        false
}