module.exports = function(sequelize, DataTypes) {
  var clients = sequelize.define("clients", {
    clientFirstName: DataTypes.STRING,
    clientLastName: DataTypes.STRING,
    clientEmail: DataTypes.STRING,
    clientPhone: DataTypes.STRING
  });
  clients.associate = function(models) {
    clients.hasMany(models.events, {
      onDelete: "cascade"
    });
  };
  return clients;
};
