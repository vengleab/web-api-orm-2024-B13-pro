const jwt = require("jsonwebtoken");

const issueToken = ({ id }) => {
  return jwt.sign({ id}, process.env.JWT_SECRET, { expiresIn: "600s"})
}

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
  issueToken,
  verifyToken,
}