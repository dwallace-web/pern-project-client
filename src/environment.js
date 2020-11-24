const { Switch } = require("react-router-dom");

let API_URL = '';

switch(window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        API_URL = 'http://localhost:5000';
        break;
    case 'pern-project.herokuapp.com':
        API_URL = 'https://pern-project-server.herokuapp.com';
        break;
}

export default API_URL;