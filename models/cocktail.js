var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Cocktail = sequelize.define("chirp", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
Cocktail.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Cocktail;




// const { INTEGER } = require("sequelize");

// module.exports = function(sequelize, DataTypes) {
//   var Cocktail = sequelize.define("Cocktail", {
//     text: DataTypes.STRING,
//     saveId: value.INTEGER,
//     complete: DataTypes.BOOLEAN
//   });
//   return Cocktail;
// };
