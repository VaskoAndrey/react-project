import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = 'http://localhost:3001/'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'content-type': 'application/x-www-form-urlencoded'
	}
})
