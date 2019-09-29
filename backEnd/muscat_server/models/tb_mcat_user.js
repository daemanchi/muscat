/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const user = sequelize.define('user', {
		usrId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		usrEmail: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
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
			defaultValue: '02'
		},
		createDttm: {
			type: DataTypes.DATE,
			allowNull: false
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
		modifyId: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			defaultValue: 999999
		}
	}, {
		tableName: 'tb_mcat_user'
	   ,timestamps: false
	}
);

	return user;
};
