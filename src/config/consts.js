const REMOTE_SERVER_ADDRESS = process.env.REACT_APP_REMOTE_SERVER_ADDRESS;

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
};
