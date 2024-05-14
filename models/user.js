import { DataTypes } from 'sequelize';
import dbInstance from '../db/db.js';

const User = dbInstance.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isAlphanumeric: {
                args: true,
                msg: 'Username must contain only letters and numbers.',
              },
              len: {
                args: [4, 16],
                msg: 'Username must be between 4 and 16 characters in length.',
              }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min: {
                args: [8],
                msg: 'Password must be at least 8 characters long.',
              }
        }
    }
});

export default User;
