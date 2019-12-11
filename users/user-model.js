const db = require('../data/db-config.js');

module.exports = {
    allUsers,
    findById,
    createUser,
    editUser,
    deleteUser,
    findUserPosts
}

function allUsers() {
    return db('users');
}

function findById() {
    return db('users').where({ id })
}

function createUser(userData) {
    return db('users')
        .insert(userData)
}

function editUser(id, changes) {
    return db('users').where({ id }).update(changes)
}

function deleteUser(id) {
    return db('users').where({ id }).del()
}

function findUserPosts(userId) {
    return db('posts as p')
        .select("p.id", "p.contents as Quote", "u.username as Author")
        .join("users as u", "p.user_id", "u.id")
        .where("user_id", userId)
}