const Sequelize = require('sequelize');

const DB_NAME = 'almacen2024_mysql_nodejs';

const DB_USER = 'admin';

const DB_PASS = 'Camilo123.';



export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: '149.130.179.122',
        dialect: 'mysql',
        port: 3306
    }

);


async function generateDb() {
    await database.sync({ force: true })
    console.log('Base de datos y tablas creada');
}

generateDb();
