/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB_MACT_USER', {
		USR_ID: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		USR_EMAIL: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		USR_PASSWORD: {
			type: DataTypes.STRING(100),
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
			allowNull: false
		},
		CREATE_DTTM: {
			type: DataTypes.DATE,
			allowNull: false
		},
		CREATE_ID: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		MODIFY_DTTM: {
			type: DataTypes.DATE,
			allowNull: false
		},
		MODIFY_ID: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		}
	}, {
		tableName: 'TB_MACT_USER'
	});
};
