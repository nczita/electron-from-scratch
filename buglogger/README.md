# BugLogger

## Mongo

```
$ docker-compose up -d
```

Open Mongo Express at http://localhost:8081 (user and pass in dockker-compose.yml)

Create database `buglogger`

Run mongo shell:

```
$ docker exec -it mongodb mongo -u root
# Pass password
```

Then in mongoshell:

```
> use buglogger
> db.createUser(
{
    user: "test",
    pwd: "testPass",
    roles: [
      { role: "readWrite", db: "buglogger" }
    ]
})
```
