const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findAllArticle = (req, res) => {
  return res.send("test");
};

const createNewArticle = (req, res) => {
  const { title } = req.body;
  const userId = req.user?.id;

  prisma
    .article
    .create({ data: { title, createdById: userId}})
    .then((createdUser)=> {
      res.send(createdUser);
    });
  
};

module.exports = {
  findAllArticle: findAllArticle,
  createNewArticle,
};
