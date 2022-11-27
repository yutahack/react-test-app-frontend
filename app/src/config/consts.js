const REMOTE_SERVER_ADDRESS = process.env.REACT_APP_REMOTE_SERVER_ADDRESS;
const CRYPTO_KEY = process.env.REACT_APP_CRYPTO_KEY;

switch (process.env.NODE_ENV) {
  case 'development':
    console.log('Running in Development Mode');
    console.log('API Server Endpoint: ', REMOTE_SERVER_ADDRESS);
    break;
  case 'production':
    console.log('Running in Production Mode');
    break;
}

module.exports = {
  REMOTE_SERVER_ADDRESS,
  CRYPTO_KEY,
};
