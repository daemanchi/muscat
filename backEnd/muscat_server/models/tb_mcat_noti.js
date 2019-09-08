/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_mcat_noti', {
		NOTI_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		NOTI_USR_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		BLOG_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		NOTI_TYPE_CD: {
			type: DataTypes.CHAR(2),
			allowNull: true,
			defaultValue: ''
		},
		NOTI_MSG_CD: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: ''
		},
		READ_YN: {
			type: DataTypes.CHAR(1),
			allowNull: false,
			defaultValue: 'N'
		},
		USE_YN: {
			type: DataTypes.CHAR(1),
			allowNull: false,
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
		tableName: 'tb_mcat_noti'
	});
};
