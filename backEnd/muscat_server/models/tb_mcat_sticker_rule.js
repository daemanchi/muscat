/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_mcat_sticker_rule', {
		ruleId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		stkId: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		stkRuleTypeCd: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: ''
		},
		useYn: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: 'N'
		},
		createDttm: {
			type: DataTypes.DATE,
			allowNull: false
		},
		createId: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		modifyDttm: {
			type: DataTypes.DATE,
			allowNull: false
		},
		modifyId: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		}
	}, {
		tableName: 'tb_mcat_sticker_rule'
	});
};
