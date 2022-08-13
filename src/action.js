const program = require("commander");
const Db = require("./db");
const Aggregate = require("./aggregate");

async function main() {
  let db = null;

  try {
    // 関数の引数を取得
    program.parse(process.argv);
    const param = JSON.parse(program.args[0]);
    console.log(param.database);
    console.log(process.env.DB_PASSWORD)

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
    
    const aggregate = new Aggregate(result);
    console.log(aggregate.totalPrice());
    console.log(aggregate.purchaseHistory());
  } catch (error) {
    console.log(error);
  } finally {
    if (db) {
      db.disConnection();
    }
  }
}

exports.main = main;
