import { User } from './models/User';

const getUserByUsername = async (username) => { 
    const user = await User.findOne({ where: { username: username } });
    return user
};

export default getUserByUsername;
