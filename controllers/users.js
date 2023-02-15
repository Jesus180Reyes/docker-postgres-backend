const { response, request } = require("express");
const {usuarios} = require("../models/Usuarios");

const createTable = async (req, res= response) => {
await usuarios.sequelize.query("CREATE TABLE `pruebasDB`.`Usuarios` (`id` serial,`nombre` VARCHAR(255) NOT NULL,`email` VARCHAR(255) NOT NULL);")

   res.json("Tabla Creado");

}


const getUser = async(req, res = response) => {
    const usuario  = await usuarios.findAndCountAll();
   res.json({usuario});


}

const createUser = async(req = request, res = response)=> {
    const {nombre , email}  = req.body;  
    const newUser = await usuarios.create({nombre,email});
    res.status(201).json({
        ok:true,
        msg: "El Usuario a sido creado",
        newUser
    });
}

module.exports =  {
    getUser,
    createUser,
    createTable
}