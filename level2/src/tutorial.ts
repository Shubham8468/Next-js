type ID=number | string;
type status="success"|"error"|"loading"

let userId:ID="shubham";

let StatusCode : status="error";

console.log(userId,StatusCode)

//How to Make Object Type

type userObj={
    name:string,
    age:number
}

const obj : userObj={
    name:"shubham",
    age:21,
}

console.log(obj.name , obj.age);