module.exports = {
  isJson : ( logData ) => {
    try {
      JSON.parse(logData);
    } catch (e) {
      return false;
    }
    return true;
  },

  getNodeEnv: function() {
    return process.env.NODE_ENV || "development";
  },

};