let API_URL = '';

switch(window.location.hostname){
    case 'localhost':
    case '127.0.0.1':
        API_URL = 'https://q-a-app-server.herokuapp.com';
        break;
    case 'https://q-a-app.herokuapp.com':
        API_URL = 'https://q-a-app-server.herokuapp.com';
        break;
}

console.log('current api url is', API_URL);

export default API_URL;