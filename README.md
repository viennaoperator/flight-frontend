# Flights

Projects makes use of Angular 7.

## Prerequesites
- Node (built on v9.3.0)
- Run `npm install` to install project dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests.

## Project structure
- *src/app*: Contains angular app
- *src/app/component*: Contains all component that are rendered in the app. The main component is the only component that has typescript logic in it and is the starting point of fetching the data from the API.
- *src/app/model*: Contains view data models of application
- *src/app/pipe*: Contains common pipes / transformation of view data.
- *src/app/service*: Contains frontend business logic abstractions into different service classes
- *src/app/test*: Contains all unit test of the application (run with `ng test`)
- *src/assets*: Contains static files that are served from, I place the *fonts* and *css* files here.