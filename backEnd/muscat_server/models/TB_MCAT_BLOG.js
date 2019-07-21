/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB_MCAT_BLOG', {
		BLOG_ID: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		USR_ID: {
			type: DataTypes.INTEGER(10).UNSIGNED,
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
		tableName: 'TB_MCAT_BLOG'
	});
};
