const { data } = require("./teste1");

module.exports = function (req, res) {
 var name = req.query.name;
 var count = 0;

 data.forEach(function (user) {
  if (user.name === name) {
   count++;
  }
 });

 res.send("Usuário " + name + " foi lido " + count + " vezes.");
};
