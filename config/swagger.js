const swaggerJsDoc = require("swagger-jsdoc");

const options = {
 definition: {
  openapi: "3.0.0",
  info: {
   title: "Advanced Notes API",
   version: "1.0.0",
   description: "Backend API for managing notes with authentication, search, and analytics."
  },

  servers: [
   {
    url: "http://localhost:5000",
    description: "Local server",
   },
   {
    url: "https://syntecxhub-week3-notes-backend.onrender.com",
description: "Live server"
   }
  ],

  components: {
   securitySchemes: {
    bearerAuth: {
     type: "http",
     scheme: "bearer",
     bearerFormat: "JWT"
    }
   }
  },

  security: [
   {
    bearerAuth: []
   }
  ]
 },

 apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
