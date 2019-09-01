/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const blog =  sequelize.define('tb_mcat_blog', {
		BLOG_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		USR_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		BLOG_TITLE: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		BLOG_CONTENTS: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		BLOG_STAT_CD: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: ''
		},
		BLOG_TYPE_CD: {
			type: DataTypes.CHAR(2),
			allowNull: true,
			defaultValue: ''
		},
		BLOG_HASH_TAG: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: ''
		},
		BLOG_ATTA_FILE: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: ''
		},
		BLOG_LIKE_CNT: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
		},
		BLOG_VIEW_CNT: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			defaultValue: '0'
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
		tableName: 'tb_mcat_blog',
		timestamps : false
	});

	return blog;
};
