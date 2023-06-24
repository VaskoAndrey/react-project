module.exports = (sequelize, DataTypes) => {
  return sequelize.define('workouts', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    workoutName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    workoutDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    workoutTime: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}