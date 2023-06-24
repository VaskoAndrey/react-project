module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isTrainer: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
}

