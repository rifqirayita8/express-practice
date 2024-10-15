import { Sequelize } from "sequelize";


console.log('Database Name:', process.env.DATABASE_NAME);
console.log('Database User:', process.env.DATABASE_USER);
console.log('Database Password:', process.env.DATABASE_PASSWORD);
console.log('Database Host:', process.env.DATABASE_HOST);
console.log('Database Dialect:', process.env.DATABASE_DIALECT);

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
    }
);

export default sequelize;
