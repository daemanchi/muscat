/* jshint indent: 1 */
module.exports = function(sequelize, DataTypes) {
	const noti = sequelize.define('tb_mcat_noti', {
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
		tableName: 'tb_mcat_noti',
		timestamps : false
	});
	
	return noti;
};
