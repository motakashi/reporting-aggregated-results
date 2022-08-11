//事前設定
const dayjs = require("dayjs");
const timezone = require("dayjs/plugin/timezone");
const utc = require("dayjs/plugin/utc");

const mysql = require("mysql2");

module.exports = class Db {
  constructor(param, password) {
    if (!password) {
      console.log("パスワードが未設定です");
    }

    //DB接続情報
    this.host = param.host;
    this.port = param.port;
    this.user = param.user;
    this.password = password;
    this.database = param.database;

    //タイムゾーン設定
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.tz.setDefault("Asia/Tokyo");
  }

  // DBの接続メソッド
  async createConnection() {
    this.connection = mysql.createConnection({
      host: this.host,
      port: this.port,
      user: this.user,
      password: this.password,
      database: this.database,
    });

    await new Promise((resolve, reject) => {
      this.connection.connect((error) => {
        if (error) {
          return reject(error);
        }
        console.log("接続に成功しました");
        return resolve();
      });
    }).catch((error) => {
      throw new Error("接続に失敗しました");
    });
  }

  // DB切断メソッド
  disConnection() {
    if (this.connection) {
      this.connection.end();
    }
    console.log("DB切断しました");
  }

  //全データ取得
  async findAllData() {
    const sql = `select * from movies`;

    return new Promise((resolve, reject) => {
      this.connection.query(sql, (error, rows) => {
        if (error) {
          return reject(error);
        }

        const results = rows.map((row) => ({
          id: row.id,
          title: row.title,
          purchased: dayjs.utc(row.purchased).local().format(),
        }));

        return resolve(results);
      });
    });
  }
};
