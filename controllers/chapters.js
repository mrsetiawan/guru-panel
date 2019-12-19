const { apiEndPoint } = require('./config')
const axios = require('axios')

module.exports = {
    index: () => {
        return axios.get(apiEndPoint + 'chapters')
    }
}