# Ma3Route Server Example

> An example client for interfacing with the Ma3Route API

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

This project has a poller for periodically retrieving traffic updates from the Ma3Route API. These updates are then stored inside a MongoDB database. This is implemented at [/src/utils/Ma3RoutePoller](https://github.com/nigelnindo/ma3route-server-example/blob/master/src/utils/Ma3RoutePoller.js).

There is also a GET route `/ma3routetraffic` for retrieving the stored MongoDB data. This is implemented at [/src/services/ma3routetraffic/index.js](https://github.com/nigelnindo/ma3route-server-example/blob/master/src/services/ma3routetraffic/index.js)

## Getting Started

### Before you begin

Define `MA3_API_KEY` and `MA3_API_SECRET` environment variables otherwise the poller will throw an `AuthenticationRequiredError` when you run the project. Contact the [Ma3Route Team](https://www.ma3route.com/contact-us) for provision of a valid API Key and API Secret.

Have MongoDB server running on the default `localhost` and port `27017`

This project depends on [ma3route-sdk](https://github.com/Ma3Route/node-sdk). Documentation for the sdk can be found [here](https://ma3route.github.io/node-sdk).

[ma3route-sdk](https://github.com/Ma3Route/node-sdk) is simply a helper wrapper around the main Ma3Route API. For lesser abstraction over the Ma3Route API, you can access the documentation [here](https://bitbucket.org/ma3route_team/ma3route-api-documentation/wiki/Updates.md).

### Starting the server

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/y; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Todo

- Avoid storing duplicate traffic updates, either by enforcing unique constraints on the database, or making use of API offsets, or both.

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.


## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
