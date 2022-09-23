const contentType = require("./contentTypes");
const utils = require("./utils");

// 経路の関数を入れる routes オブジェクト
const routes = {
  GET: {},
  POST: {},
};

// リクエスト処理 handle 関数
exports.handle = (req, res) => {
  try {
    routes[req.method][req.url](req, res);
  } catch (e) {
    res
  }
};
