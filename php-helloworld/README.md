# Doker
Doker is a tool for running application in isolated environment. It give you the same experience in running Apps inside a virtual machine.

## Advantages:
1. Same Environment
Your App always runs in exactly the same environment, this way there is no inconsistencies. If it works in my computer it acts the same way in a computer of the team member or in a live server.

2. Sandbox Projects, keep projects them separate is good for security and eliminate conflicts between different projects.

3. Projects from others, It just Work.
You don't have to install all the dependencies the project needs. You just start and run.

Docker give this advantages without the overhead running and tasks of running a virtual machine.

## How Docker works

Instead of a virtual machine in docker we have containers.

A containers is not a full virtual machine, they all use/share the host machine kernel, everything on top of that is separeated, everything that makes a Linux distribution unique. All Linux dist are all build on top off the same kernel.
Docker use special feature of Linux file system to create this isolated environments.
Because of that a container starts faster, less memory usage and disk space than a full virtual machine.

## Containers in action

A container is a running instance of a image.

A Image is a Template to create the environment you want. Its a snapshot of the system in at a particular time. It has bundle in a file:
- OS
- Software
- Application Code

A Image are defined using a docker file, a text file with a list of steps to perform to create that image.
Example: OS configuration, install the software you need, copy the project files into the right places, etc...

With that docker file you build a image that you can run to get a container

## Exercise

1. Create a new folder "docker"
2. Hello world App in PHP

- create a folder /src

- Create a file /src/index.php
```
<?php
echo "hello world";
?>
```
- create a file Dockerfile

3. Docker Hub to search for a image of PHP and apache.

https://hub.doker.com
search: php and look for a official image

4. Edit Dockerfile
Insert instructions for download PHP image from docker hub, copy files and expose port 80 to the container listen on port 80

FROM php:7.1-apache
COPY src/ /var/www/html/
EXPOSE 80

5. Build the Image
docker build -t hello-world .

t flag is for give a name
. is looking for dockerfile in current directory

6. Run
$ docker run -p 80:80 hello-world

open browser to test:

http://172.17.0.2/

7. Mount a Volume

$ docker run -p 80:80 -v /home/ubt/docker/ex1/src:/var/www/html hello-world

Volumes give the possibility to the image see a host machine file system, do not change the image. This is very useful for development, but before deploy you always need to build to copy the source files to the image.

PS: You should only have on process per container, if there is a error it only stops one service.
