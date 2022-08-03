'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movies.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    rating: DataTypes.STRING,
    category: DataTypes.STRING,
    purchased: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'movies',
    //-------------------------
    // ここにテーブル全体の定義
    //-------------------------
    // MySQL上のテーブル名を複数形にしない（デフォルトはfalse）
    // freezeTableName: true,

    // タイムスタンプ機能を利用する（デフォルトはtrue）
    // falseにするとcreatedAt, updatedAtのカラムが作成されません
    timestamps: false,

    // タイムスタンプ機能を一部調整（デフォルトはtrue）
    createdAt: false,         // レコード生成時の時間を記録
    updatedAt: false,         // レコード更新時の時間を記録

    // Booleanではなく文字列を指定するとMySQL上のカラム名を変更できます
    // createdAt: 'created_at',
    // updatedAt: 'updated_at'
  });
  return movies;
};