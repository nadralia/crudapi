# crudapi

## Installation
Clone this repository by running

```sh
git clone git@github.com:nadralia/crudapi.git
```

cd to crudapi and Install the dependencies

```sh
npm install
```

go to the app/config/db.config.js and change db setting to your settings

```sh
dbname , user, password
```

Start the application by running and note the api will be running on port 5000

```sh
npm run dev
```


## Features 
- Create a movie 
- Get all movies
- Get a specific movie.
- Edit a specific movie.
- Delete a movie .

## API Endpoints
| Methods | EndPoint                               | Functionality                                   |Access
| ------- | -------------------------------------- | ----------------------------------------------- |------
| POST    | /movies                      | Create a movie                               |PUBLIC
| GET     | /movies                      | Fetch all movies .                           |PUBLIC
| GET     | /movies/{id}                 | Fetch a specific movie                       |PUBLIC
| PUT     | /movies/{id}                 | Edit the comment of a specific movie         |PUBLIC
| DELETE  | /movies/{id}                 | Delete a specific movie record.              |PUBLIC