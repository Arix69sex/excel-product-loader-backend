import { DataTypes } from 'sequelize';
import { define } from '../db';

const Product = define('Product', {
    hadle: {
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

export default Product;
