const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "Temp Value"
  },

  gpa: {
    type: Sequelize.DOUBLE,
    defaultValue: '0.0',
    validate: {
      min: 0,
      max: 4
    }
  }

});

module.exports = Student;