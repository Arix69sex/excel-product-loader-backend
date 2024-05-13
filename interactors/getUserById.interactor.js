import User from '../models/user.js';

const getUserById = async (userId) => { 
    const user = await User.findByPk(userId);
    return user
};

export default getUserById;
