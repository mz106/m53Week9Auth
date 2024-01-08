const { Router } = require("express");
const testRouter = Router();

const { test1, test2, test3 } = require("../middleware/test");

testRouter.post("/test", test1, test2, test3);

module.exports = testRouter;
