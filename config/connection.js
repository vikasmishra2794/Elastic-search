module.exports = {
    development: {
      host: "http://localhost:9200",
      index: 'yapsody_logs12345',
      type: '_doc'
    },
    staging: {
      base_api_url: "http://localhost:9200",
      index: '',
      type: '_doc'
    },
    production: {
      base_api_url: "http://localhost:9200",
      index: '',
      type: '_doc'
    }
}
