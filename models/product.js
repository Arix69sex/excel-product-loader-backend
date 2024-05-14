import { DataTypes } from 'sequelize';
import User from './user.js';
import dbInstance from '../db/db.js';

const Product = dbInstance.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    handle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sku: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    grams: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    comparePrice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    barcode: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    }
});

Product.belongsTo(User, { foreignKey: 'userId' });


export default Product;
