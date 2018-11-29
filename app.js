const indicative = require("indicative");
const { logApi, validationRules } = require('./services');


// console.log("validationRules:=====", validationRules);
module.exports = {
  saveSystemLog: ( logData ) => {
    console.log('logData:====', logData)
    indicative.validate( logData, validationRules.user.RULES )
      .then( validLogData => {
      return logApi.saveLog( validLogData );
    }).then( logSaved => {
      console.log("Data is:=====", logSaved.hits);
    }).catch( err => {
      console.log("Data is:=====", err);
    })
  }
};

module.exports.saveSystemLog( { email: 'vikas@gmail.com' } );
