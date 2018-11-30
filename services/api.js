const appUtils = require('./utils');
const connection  = require('../config/connection')[appUtils.getNodeEnv()];
const elasticSearch = require('elasticsearch');
const client = new elasticSearch.Client({
  hosts: [ connection.host ]
});

module.exports = {

  saveLog: ( logData ) => {

    return new Promise( ( resolve, reject ) => {
      client.index({
        index: getElasticSearchIndex( logData ),
        type: connection.type,
        id: getElasticSearchId( logData ),
        body: logData
      }, ( err, resp, status ) => {
        if ( err || !resp || status != 201 ) {
          return reject( err || resp )
        }
        return resolve( resp )
      })
    });
  }

};

getElasticSearchId = ( logData ) => {
  const { email_id, activity } = logData;
  const currentTimeStamp = new Date().getTime();
  return `${email_id}_${currentTimeStamp}_${activity}_${currentTimeStamp}`;
}

getElasticSearchIndex = ( logData ) => {
  const { logType } = logData;
  return `yapsody_logs_${logType}`;
}
