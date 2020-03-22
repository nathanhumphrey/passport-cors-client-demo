
# Cross-Site Test Demo for Passport

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

_This project demonstrates only the basics for authentication using CORS with a [Passport](http://www.passportjs.org/) setup; it should not be used, as is, in production._

Download the repo and serve index.html via a web server (e.g. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) from VS Code or whatever else you'd like to use).

The page contains several forms that can be used for testing some basics of your server
setup.

*NOTE: this example will POST an 'email' property along with 'password' to the endpoint. Default Passport setup will check for 'username', not 'email', in the body, so update the data in the POST requests to match your server setup if necessary.*

## General Settings Form

Contains a single field for setting the base URL for all requests (default is http://localhost:8080/).

## Register Form

Sends a POST to the path specified (default is 'register') endpoint with email and password payload. The response will be displayed in the page under the Response heading.

## Login Form

Sends a POST to the path specified (default is 'login') endpoint with email and password payload. The response will be displayed in the page under the Response heading. The server should respond with a cookie that will be set on the client for subsequent requests.

## Protected Form

Sends a GET to the path specified (default is 'me') endpoint with no payload. Any cookies that have been saved will also be included in the request. The response will be displayed in the page under the Response heading.

## License

This repository is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).