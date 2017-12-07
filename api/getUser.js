const axios = require('axios');


exports.getUser = function() {
    return axios.get('https://api.github.com/users/chrischant3');
};