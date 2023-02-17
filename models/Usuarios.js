const { DataTypes} = require('sequelize');
const  db  =  require("../db/connection");



const usuarios = db.define('usuarios',{
        nombre:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
    
    }, {
        timestamps: false
    });
 
    // Usuario.prototype.toJSON = function () {
    //     let values = Object.assign({}, this.get());
       
    //     values.uid = values.id
    //     delete values.password;
    //     delete values.id;
    //     return values;
    //   }


module.exports =  {usuarios};