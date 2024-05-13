import { User } from './models/User';

const getUserById = async (userId) => { 
    const user = await User.findByPk(userId);
    return user
};

export default getUserById;
