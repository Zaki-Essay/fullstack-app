# Full Stack Application

This project is a full stack web application that incorporates a React-based frontend with TailwindCSS for styling, a Java Spring Boot backend, and a MySQL database running in a Docker container.

## Technology Stack

### Frontend

- **Framework**: React
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Build Tool**: Vite

### Backend

- **Language**: Java
- **Framework**: Spring Boot
- **Database**: MySQL

### DevOps

- **Containerization**: Docker

## Getting Started

To get the application running, you'll need to start the frontend development server, the backend server, and the MySQL database container.

### Prerequisites

Ensure you have the following installed:

- Node.js and npm (for the frontend)
- Java Development Kit (JDK) for running the Spring Boot backend
- Docker for running the MySQL database container

## Starting the Frontend Server

Navigate to the frontend directory:

```sh
cd path/to/frontend
```

## Install the Dependencies

```sh
npm install

or

yarn
```

## Start the Development Server with Vite

```sh
npm run dev

or

yarn dev
```

The frontend server will be running at [http://localhost:3000](http://localhost:3000).

## Starting the Backend Server

Navigate to the backend directory:

```sh
cd path/to/backend
```

Start the Spring Boot application. This can be done through your IDE or via the command line. To start it from the command line, use:

```sh
./mvnw spring-boot:run
```

Or if you're using Gradle:

```sh
./gradlew bootRun
```

The backend server will start, typically running on [http://localhost:8080](http://localhost:8080).

## Starting the MySQL Docker Container

Ensure Docker is running on your machine.

```sh
cd path/to/backend
```

Change MySQL password in Dockerfile

```sh
ENV MYSQL_ROOT_PASSWORD=[set_password]
```

Use the Docker command to build the Docker Image:

```sh
docker build -t [user]/fullstack-container:[version]
```

Use the Docker command to start a MySQL container.

```sh
docker run --name fullstack-backend -p 3306:3306 -d [user]/fullstack-container:[version]
```

This command starts a MySQL instance with a database named `fullstack`, accessible at port `3306` on your localhost.

## Additional Information

- For the frontend, you can access the Vite configuration and other setup details in the `vite.config.ts` file within the frontend directory.
- The backend's application properties, including database connection details, can be configured in the `application.properties` file within the `src/main/resources` directory of the backend application.

## Contributing

Contributions to the project are welcome. Please follow the standard fork and pull request workflow.

## License

This project is licensed under the MIT License.
