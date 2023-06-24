import { $axios } from '../api'

class WorkoutService {
    async main(formData) {
      try {
        
        const { data } = await $axios.post(`/workouts/new`, formData);
        return data;
      } catch (error) {
        throw new Error(error);
      }
    }
}
      
export default new WorkoutService()
