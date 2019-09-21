/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const log =  sequelize.define('tb_mcat_acc_log', {
		LOG_NO: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		USR_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		ACC_DATE: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		CREATE_DTTM: {
			type: DataTypes.DATE,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
 			allowNull: false
		},
		CREATE_ID: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		MODIFY_DTTM: {
			type: DataTypes.DATE,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
 			allowNull: false
		},
		MODIFY_ID: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		}
	}, {
		tableName: 'tb_mcat_acc_log',
		timestamps : false
	});

	return log;
};
