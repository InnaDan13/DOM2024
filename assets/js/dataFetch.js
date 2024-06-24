"use strict"

const users = [
    {id:1, name:'Test'},
    {id:2,name:"John"}
]

const usersInJson = JSON.stringify(users)
console.log(usersInJson);

const usersFromJson = JSON.parse(usersInJson)
console.log(usersFromJson);


