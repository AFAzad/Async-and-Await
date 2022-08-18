async function test() {
  return "Hello";
}

test().then((result) => {
  console.log(result);
});

test();

// basicllay await function works on async fnction

async function greet() {
  console.log("Good Noon");
  const response = await fetch("json/student-data1.json");
  const students = await response.json();
  return students;
}

console.log("Good Morning");
let a = greet();
console.log("Good Ningt");
console.log("Good bye");
console.log(a);


greet().then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });


/// fetching file of json

async function test() {
  console.log("2 : Message");
  const response = await fetch("/student_data.json");
  console.log("3 : Message");
  const students = await response.json();

  return students;
}

 console.log("1: Message");
let x = test();
console.log("4 : Message");
console.log(x);

test()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
