module.exports = function(sequelize, DataTypes) {
    var logins = sequelize.define("logins", {
      loginFirstName: { type: DataTypes.STRING, allowNull: false},
      loginLastName: { type: DataTypes.STRING, allowNull: false},
      loginEmail: { type: DataTypes.STRING, allowNull: false},
      loginPassword: { type: DataTypes.STRING, allowNull: false}
    });
    return logins;
  };