const { Router } = require('express');
const router = Router();
const workoutsController = require('./workouts.controller');

router.post('/new', async (req, res) => {
  await workoutsController.createWorkout(req, res)
});


router.get('/', async (req, res) => {
  await workoutsController.getWorkouts(req, res)
});

module.exports = router;