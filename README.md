# CRUD API server
Used Express & MongoDB.

* Install dependencies
```
$ yarn install
```

* Start MongoDB
```
$ sudo service mongod start
```
or use [Robomongo](https://robomongo.org/)  
or [install MongoDB](https://docs.mongodb.com/manual/installation/)

* Start server
```
$ yarn server
```

## API doc

### Get all
`GET` to `http://localhost/artists`  
Result contain array of `{name, id}

### Create
`POST` to `http://localhost/artists`  
`body` must contain `{name: :Artist_Name}`  
Result contain `name` & `id` of created field.

### Read
`GET` to `http://localhost/artists/:id` *)  
Result contain `name` & `id` of artist.

### Update
`PUT` to `http://localhost/artists/:id` *)  
`body` must contain `{name: :New_Artist_Name}`  
Result contain update ststus.

### Delete
`DELETE` to `http://localhost/artists/:id` *)  
Result contain delete status. 


*) `id` must contain 24 hex digit.
