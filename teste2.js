var data =  require("./fakeData");

module.exports = function(req, res){
    const { name, job } = req.body;// uso de destructuring

    const newUser = {
    name: name,
    job: job,
    };

 data.push(newUser); //adiciona novo usuário ao array

 res.send(newUser); // o objeto é retornado com resposta da requisição POST
};