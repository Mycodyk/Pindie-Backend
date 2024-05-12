const users = require("../models/user");

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({}, { password: 0 });
  next();
};

const findUserById = async (req, res, next) => {
  console.log("GET /users/:id");
  try {
    req.user = await users.findById(req.params.id, { password: 0 });
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Пользователь не найден" }));
  }
};

module.exports = {
  findAllUsers,
  findUserById,
};
