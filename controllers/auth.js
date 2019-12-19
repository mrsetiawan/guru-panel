const { apiEndPoint } = require('./config')
const axios = require('axios')

const login = (username, password) => {
    return axios.post(apiEndPoint + 'auth/local', {
        identifier: username,
        password: password,
    })
}

const register = (username, email, password) => {
    return axios.post(apiEndPoint + 'auth/local/register', {
        username: username,
        email: email,
        password: password,
    })
}

module.exports = {
    login,
    register
}