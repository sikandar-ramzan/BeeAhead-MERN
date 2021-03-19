const jwt = require("jsonwebtoken");

module.exports = auth = (req, res, next) => {
  // const token = req.header("auth-token");
  // if (!token) return res.status(401).send("Access denied");

  // try {
  //   const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  //   console.log(verified);
  //   req.user = verified;
  //   next();
  // } catch (err) {
  //   // res.status(400).send("Invalid token");
  //   res.json({ auth: false, message: "You failed to authenticate" });
  // }
  const token = req.header("x-access-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "Failed to authenticate" });
      } else {
        req.userID = decoded.id;
        next();
      }
    });
  } catch (err) {
    // res.status(400).send("Invalid token");
    res.json({ auth: false, message: "You failed to authenticate" });
  }
};
