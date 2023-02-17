const { response, request } = require("express");
const {usuarios} = require("../models/Usuarios");
const bycryptjs = require("bcryptjs");
const loginUser =async (req = request, res = response)=> {
   
    try {
        let {email,password} =  req.body;
        const usuario = await usuarios.findOne({where: {email: email}});
        if(!usuario) {
            return res.status(404).json({
                ok:false,
                msg: "EL usuario no existe con el correo ", usuario,
            });
        }
    const validPassword = bycryptjs.compareSync(password, usuario.password);
    if(!validPassword){
        return res.status(401).json({
            ok:false,
            msg: "Contrasena incorrecta"
        });
    }
    res.json({
        ok:true,
        msg: "Usuario logueado",
        usuario
    });
        
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({ok:false, msg: "Error 500"});
    }

}


module.exports = {
    loginUser,
}