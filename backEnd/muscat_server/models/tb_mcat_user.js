/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_mcat_user', {
		usrId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		usrEmail: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		usrPassword: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		usrNickName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		usrPhtofile: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: ''
		},
		usrStatCd: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			defaultValue: '01'
		},
		createDttm: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
		createId: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		modifyDttm: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
		modifyId: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		}
	}, {
		tableName: 'tb_mcat_user'
	});
};
