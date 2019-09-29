/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const likeDtl = sequelize.define('likeDetail', {
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
	   ,timestamps: false
	});

	return likeDtl;
};
