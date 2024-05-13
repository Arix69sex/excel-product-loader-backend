import { User } from './models/User';

const createUser = async (data) => { 
    const user = User.build(data)
    await user.save()
    return user
};

export default createUser;