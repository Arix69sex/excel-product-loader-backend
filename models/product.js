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
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sku: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    grams: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    comparePrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    barcode: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
});

Product.belongsTo(User, { foreignKey: 'userId' });


export default Product;
