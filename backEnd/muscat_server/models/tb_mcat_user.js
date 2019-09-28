/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const user =  sequelize.define('tb_mcat_user', {
		USR_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		USR_EMAIL: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
			defaultValue: ''
		},
		USR_PASSWORD: {
			type: DataTypes.STRING(256),
			allowNull: false,
			defaultValue: ''
		},
		USR_NICK_NAME: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		USR_PHOTOFILE: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: ''
		},
		USR_STAT_CD: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: '02'
		},
		CREATE_DTTM: {
			type: DataTypes.TIME,
			defaultValue: DataTypes.NOW,
			allowNull: false
		},
		CREATE_ID: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		MODIFY_DTTM: {
			type: DataTypes.TIME,
			defaultValue: DataTypes.NOW,
			allowNull: false
		},
		MODIFY_ID: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		}
	}, {
		tableName: 'tb_mcat_user',
		timestamps : false

	});

	return user;
};
