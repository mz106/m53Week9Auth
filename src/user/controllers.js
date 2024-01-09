const User = require("./model");

const addUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    res
      .status(201)
      .json({ message: `User ${user.username} added`, user: user });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const login = async (req, res) => {
  try {
    console.log("hello from login");
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(201).json({ message: `All users`, users: users });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addUser: addUser,
  getAllUsers: getAllUsers,
  login: login,
};
