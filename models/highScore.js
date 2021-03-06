module.exports = function (sequelize, DataTypes) {

  const Score = sequelize.define("Score", {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", 'i'],
        len: [3],
        notEmpty: true
      }
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Score;
};