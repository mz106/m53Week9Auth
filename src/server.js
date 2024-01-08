require("dotenv").config();
console.log(process.env.MYSQL_URI);
const express = require("express");

const port = process.env.PORT || 5001;

const User = require("./user/model");

const userRouter = require("./user/routes");
const testRouter = require("./test/routes");

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(testRouter);

const syncTables = async () => {
  await User.sync();
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`App is listening on port ${port}`);
});
