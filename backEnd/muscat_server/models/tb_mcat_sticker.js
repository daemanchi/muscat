/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const sticker = sequelize.define('tb_mcat_sticker', {
		STK_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		USR_ID: {
			type: DataTypes.BIGINT,
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
		tableName: 'tb_mcat_sticker',
		timestamps : false
	});
	sticker.associate = function(models) {
		//console.log(models)
		sticker.hasMany(models.tb_mcat_rule, { foreignKey: "STK_ID"});

	};

	return sticker;
};
