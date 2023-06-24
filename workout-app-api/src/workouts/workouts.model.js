const db = require('../db');

exports.createWorkout = async (req, res) => {
  try {
      return await db.workouts.create({
        workoutName: req.body.workoutName,
        workoutDescription: req.body.workoutDescription,
        workoutTime: req.body.workoutTime
      }).then(log => {
        return { body: { id: log.id }, status: 201 };
      })
   
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await db.workouts.findAll();
    return workouts;
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};