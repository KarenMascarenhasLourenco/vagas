var data = require("./fakeData");

const getUser = (req, res, next) => {
 const { name } = req.query;//usei detructuring para extrair name
 const user = data.find((user) => user.name === name);

 if (user) {
  return res.status(200).send(user); //uso dos returns garante fim da execução da função
 }

 return res.status(404).send("Usuário não encontrado");
};

const getUsers = (req, res, next) => {
 return res.status(200).send(data);
};

module.exports = {
 getUser,
 getUsers,
};
