# Dockerizing TechTime Next.js App

The Dockerfile uses a multi-stage build to first build the Next.js app in one image, and then serve it using a lightweight Node.js image in a separate stage.

## Prerequisites

Before you begin, ensure that you have the following installed on your local machine:

- [Docker](https://www.docker.com/products/docker-desktop)

## Usage

To build the Docker image and run the Next.js app inside a Docker container, follow these steps:

- Clone this repository to your local machine.
- Navigate to the root directory of the cloned repository in a terminal window.
- Run the following command to build the Docker image:

```bash
docker build -t techtime .
```

This will build the Docker image using the Dockerfile in the current directory and tag it with the name techtime.

- Once the build is complete, you can run the Docker container using the following command:

```bash
docker run 3000:3000 techtime
```

This command runs a Docker container using the "techtime" image and performs the following actions:

- --rm: Automatically removes the container when it exits.
- -it: Starts an interactive terminal session in the container.
- -p 3000:3000: Maps port 3000 of the container to port 3000 of the host machine. This is necessary for accessing the application running inside the container.
  techtime: Specifies the name of the Docker image to use for the container.
