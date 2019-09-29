/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('blog', {
		blogId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		usrId: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		blogTitle: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		blogContents: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		blogStatCd: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: ''
		},
		blogTypeCd: {
			type: DataTypes.CHAR(2),
			allowNull: true,
			defaultValue: ''
		},
		blogHashTag: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: ''
		},
		blogAttaFile: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: ''
		},
		blogLikeCnt: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		blogViewCnt: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		useYn: {
			type: DataTypes.CHAR(1),
			allowNull: true,
			defaultValue: 'N'
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
		tableName: 'tb_mcat_blog',
		timestamps : false,
		freezeTableName: true,
		underscored: false

	});
};
