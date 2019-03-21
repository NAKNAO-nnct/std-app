var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* userlist htmlページを作成 */
router.get("/userlist", function(req, res) {
  var db = req.db;
  var collection = db.get("stdApp");
  collection.find({}, {}, function(e, docs) {
    res.render("userlist", {
      title: "user list",
      userlist: docs
    });
  });
});

module.exports = router;
