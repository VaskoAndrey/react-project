import { $axios } from '../api';

class GetWorkoutsService {
  async main() {
    try {
      const { data } = await $axios.get('/workouts'); // Замените на свой URL GET-запроса к базе данных
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new GetWorkoutsService();
