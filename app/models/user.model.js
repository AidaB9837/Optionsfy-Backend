module.exports = (sequelize, Sequelize) => {
  return sequelize.define("users", {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    confirmPassword: {
      type: Sequelize.STRING,
    },
  });
};
