const { apiEndPoint } = require('./config')
const axios = require('axios')

const onLogin = (username, password) => {
    return axios.post(apiEndPoint + 'auth/local', {
        identifier: username,
        password: password,
    })
}

const onRegister = (username, email, password) => {
    return axios.post(apiEndPoint + 'auth/local/register', {
        username: username,
        email: email,
        password: password,
    })
}

module.exports = {
    onLogin,
    onRegister
}