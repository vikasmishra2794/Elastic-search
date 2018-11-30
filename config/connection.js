module.exports = {
    development: {
      host: "http://localhost:9200",
      type: '_doc'
    },
    staging: {
      base_api_url: "http://localhost:9200",
      type: '_doc'
    },
    production: {
      base_api_url: "http://localhost:9200",
      type: '_doc'
    }
}
