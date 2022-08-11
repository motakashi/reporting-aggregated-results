const Db = require('./../src/db');
const dbParam = require('./test_param.json');

const mysql = require("mysql");
jest.mock('mysql');

describe('Dbクラスのテストグループ', () => {
  describe('constructorのテストグループ', () => {
    test('コンストラクタとしてのテスト', () => {
      const db = new Db(dbParam, "password");

      expect(db).toBeInstanceOf(Db);
      expect(db.host).toBe(dbParam.host);
      expect(db.port).toBe(dbParam.port);
      expect(db.user).toBe(dbParam.user);
      expect(db.database).toBe(dbParam.database);
      expect(db.password).toBe("password");
    });

    test('DB接続情報が引数として渡されていない場合エラーが発生する', () => {
      try{
        new Db();
      }catch(error){
        expect(error.stack).toMatch(/DBの接続情報がパラメータで渡されていません/);
      }
    });
  });

  describe('createConnectionのメソッド', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('DBに接続できること', async () => {
      const mockedCreateConnection = {
        connect: callback => callback(null, ""),
        end: jest.fn()
      }
      mysql.createConnection.mockReturnValue(mockedCreateConnection);

      const db = new Db(dbParam, "password");
      expect(async () => {
        await db.createConnection();
      }).not.toThrow();
      await db.disConnection();
    })

    test('DBに接続失敗時にエラーが返却されること', async () => {
      const mockedCreateConnection = {
        connect: callback => callback(Error("接続に失敗しました"), ""),
        end: jest.fn()
      }
      mysql.createConnection.mockReturnValue(mockedCreateConnection);

      try{
        const db = new Db(dbParam, "password");
        await db.createConnection();
      }catch(error){
        expect(error.stack).toMatch(/接続に失敗しました/);
      }
    })
  })

  describe('disConnectionのメソッド', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('DBの接続をクローズできること', async () => {
      const mockedCreateConnection = {
        connect: callback => callback(),
        end: jest.fn()
      }
      mysql.createConnection.mockReturnValue(mockedCreateConnection);

      const db = new Db(dbParam, "password");
      await db.createConnection();

      expect(() => {
        db.disConnection();
      }).not.toThrow();
      expect(mockedCreateConnection.end).toHaveBeenCalledTimes(1);
    })
  })
})