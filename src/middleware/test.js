const test1 = async (req, res, next) => {
  req.body.test1 = "Test 1 run";

  next();
};

const test2 = async (req, res, next) => {
  req.body.test2 = "Test 2 run";

  next();
};

const test3 = async (req, res) => {
  req.body.test3 = "Test 3 run";

  res.send(req.body);
};

module.exports = {
  test1,
  test2,
  test3,
};
