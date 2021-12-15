const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://previews.123rf.com/images/mikegreen/mikegreen1609/mikegreen160900089/67292768-school-building-icon-silhouette-vector-illustration.jpg"
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  }

});

module.exports = Campus;