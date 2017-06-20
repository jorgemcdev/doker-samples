# Setup Docker Wordpress MySQL

## Using docker

```sh
# Pull the Image
$ docker pull mariadb:10.1.22

# List Images
$ docker images

# stop mysql to free the Port
$ /etc/init.d/mysql stop

# Run mariadb container
$ docker run -d -v /home/ubt/docker/wordpress/development/env/mariadb/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=hello -p 3306:3306 --name mariadb mariadb:10.1.22

ubt@ubt-c50:~/docker/wordpress/development/env/mariadb/data$ ls -la
total 110660
drwxrwxr-x 4 999 docker     4096 Abr 22 23:48 .
drwxrwxr-x 3 ubt ubt        4096 Abr 22 21:27 ..
-rw-rw---- 1 999 docker    16384 Abr 22 23:48 aria_log.00000001
-rw-rw---- 1 999 docker       52 Abr 22 23:48 aria_log_control
-rw-rw---- 1 999 docker 12582912 Abr 22 23:48 ibdata1
-rw-rw---- 1 999 docker 50331648 Abr 22 23:48 ib_logfile0
-rw-rw---- 1 999 docker 50331648 Abr 22 23:47 ib_logfile1
-rw-rw---- 1 999 docker        0 Abr 22 23:48 multi-master.info
drwx------ 2 999 docker     4096 Abr 22 23:48 mysql
drwx------ 2 999 docker     4096 Abr 22 23:47 performance_schema
-rw-rw---- 1 999 docker    24576 Abr 22 23:48 tc.log
ubt@ubt-c50:~/docker/wordpress/development/env/mariadb/data$


# Run Wordpress container
$ docker run -d --name wordpress-test --link mariadb:mysql -p 8080:80 wordpress:4.7-php7.0-apache
```

## Composer
