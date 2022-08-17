async function test(){
    return "Hello";
}

test().then((result)=>{
    console.log(result);
 
});

test();


// basicllay await function works on async fnction 


async function greet(){
    console.log("Good Noon");
    const response = await fetch("json/student-data.json");
    const students = await response.json();
    return students;
    
}

console.log("Good Morning");
let a = greet();
console.log("Good Ningt");
console.log("Good bye");
console.log(a);
