const userRoutes = require("express").Router();
const userController = require("../controllers/userControllers");
const authMiddleWare = require("../middleWare/authMiddleware");

userRoutes.post("/login", userController.login)
userRoutes.get("/users", userController.getAllUser)
userRoutes.get("/profile", authMiddleWare, userController.getMyProfile)

userRoutes.post("/users", userController.createNewUser)
userRoutes.delete("/users/:id", userController.deleteUserById)

userRoutes.patch("/users/:id/updatePassword", userController.updatePassword)


module.exports = userRoutes;