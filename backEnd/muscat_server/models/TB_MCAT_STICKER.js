/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB_MCAT_STICKER', {
		STK_ID: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		USR_ID: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		STK_TITLE: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		STK_TYPE_CD: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: '01'
		},
		STK_GOAL_CNT: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: '0'
		},
		STK_GOAL_CONTENTS: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: ''
		},
		STK_START_DATE: {
			type: DataTypes.STRING(8),
			allowNull: false,
			defaultValue: ''
		},
		STK_END_DATE: {
			type: DataTypes.STRING(8),
			allowNull: false,
			defaultValue: ''
		},
		USE_YN: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: 'N'
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
		tableName: 'TB_MCAT_STICKER'
	});
};
