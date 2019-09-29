/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_mcat_sticker', {
		stkId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		usrId: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		sktTitle: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		stkTypeCd: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: '01'
		},
		stkGoalCnt: {
			type: DataTypes.INTEGER(3),
			allowNull: true,
			defaultValue: '0'
		},
		stkGoalContents: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: ''
		},
		stkStartDate: {
			type: DataTypes.STRING(8),
			allowNull: false,
			defaultValue: ''
		},
		stkEndDate: {
			type: DataTypes.STRING(8),
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
		tableName: 'tb_mcat_sticker'
	});
};
