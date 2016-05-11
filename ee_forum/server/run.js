/* eslint no-console: 0 */
const APIServer = require('./app');

const API_PORT = 8080;

APIServer.listen(API_PORT, () => {
  console.log(
    `API Server is now running on http://localhost:${API_PORT}`
  );
});
