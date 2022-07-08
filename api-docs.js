var swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});
var outputFile = "./swagger.json";
var endpointsFiles = ["./app.js"];
var config = {
    host: process.env.APP_URL,
    info: {
        title: 'Indonesian Postal Code API Documentation',
        version: '1.0.0',
    },
    schemes: ['https'],
    securityDefinitions: {
        apiKeyAuth: {
          type: 'apiKey',
          in: 'header', // can be 'header', 'query' or 'cookie'
          name: 'Authorization', // name of the header, query parameter or cookie
          description: 'API key to access this service'
        }
    }
};

swaggerAutogen(outputFile, endpointsFiles, config);