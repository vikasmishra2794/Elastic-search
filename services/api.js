const request = require('request'),
  connection  = require('../config/connection')['development'];

module.exports = {
  saveLog: () => {

    const options = { url: `${connection.base_api_url}/yapsody_logs/_search` };
    const defaultOptions = {
      method: 'GET',
      gzip: true,
      json: true
    };

    return new Promise( ( resolve, reject ) => {
      request( { ...options, ...defaultOptions }, ( error, response, body ) => {
        if ( error || !body ) {
          return reject( error || body )
        }
        return resolve( body )
      })
    });
  }
};
