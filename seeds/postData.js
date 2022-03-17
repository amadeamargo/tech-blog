const { Post } = require ('../models')

const postData = [
    {
        title: 'post 1',
        post_text: 'text text text text',
        date_created: '2022-2-2',
        user_id: 1
    },
    {
        title: 'post 2',
        post_text: 'text text text text text text ',
        date_created: '2022-2-2',
        user_id: 2
    },
    {
        title: 'post 3',
        post_text: 'text text text',
        date_created: '2022-2-2',
        user_id: 3
    },
    {
        title: 'post 4',
        post_text: 'text text text text text text',
        date_created: '2022-2-2',
        user_id: 4
    },
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;