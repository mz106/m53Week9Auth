// You work for Michael's company in payroll
// Every employee is getting a 10% payrise
// You have an array of objects and a function 'amendSalary'
// Fill in the code to add 10% to each persons salary

const employeeArr = [
  { name: "steve", salary: 15000 },
  { name: "claire", salary: 25000 },
  { name: "tom", salary: 17000 },
];

const amendSalary = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].salary = arr[i].salary * 0.1 + arr[i].salary;
  }
};

amendSalary(employeeArr);
console.log(employeeArr);
