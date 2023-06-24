const workoutsModel = require('./workouts.model');

exports.createWorkout = async (req, res) => {
  try {
    await workoutsModel.createWorkout(req, res);
    res.send('Workout was created');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred during user creation');
  }
}

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await workoutsModel.getWorkouts(req, res);
    res.status(200).json(workouts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred during fetching workouts');
  }
};
