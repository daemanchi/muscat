/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const rule = sequelize.define('stickerRule', {
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
			defaultValue: 'Y'
		},
		createDttm: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
		createId: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			defaultValue: 999999
		},
		modifyDttm: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
		modifyId: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			defaultValue: 999999
		}
	}, {
		tableName: 'tb_mcat_sticker_rule',
		timestamps : false
	});

	return rule;

};
