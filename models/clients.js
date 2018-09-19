module.exports = function(sequelize, DataTypes) {
  var clients = sequelize.define("clients", {
    clientFirstName: { type: DataTypes.STRING, allowNull: false},
    clientLastName: { type: DataTypes.STRING, allowNull: false},
    clientEmail: { type: DataTypes.STRING, allowNull: false},
    clientPhone: { type: DataTypes.STRING, allowNull: false}
  });
  clients.associate = function(models) {
    clients.hasMany(models.events, {
      onDelete: "cascade"
    });
  };
  return clients;
};