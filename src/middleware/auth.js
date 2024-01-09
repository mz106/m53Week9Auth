const bcrypt = require("bcrypt");

const saltRounds = parseInt(process.env.SALT);

const hashPass = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    req.body.password = hashedPassword;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const comparePass = async (req, res, next) => {
  try {
    // we need the plain text password AND the hashed password
    // the plain text is in req.body.password
    // hashed password in on the DB in the user table

    // find the user with username req.body.username

    // use bcrypt to compare

    // check the result

    // if false send response with message "passwords do not match"

    // if it is true, add user to request

    console.log("hello from comparePass");
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  hashPass: hashPass,
  comparePass: comparePass,
};
