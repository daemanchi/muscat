/* jshint indent: 1 */
const Sticker = require('./tb_mcat_sticker')
module.exports = function(sequelize, DataTypes) {
	const rule =  sequelize.define('tb_mcat_sticker_rule', {
		RULE_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		STK_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
		    references: {
                model: Sticker,
                key: 'STK_ID',
            }
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
		tableName: 'tb_mcat_sticker_rule',
		timestamps : false
	});

	rule.associate = function(models) {
		//console.log(models)
		rule.belongsTo(models.tb_mcat_sticker, { foreignKey: "STK_ID"});

	}
	return rule;
};
