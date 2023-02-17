const express = require('express');
const cors = require('cors');
// const fileUpload = require('express-fileupload');

// const { dbConnection } = require('../database/config');
const  db =  require("../db/connection");
class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.paths = {
            user: '/api/user',
            auth: '/api/auth',
          
        }


        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        try {
            await db.authenticate();
            console.log('Base de datos esta online');
            
        } catch (error) {
           console.log(error);
        }
        
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

        // Fileupload - Carga de archivos
        // this.app.use( fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath: true
        // }));

    }

    routes() {
        
        this.app.use( this.paths.user, require('../routes/users'));
        this.app.use( this.paths.auth, require('../routes/auth'));
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;