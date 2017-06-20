# Run Node ES6 App in a Docker Container
Boilerplate for running node ES6 in a Docker Container

## Install
```sh
$ git clone <this:repo>
```

## Build

```sh
$ docker-compose build
```

## Run in Development Mode
```sh
$ docker-compose up
```

## Production
First you need to build the app
```sh
$ cd app && npm run build && cd ..
```
then Edit the Dockerfile and add --production to npm install.
```sh
# Add --production flag
RUN npm install --production
```
Start the container
```sh
$ docker-compose -f docker-compose.prod.yml up
```

## Notes
Lock the dependencies versions if you change/add dependencies
```sh
$ npm shrinkwrap

$ docker exec -t -i mycontainer /bin/bash
```

## Links
https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
