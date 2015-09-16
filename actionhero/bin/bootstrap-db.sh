#!/bin/bash

psql postgres postgres -h localhost -f database/bootstrap/upsert_user.sql

psql postgres postgres -h localhost -f database/bootstrap/find_database.sql | grep db_development &> /dev/null

# Check to see if any rows came back from the query to find the listing database. Because
# postgres doesn't support 'create database if not exist' we have to do this to get it working.

if [ $? -ne 0 ]
then
    echo "No db_development database exists, creating one"
    psql postgres postgres -h localhost -f database/bootstrap/create_database.sql
fi