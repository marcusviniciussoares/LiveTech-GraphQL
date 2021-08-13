import User from '../models/UserModel';

export default {
  user: (message) => {
    return User.find(message.user);
  },
  fullName: (message) => {
    return `${message.user.firname} ${message.user.firname}`;
  },
};
