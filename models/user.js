import { DataTypes } from 'sequelize';
import { define } from '../db';

const User = define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default User;
