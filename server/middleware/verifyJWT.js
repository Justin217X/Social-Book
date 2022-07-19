const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    const token = authHeader?.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.status(403); //invalid token
      req.user = decoded.username;
      req.roles = decoded.UserInfo.roles;
      next();
    });
    return res.status(401);
  }
};

module.exports = verifyJWT;
