const userData = require("../models/users.json");
const { PrismaClient } = require("@prisma/client");
const jwtUtils = require("../utils/jwtUtils");
const primsa = new PrismaClient();
const bcrypt = require("bcrypt");

const getMyProfile = async (req, res) => {
  const loginId = req.userId;
  if (loginId)
    return res.send(await primsa.user.findUnique({ where: { id: loginId } }));
  else {
    return res.status(401).send({ message: "You are not login" });
  }
};

const getAllUser = async (req, res) => {
  const { query } = req;
  console.log({ query });
  if (query.username) {
    res.send(
      await primsa.user.findMany({
        where: { username: query.username },
        include: { articles: true },
      })
    );
  } else {
    const foundUsers = await primsa.user.findMany({
      include: { articles: true },
    });
    res.send(foundUsers);
  }

  // res.render("users.ejs", { app_name: "Web ORM 2"})
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await primsa.user.findFirst({ where: { username } });
  if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
    const token = jwtUtils.issueToken({ id: foundUser.id })
    res.cookie("token", token, { maxAge: 99999999 });
    res.send({
      message: "Login success",
      token: "fsdjfskjdsljfdskl",
    });
  } else {
    res.status(401).send();
  }
};

const createNewUser = async (request, response) => {
  console.log({ body: request.body });
  const body = request.body;
  console.log({ body });
  const { username, password } = body;
  const salt = bcrypt.genSaltSync(Math.random() * 10);
  const newUsers = {
    username: username,
    password: bcrypt.hashSync(password, salt),
  };
  const createdUser = await primsa.user.create({
    data: newUsers,
  });
  response.status(201).send({
    message: "Success Created",
    result: createdUser,
  });
};
const updatePassword = async (req, res) => {
  const { body, params } = req;
  console.log({ params });
  const id = parseInt(params.id);
  const { password } = body;
  await primsa.user.update({ data: { password }, where: { id: id } });
  // const findUser = await primsa.user.findUnique({where: { id}});
  // findUser.password = password;
  // await primsa.user.update({ data: findUser, where: { id: id}})
  // findUser.
  // userData.forEach(user => {
  //   if(user.id === id){
  //     user.password = password
  //   }
  // });
  res.status(204).send();
};

const deleteUserById = async (req, res) => {
  const { body, params } = req;
  console.log({ params });
  const id = parseInt(params.id);
  await primsa.user.delete({ where: { id } });
  res.status(204).send();
};
module.exports = {
  login,
  getAllUser,
  createNewUser,
  updatePassword,
  deleteUserById,
  getMyProfile,
};
