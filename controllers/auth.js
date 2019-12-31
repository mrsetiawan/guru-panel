const { apiEndPoint } = require('./config')
const axios = require('axios')

class Auth {
    apiEndPoint = apiEndPoint;
    axios;

    constructor() {
        this.axios = axios.create({
            baseURL: this.apiEndPoint
        });
    }

    onLogin = (username, password) => {
        return this.axios.post('auth/local', {
            identifier: username,
            password: password,
        })
    }

    onRegister = (username, email, password) => {
        return axios.post(apiEndPoint + 'auth/local/register', {
            username: username,
            email: email,
            password: password,
        })
    }
}


export default Auth;