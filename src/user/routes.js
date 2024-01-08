const { Router } = require("express");
const userRouter = Router();

const { addUser, getAllUsers } = require("./controllers");
const { hashPass } = require("../middleware/auth");

userRouter.post("/users", hashPass, addUser);
userRouter.get("/users", getAllUsers);

module.exports = userRouter;
