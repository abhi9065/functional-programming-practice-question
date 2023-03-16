
// 1/- Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

/*
const numbers = [1,2,3,4,5]

const incrementNumbers = num => num.map(num => num +3 )

console.log(incrementNumbers(numbers))            
 */



// 2/- Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

/*
const myArray = ['apple', 'banana' , 'grapes']

const capitalizeArray = val => val.toUpperCase()

const printingMap = myArray.map(capitalizeArray)

console.log(printingMap)   */                      



// 3/-  Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

/* 
const people = [
    { name: 'Ankit', age: 25 },
    { name: 'Vinit', age: 24 },
    { name: 'Shashi', age: 29 }
  ];

  const getAges = person => person.age;

  const getAgesConsole = people.map(getAges)
  
  console.log(getAgesConsole)                 */



  // 4/-  Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

 /*
  const products = [
    { name: 'Lip Balm', stock: 100 },
    { name: 'PERFUME', stock: 400 },
    { name: 'Socks', stock: 200 }
  ];


  const getProductNameInLowerCase = product =>{
    return product.name.toLowerCase()
}

  const printingProductToConsole = products.map(getProductNameInLowerCase)
  
  console.log(printingProductToConsole)                          */


  // 5/- 5. Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.
  
  /*

  const cities = [
    { name: 'New York', population: 8538000 },
    { name: 'Los Angeles', population: 3976000 },
    { name: 'Bangalore', population: 13608000 }
  ];

    const getCityNames = city => city.map(city => city.name)

    console.log(getCityNames(cities))                          */


//  6/-  Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

/*

const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];

const filterLongStrings = fruits => fruits.length > 5;

const printingFruits = fruits.filter(filterLongStrings)

console.log(printingFruits)                                  */



//  7/-  Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

/*
const numbers = [1, 2, 30, 4, 15];

const isDivisibleBy3and5 = num => num%3 === 0 && num%5 === 0;

const printingNumbersOfArray = numbers.filter(isDivisibleBy3and5)

console.log(printingNumbersOfArray)                                     */



// 8/- Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.

/*


const people = [
    { name: 'Rahul', age: 25 },
    { name: 'Raj', age: 35 },
    { name: 'Vijay', age: 45 }
  ];

  const filterByAge = person => person.age > 30 

  const printPeopleAge = people.filter(filterByAge)

  console.log(printPeopleAge);                                 */


  // 9/-  Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.


 /*

const students = [
    { name: 'Aditya', score: 85 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 90 }
  ];

  const filterByScore = student => student.score > 80;

  const printingStudentScore = students.filter(filterByScore)

  console.log(printingStudentScore)                                  */




   // 10/-  Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.
   
   
  /*
  
  
   const people = [
    { name: 'Ridhima', age: 75, city: 'Indore' },
    { name: 'Akshay', age: 60, city: 'Delhi' },
    { name: 'Udit', age: 80, city: 'Indore' },
      { name: 'Venki', age: 80, city: 'Bangalore' }
  ];



  const filterByCityAndAge = person => person.filter(person => person.age > 70 && person.city.match('Indore'));

  const filteredPeople = filterByCityAndAge(people)

  console.log(filteredPeople)                                       */




  // 11/-  Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".
  
  
/*
  const books = [
    {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"},
    {title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction"},
    {title: "1984", author: "George Orwell", genre: "Science Fiction"},
    {title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance"}
  ];



      const filterByGenre = (books,genre) => {
        return books.filter(book => book.genre === genre )
      }
  
      const filter =filterByGenre(books , 'Science Fiction')

      console.log(filter)                                           */




    // 12/- Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.
    
   /* 
    const employees = [
        {name: "Abhay", age: 25, salary: 20000},
        {name: "Joice", age: 30, salary: 35000},
        {name: "Reena", age: 35, salary: 15000},
        {name: "Jeena", age: 40, salary: 50000}
      ]; 

    const filterBySalary =(employees ,age,salary) => {

        const filtered = employees.filter(employee => {
            return employee.age > age && employee.salary > salary;
        })

        return filtered
    }

    const filter = filterBySalary(employees , 25 ,22000)


    console.log(filter)                            */



     // 13/- Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.


     /*
     const people = [
      { name: 'Raj', age: 28 },
      { name: 'Swapnil', age: 42 },
      { name: 'Anushka', age: 35 }
    ];

    const filterTheName = person => people.map(people => people.name)

    console.log(filterTheName(people))                    */




    // 14/-    Given an array, write an ES6 function to return a new array with all the elements multiplied by 5

/*
    const numbers =[1,2,3,4];

    const multiplyByFive = num => numbers.map(num => num *5 ) 
    
    console.log(multiplyByFive(numbers))             */





     // 15/-   Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.


/*
     const employeeData = [
	{name: "ram", dept: "marketer"}, 
	{name: "Radha", dept: "SDE"},
	{name: "shyam", dept: "finance professional"},
]

const greetEmployeeMessages = employee => employeeData.map(emp)   */





// 16/-  Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.


/*
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
];


const getBookTitles =  book => book.map(book => book.title)

console.log(getBookTitles(books))                                 */




// 17/- Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.



/*
const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]

const studentArray = student => student.filter(student => student.match('A'))

console.log(studentArray(studentName))                             */





// 18/-Write an ES6 function which filters out the products which have a price greater than 40.

/*

const productData = [
  {prodName: "Dairy Milk", price: 10},
  {prodName: "Dairy Milk Silk", price: 70},
  {prodName: "Five Star", price: 20},
  {prodName: "Mars", price: 50}
]


const getProducts = product => product.filter(product => product.price > 40)

console.log(getProducts(productData))                                */




// 19/-Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.


/*
const numbers = [1, 2, 3, 21, 14, 7];

const isDivisibleBy7 = num => num.find(num => num % 7 === 0)

console.log(isDivisibleBy7(numbers))                 */




// 20/-Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.


/*
const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"]

const isNameGfeater = name => name.find(name => name.length > 8)

console.log(isNameGfeater(names))                                 */



// 21/- Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".


/*
const students = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];

const findStudentWithGradeA = student => student.find(student => student.grade === 'A')

console.log(findStudentWithGradeA(students))              */





// 22/-   Write an ES6 function that takes an array of objects representing students with properties name, grade and scholarship. Return the first student object that has a grade of "A" or they are a scholarship student.

/*
const students = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "B", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "A", scholarship: true },
];


const findStudent = student => student.find(student => student.grade.match('B') && student.scholarship)

console.log(findStudent(students))                    */

