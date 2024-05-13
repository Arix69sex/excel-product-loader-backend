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
            len: {
                args: [8, 20],
                msg: 'Password must be between 8 and 20 characters in length.',
              }
        }
    }
});

export default User;
