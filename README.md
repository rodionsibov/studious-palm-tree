# Create a Mock Server using Faker.js and JSON server

Use the faker library and json-server to create a mock server which we can use to prototype our frontend
application quickly.

### Faker.js

faker. js is a JavaScript library for generating fake data. The fake data can include images, text in various formats,
names etc.

### JSON Server

Once we have created our fake data using faker.js we’ll need a way to host our data so our application (Frontend) is able
to start consuming it. This is provided by json-server.

## Install the dependencies

```shell
npm install
```

## Start the json-server

Generate the db.json file and start serving the data on localhost:3004

```shell
npm start
```

## Examples

### Fetching the details of a specific user

We can use the following format to get the details of a specific user from the user's array

`GET <http://localhost:3004/users/{id}>`

_Example Curl Request_

```shell
curl --location --request GET 'localhost:3004/users/1' 
--header 'Content-Type: application/json'
```

### Deleting a specific user

We can use the following format to delete a specific user from the user's array

`DELETE <http://localhost:3004/users/{id}>`

_Example Curl Request_

```shell
curl --location --request DELETE 'localhost:3004/users/1'
```

### Updating a specific user

We can use the id field on the user object to make changes to a specific user

`PUT <http://localhost:3004/users/{id}>`

_Example Curl Request_

```shell
curl --location --request PUT 'localhost:3004/users/16' 
--header 'Content-Type: application/json' 
--data-raw '{
"id": 16,
"name": "Harry"
}'
```

