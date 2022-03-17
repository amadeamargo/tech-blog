const { User } = require('../models');

const userData =[
    {
        usernmae: 'dea',
        email: 'dea@email.com',
        password: 'Password1'
    },
    {
        usernmae: 'spongebob',
        email: 'spongebob@email.com',
        password: 'Password1'
    },
    {
        usernmae: 'patrick',
        email: 'patrick@email.com',
        password: 'Password1'
    },
    {
        usernmae: 'squidward',
        email: 'squidward@email.com',
        password: 'Password1'
    },

]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;