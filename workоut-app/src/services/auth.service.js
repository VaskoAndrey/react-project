import { $axios } from '../api'

class AuthService {
  // Метод аутентификации пользователя
  async main(login, password,type, isTrainer ) {
    try {
      // Отправка POST-запроса на сервер для аутентификации
      const { data } = await $axios.post(`/auth/${type}`, {
        login,
        password,
        isTrainer
      })

      return data // Возвращаем данные, полученные от сервера
    } catch (error) {
      throw new Error(error) // Перехватываем исключение и выбрасываем новую ошибку
    }
  }
}

export default new AuthService()
