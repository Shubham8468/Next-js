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



// learn about type 

type A ={
    a:number
}

type B={
    b:string
}
// Now want to combine these A and B with each other

type AB= A&B;



// If i want to pass type during the function usesing ..

function hellow <T> (a :T,b:T) :T{
    return a ;
}

hellow<number>(12 ,23);


// use genaric to pass type 
// suppose you create a obj for the use and you not know the type of age like string or number in case use generic 

interface user<T> {
    name:string,
    age:T
}


let ayush : user<number>={
    name:"Ayush",
    age:34
}

// Now here i want to access the Globle types in our project
  
let a:shubham;
a="shubham"
console.log(a);
a=90;

let b:users;
b={
    name:"shubham",
    age:34
}


