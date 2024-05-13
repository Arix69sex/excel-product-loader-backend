import User from '../models/user.js';

const createUser = async (data) => { 
    const user = User.build(data)
    await user.save()
    return user
};

export default createUser;