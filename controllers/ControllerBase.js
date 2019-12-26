const { apiEndPoint } = require('./config')
const axios = require('axios')

export default class ControllerBase {
    apiEndPoint = apiEndPoint;
    axios;

    constructor() {
        const token = localStorage.getItem("jwtToken");
        this.axios = axios.create({
            baseURL: this.apiEndPoint,
            headers: {
                'authorization': 'Bearer ' + token
            }
        });
    }
}