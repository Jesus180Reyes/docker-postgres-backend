const { response, request } = require("express");
const {usuarios} = require("../models/Usuarios");
const bycryptjs = require('bcryptjs');
const createTable = async (req, res= response) => {
await usuarios.sequelize.query("CREATE TABLE 'pruebasDB'.'usuarios' ('id' serial,'nombre' VARCHAR(255) NOT NULL,'email' VARCHAR(255) NOT NULL);")

   res.json("Tabla Creado");

}


const getUser = async(req, res = response) => {
    const usuario  = await usuarios.findAndCountAll();
   res.json({usuario});


}

const createUser = async(req = request, res = response)=> {
    try {
        let {nombre , email,password}  = req.body;
        const isUserExists = await usuarios.findOne({where: {email:email}});
        if(isUserExists) {
            return res.status(404).json({
                ok:false,
                msg: "EL usuario ya existe con el correo ",
            });
        }
        const salt = bycryptjs.genSaltSync(10);
        password = bycryptjs.hashSync(password,salt);
        const newUser = await usuarios.create({nombre,email,password});
        res.status(201).json({
            ok:true,
            msg: "El Usuario a sido creado",
            newUser
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false,msg: "Error 500, hable con el administrado",error});
    }
}

module.exports =  {
    getUser,
    createUser,
    createTable
}