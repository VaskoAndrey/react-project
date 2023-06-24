module.exports = (app) => {

// Create routes
  const indexRouter = require('./routes/index');
  const register = require('./src/registration/register.router');
  const login = require('./src/login/login.router');
  const newWorkout = require('./src/workouts/workouts.router');


// Use routes
  app.use('/', indexRouter);
  app.use('/auth/login', login);
  app.use('/auth/register', register);
  app.use('/workouts', newWorkout);

}