# NGINX Docker

## Get it Running

```sh
# get image form hub.docker
$ docker pull nginx:1.10.2-alpine

# pull image (if not found) and Run
$ docker run --name my-nginx -p 80:80 nginx:1.10.2-alpine

# Run in background, add the flag -d
$ docker run --name my-nginx -d -p 80:80 nginx:1.10.2-alpine

# List Running Containers
$ docker ps

# List Containers History
$ docker ps -a

# stop container
$ docker stop my-nginx

# Restart
$ docker restart my-nginx

# list images
$ docker images

# remove container
# To add an other runtime parameter you have to delete the container
$ docker rm my-nginx

```

## Container Configuration
Any data or user generated content will not be available in a new and reconfigured container.
The solution is not put data in a our containers. For that we put outside and then map that data to containers width volumes.

## Config nginx and static file from command line
```sh
# 'exec' can execute a command inside a running container
# '-ti' to run in interactive mode
$ docker exec -ti my-nginx /bin/sh

# List conf file from container
# create a nginx.conf file outside and copy and paste
$ / cat /etc/nginx/nginx.conf

# Mounting a volume and pass an outside conf file to the container
# Flag -v is for volumes
# Flag ro is for set the conf file as read only
$ docker run --name my-nginx -d -v /home/ubt/docker/nginx/nginx.conf:/etc/nginx/nginx.conf:ro -p 80:80 nginx:1.10.2-alpine


# Serve static file from /src folder
$ docker run --name my-nginx -d -v /home/ubt/docker/nginx/nginx.conf:/etc/nginx/nginx.conf:ro -v /home/ubt/docker/nginx/src:/usr/share/nginx/html:ro -p 80:80 nginx:1.10.2-alpine
```

## Config nginx and static file using Dokerfile

```sh
# Dockerfile
FROM nginx:1.10.2-alpine
COPY /nginx.conf /etc/nginx/nginx.conf
COPY /src /usr/share/nginx/html
EXPOSE 80

# Build
$ docker build -t my-nginx .

# Run
$ docker run -d -p 80:80 my-nginx
# or
$ docker run --name some-nginx -d -p 80:80 my-nginx

# Stop
$ docker ps

$ docker stop <name or Id>

```


## Compose
Create a File: docker-compose.yml

```
web:
  image: nginx:1.10.2-alpine
  volumes:
   - /home/ubt/docker/nginx/nginx.conf:/etc/nginx/nginx.conf
   - /home/ubt/docker/nginx/src:/usr/share/nginx/html
  ports:
   - "8080:80"
```

```sh
# start
$ sudo docker-compose up
# stop
$ sudo docker-compose stop

```
