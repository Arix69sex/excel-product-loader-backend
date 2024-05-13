import { Sequelize } from 'sequelize';

const dbInstance = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
});

export default dbInstance;