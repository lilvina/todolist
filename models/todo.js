'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
    desc: DataTypes.STRING,
    UserIds: DataTypes.ARRAY,
    lists: DataTypes.ARRAY
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Todo;
};