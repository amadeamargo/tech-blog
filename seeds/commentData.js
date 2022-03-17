const { Comment } = require('../models')

const commentData =[
    {
        comment_text: 'comment comment',
        date_created: '2022-3-3',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'comment comment',
        date_created: '2022-3-5',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'comment comment',
        date_created: '2022-3-3',
        user_id: 1,
        post_id: 4
    },
    {
        comment_text: 'comment comment',
        date_created: '2022-3-3',
        user_id: 4,
        post_id: 3
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;