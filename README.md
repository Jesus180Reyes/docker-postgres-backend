# docker postgres backend
This is a Nodejs Backend, with docker, for refresh my docker knowledge 

Recuerda: para montar la aplicación escribe el comando ``` docker compose up ```.
La Aplicación Esta construida con Base De datos: ```Postgres```.
Para administrar la base de datos puedes Usar el Host: ```localhost``` ubicado en el puerto ```PORT=80```.
**OJO**  la Base de datos por default esta Vacía para crear la tabla ```Usuarios``` debes correr con método ```POST```  corre el siguiente comando con el PATH 
```localhost:8080/api/table```.
la aplicación para administrar la BD es ```PGAdmin```
#### La Aplicacion esta montada en ```localhost``` ubicado en el puerto ```8080```
### URL de la aplicación es:  ```localhost:8080/api/user```

# Variable de Entorno
| Variable de Entorno | default | 
|-- | -- |
| PORT | 8080 | 
| STAGE | dev | 
| MYSQL_USER | postgres  | 
| MYSQL_PASSWORD | oR0YYrivIyI1yQQfKoIp
| MYSQL_ROOT_PASSWORD | oR0YYrivIyI1yQQfKoIp
| MYSQL_DATABASE | railway
| MYSQL_HOST |  containers-us-west-181.railway.app
| DATABASE_URL | postgres://jesus:123456@db:5432/pruebasDB
| MYSQL_PORT | 8037 | 

## docker-compose.yml 
```
version: '3'


services:
  app: 
    container_name: node-app
    restart: always
    # depends_on:
      # - db
      # - pgAdmin
    image: jesus18reyes/backend-postgres
    
  
    # build:
    #   context: .
    #   dockerfile: Dockerfile
    #   target: ${STAGE}
    environment:
      STAGE: ${STAGE}
      MYSQL_USER:  ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      # MYSQL_HOST: ${MYSQL_HOST}
    ports:
      - ${PORT}:${PORT}
    
  

  db:
    container_name: ${MYSQL_DATABASE}
    restart: always
    image: postgres
    environment:
      POSTGRES_USER: ${MYSQL_USER}
      POSTGRES_PASSWORD: ${MYSQL_PASSWORD}
      # MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      DATABASE_URL: postgresql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:8037/${MYSQL_DATABASE}
      POSTGRES_DB: ${MYSQL_DATABASE}
      # MYSQL_HOST: ${MYSQL_HOST}
    volumes:
      - postgres-db:/var/lib/postgresql/data
    ports:
      - ${MYSQL_PORT}:${MYSQL_PORT}
    

  pgAdmin: 
    container_name: pgadmin
    restart: always
    depends_on:
      - db
      # - app
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: luisdejesus200122@gmail.com
      PGADMIN_DEFAULT_PASSWORD: 123456
    volumes:
      - ./pgAdmin:/var/lib/pgadminbackend-postgres_pruebasDB
    ports:
      - 3000:80
  
volumes:
  postgres-db:
    external: false

```

