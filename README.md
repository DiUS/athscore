# athscore
in prep node app

## Running the app

### Create the table/user for psql
```./bin/bootstrap-db.sh```

### Start the app
```npm start```

## DB Stuff
### Run migrations
```grunt db:migrate```

### Create a migration
```grunt db:migrate:make:create_users```

### Create a seed task
```grunt db:seed:make:users```

### Run all seed tasks
```grunt db:seed```
