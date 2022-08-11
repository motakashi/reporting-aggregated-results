const program = require("commander");
const Db = require("./db");

async function main() {
  let db = null;

  try {
    // 関数の引数を取得
    program.parse(process.argv);
    const param = JSON.parse(program.args[0]);

    // DB接続
    const dbParam = {
      host: param.host,
      port: param.port,
      user: param.user,
      database: param.database,
    };
    db = new Db(dbParam, process.env.DB_PASSWORD);
    await db.createConnection();

    const result = await db.findAllData();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    if (db) {
      db.disConnection();
    }
  }
}

exports.main = main;
