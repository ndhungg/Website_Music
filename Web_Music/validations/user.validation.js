module.exports.PostCreate = function (req, res, next) {
  var errors = [];

  if (!req.body.name) {
    errors.push("Bạn chưa nhập tên!");
  }

  if (!req.body.phone) {
    errors.push("Bạn chưa nhập số điện thoại!");
  }

  if (!req.body.age) {
    errors.push("Bạn chưa nhập tuổi!");
  }

  if (errors.length) {
    res.render("users/create", {
      errors: errors,
      values: req.body,
    });
    return;
  }
  next();
};
