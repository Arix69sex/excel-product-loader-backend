import User from '../models/user.js';

const getUserByUsername = async (username) => { 
    const user = await User.findOne({ where: { username: username } });
    return user
};

export default getUserByUsername;
