
import ControllerBase from './ControllerBase';

class Auth extends ControllerBase {

    onLogin = (username, password) => {
        console.log(username)
        return this.axios.post('admin/auth/local', {
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

