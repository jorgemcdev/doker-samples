# Docker Compose

## Run
```sh
$ sudo docker-compose up

# use the d flag to run in the background
$ sudo docker-compose up -d

# Stop compose
$ sudo docker-compose stop
```

## Docker Commands
```sh
# List all the running containers
$ docker ps

# List stopped Containers
$ docker ps -a

# List docker images
$ docker images

$ docker --version

# Delete all containers
docker rm $(docker ps -a -q)

# Delete all images
docker rmi $(docker images -q)
```
