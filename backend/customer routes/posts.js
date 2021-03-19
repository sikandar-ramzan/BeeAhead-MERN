const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  console.log("Authenticated");
  res.send("Authenticated");
});

module.exports = router;
