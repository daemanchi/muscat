/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_mcat_noti', {
		notiId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		notiUsrId: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		blogId: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		notiTypeCd: {
			type: DataTypes.CHAR(2),
			allowNull: true,
			defaultValue: ''
		},
		notiMsgCd: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: ''
		},
		readYn: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: 'N'
		},
		useYn: {
			type: DataTypes.CHAR(1),
			allowNull: false,
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
		tableName: 'tb_mcat_noti'
	});
};
