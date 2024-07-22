# Secure Password API

This API allows you to validate passwords and check if they are secure based on your requirements.

**This API is a challenge from [Backend-BR](https://github.com/backend-br/desafios), check it out.**

## Technologies Used

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

### How to run this API?

**Be sure to have Node.js Installed on your computer**

1. Clone the repository: `git clone https://github.com/7Cass/secure-password-api.git`
2. Enter the repository: `cd secure-password-api`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

### How to use this API?

1. Make a POST request: `curl -X POST -H "Content-Type: application/json" -d '{"password": "mynewpassword"}' http://localhost:3000/api/validate-password`
2. Observe the errors in the response
3. If the password is secure, you'll receive a 204 status code. Otherwise, you'll receive a 400 status code with a JSON response with the errors that you need to fix.
