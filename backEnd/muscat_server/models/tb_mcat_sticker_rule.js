/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_mcat_sticker_rule', {
		RULE_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		STK_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		STK_RULE_TYPE_CD: {
			type: DataTypes.CHAR(2),
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
		tableName: 'tb_mcat_sticker_rule'
	});
};
