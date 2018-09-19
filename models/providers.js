module.exports = function(sequelize, DataTypes) {
  var providers = sequelize.define("providers", {
    providerBusinessName: { type: DataTypes.STRING, allowNull: false},
    repFirstName: { type: DataTypes.STRING, allowNull: false},
    repLastName: { type: DataTypes.STRING, allowNull: false},
    providerEmail: { type: DataTypes.STRING, allowNull: false},
    providerPhone: { type: DataTypes.STRING, allowNull: false},
    providerAddress: { type: DataTypes.STRING, allowNull: false},
    providerCity: { type: DataTypes.STRING, allowNull: false},
    providerState: { type: DataTypes.STRING, allowNull: false},
    providerZip: { type: DataTypes.STRING, allowNull: false},
    businessHours: { type: DataTypes.STRING(1234), allowNull: false}
  });
  providers.associate = function(models) {
    providers.hasMany(models.events, {
      onDelete: "cascade"
    });
  };
  return providers;
};
