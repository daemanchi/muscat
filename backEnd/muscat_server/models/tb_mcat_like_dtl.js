/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_mcat_like_dtl', {
		likeNo: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		usrId: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		blogId: {
			type: DataTypes.BIGINT,
			allowNull: false
		}
	}, {
		tableName: 'tb_mcat_like_dtl'
	});
};
