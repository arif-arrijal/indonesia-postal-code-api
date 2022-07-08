var swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});
var outputFile = "./swagger.json";
var endpointsFiles = ["./app.js"];
var config = {
    host: process.env.APP_URL,
    info: {
        title: 'Indonesian Postal Code API Documentation',
        description: 'Indonesian Postal Code API Documentation using Swagger. This API is used to get the postal code of the city and province',
        version: '1.0.0',
        contact: {
            name: 'Muhamad Arif Ar Rijal',
            email: 'muhamad.arif.arrijal@gmail.com'
        }
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