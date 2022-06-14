const db = require("../db");
const shortid = require("shortid");

module.exports.index = (req, res) => {
  res.render("users/index", {
    users: db.get("users").value(),
  });
};

module.exports.search = function (req, res) {
  var q = req.query.q;
  var userMatchers = db
    .get("users")
    .value()
    .filter(function (user) {
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

  res.render("users/index", {
    users: userMatchers,
  });
};

module.exports.create = function (req, res) {
  res.render("users/create");
};

module.exports.get = function (req, res) {
  var id = req.params.id;
  var user = db.get("users").find({ id: id }).value();
  res.render("users/view", {
    user: user,
  });
};

//gửi dữ liệu từ form và lưu vào database
module.exports.PostCreate = function (req, res) {
  req.body.id = shortid.generate();
  var errors = [];

  if(!req.body.name){
    errors.push('Bạn chưa nhập tên!');
  };

  if(!req.body.phone){
    errors.push('Bạn chưa nhập số điện thoại!');
  };

  if(!req.body.age){
    errors.push('Bạn chưa nhập tuổi!');
  };

  if(errors.length){
    res.render("users/create",{
        errors: errors,
        values: req.body 
    });
    return;
  };

  db.get("users").push(req.body).write();
  res.redirect("/users");
};
