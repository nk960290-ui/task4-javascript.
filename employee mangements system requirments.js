let employees =[
    {
        name:"nandhakumar",
        Id: 341,
        salary:40000
    },
    {
        name:"venky",
        Id: 342,
        salary:60000
    }   
];

for (let emp of employees) {
    console.log("Name:"+ emp. name);
    console.log("id:"+ emp .Id);
    console.log("salary:" + emp.salary);

    if(emp.salary>=50000){
       console.log("eligible for bonus");
   } else { 
    console.log("not eligible for bonus");
   }
    
   console.log("-------------");
}

