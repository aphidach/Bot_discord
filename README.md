# DiscordBotTemplate
A starting Node.JS template for your own discord bot (2023)




# KKU Healthy Life - Dockerized API 
Welcome to the KKU Healthy Life Dockerized API repository. This guide will help you set up and run the API using Docker containers.

### Prerequisites
Before you begin, make sure you have the following prerequisites installed on your machine:

-Docker \
-Docker Compose

### Getting Started 
#### Step 1: Build a Docker Image
Build the Docker image for the KKU Healthy Life API using the following command:
```
docker build -t kku-healthy-life
```
#### Step 2: Run Docker Container 
Start the Docker containers using Docker Compose:
```
docker-compose up
```

This will launch the API server, and it will be accessible at `http://localhost:13000`.

#### Step 3: User Authentication 
Once the containers are up and running, make a POST request to the authentication endpoint:
``` 
POST  http://localhost:13000/api/v1/auth/login
```

Include the following JSON payload:
```
{
	"code": "{your_code_from_client}"
}
```


#### Step 4: Upload avatar
Once the containers are up and running, make a PUT request to the authentication endpoint: 
```
PUT http://localhost:13000/services/avatar 
```
Include the following FormFile payload:
```
key:{image} type:file
```
Replace {image} with the actual image obtained from the client. 
***Need bearer token from Step 3***

#### Step 5: Get the profile image
Once the containers are up and running, make a GET request to the authentication endpoint: 
```
GET  http://localhost:13000/services/avatar 
```
***Need bearer token from Step 3***
