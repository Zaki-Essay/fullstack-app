FROM mysql:8.3.0
ENV MYSQL_ROOT_PASSWORD=password
COPY ./docker_dependencies/create-dp.sql /docker-entrypoint-initdb.d/
