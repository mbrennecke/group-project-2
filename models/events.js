module.exports = function(sequelize, DataTypes) {
    var events = sequelize.define("events", {
        event: DataTypes.STRING(1234),
    });
    events.associate = function(models) {
        events.belongsTo(models.providers, {
          foreignKey: {
            allowNull: false
          }
        });
        events.belongsTo(models.clients, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return events;
}