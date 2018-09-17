module.exports = function(sequelize, DataTypes) {
  var providers = sequelize.define("providers", {
    providerBusinessName: DataTypes.STRING,
    repFirstName: DataTypes.STRING,
    repLastName: DataTypes.STRING,
    providerEmail: DataTypes.STRING,
    providerPhone: DataTypes.STRING,
    providerAddress: DataTypes.STRING,
    providerCity: DataTypes.STRING,
    providerState: DataTypes.STRING,
    providerZip: DataTypes.STRING,
    businessHours: DataTypes.STRING(1234)
  });
  providers.associate = function(models) {
    providers.hasMany(models.events, {
      onDelete: "cascade"
    });
  };
  return providers;
};
