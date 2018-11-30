const indicative = require("indicative");
const { logApi, validationRules, appUtils,
  constants: { microservices, log_types } } = require('./services');

module.exports = {
  saveSystemLog: ( logData ) => {
    if ( appUtils.isJson( logData ) ) {
      const jsonLogData = JSON.parse( logData )
      const { msName, activity, logType } = jsonLogData;
      if (microservices.includes( msName ) &&
        log_types.includes( logType ) ) {
        indicative.validate( jsonLogData, validationRules[ msName ][ activity ].RULES )
          .then( validLogData => {
            return logApi.saveLog( validLogData );
          }).then( logSaved => {
          // console.log("logSaved", logSaved);
          return logSaved;
        }).catch( err => {
          // console.log("Error", err);
          return err;
        })
      } else {
        // console.log("Not a valid log type or Microservice name");
        return "Not a valid log type or Microservice name";
      }
    } else {
      // console.log("Not a JSON Data");
      return "Not a JSON Data";
    }
  }
};

module.exports.saveSystemLog(
  '{"order_id":"12345","email_id":"vikas.mishra@gmail.com","activity":"order","logType":"verbose","ft_order_id":"FT123345456","order_datetime":1543571103231,"total_transaction":2,"sale_interface":"Online","type":"test","payment_status":"partial_payment","test_mode":"No","msName":"transaction"}'
);
