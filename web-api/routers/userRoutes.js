const userRoutes = require("express").Router();
const userController = require("../controllers/userControllers")

userRoutes.get("/users", userController.getAllUser)
// userRoutes.get("/users/:id", userController.getAllUser)

userRoutes.post("/users", userController.createNewUser)
userRoutes.delete("/users/:id", userController.deleteUserById)

userRoutes.patch("/users/:id/updatePassword", userController.updatePassword)


module.exports = userRoutes;