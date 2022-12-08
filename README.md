# LAB - Class 02

## Project: Basic Express Server and Testing

### Author: Ethan Luxton

### Problem Domain

From a business requirements standpoint, we will be building a basic Express server using best practices, including server modularization, use of middleware, and tests.

### Links and Resources

[ci/cd](https://github.com/ethan-luxton/basic-express-server/actions/workflows/node.js.yml) (GitHub Actions)
[Main Deployment - Backend](https://basic-express-server2.onrender.com)

### Setup

#### .env requirements

-   PORT: 3001

#### How to initialize/run your application

npm start

#### Features / Routes

-   Feature One: Deploy to Dev
    GET : / - specific route
    GET : /person - query route
-   Feature Two: Testing
-   Feature Three: Deploy to Dev
-   Feature Four: Deploy to main

#### Tests

-   How do you run tests?
    -   npm test
-   Any tests of note?
    -   200 if the name is in the query string
    -   404 on a bad route
    -   404 on a bad method
    -   500 if no name in the query string
    -   given a name in the query string, the output object is correct

### UML

![UML](https://i.imgur.com/6zEWjza.png)
