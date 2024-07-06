const authMiddleWare = (req, res, next) => {
  // get token from header or get from cookie
  // extract user info from token or cookie

  // if not login
  /**
    res.status(401).send({ message: "you have not login yet"})
   */



  // assume login user is ID: 1
  req.user = { id: 1 };
  next();
  
}

module.exports = authMiddleWare;