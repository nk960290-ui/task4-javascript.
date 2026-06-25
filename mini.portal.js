
let employees = [
    {
        id: 101,
        name: "babu",
        salary: 30000
    },
    {
        id: 102,
        name: "Kumar",
        salary: 40000
    }
];

// Add Employee
function addEmployee(emp) {
    employees.push(emp);
}

// View Employees
function viewEmployees() {
    document.write("<h2>Employee List</h2>");

    for (let i = 0; i < employees.length; i++) {
        document.write(
            "ID: " + employees[i].id +
            " | Name: " + employees[i].name +
            " | Salary: $" + employees[i].salary +
            "<br>"
        );
    }
}

// Bonus Callback
function calculateBonus(emp, callback) {
    let bonus = emp.salary * 0.10;
    callback(emp.name, bonus);
}

function showBonus(name, bonus) {
    document.write("<br>Bonus for " + name + " = $" + bonus + "<br>");
}

// Search Employee
function searchEmployee(id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == id) {
            document.write("<br>Employee Found: " + employees[i].name + "<br>");
            return;
        }
    }
    document.write("<br>Employee Not Found<br>");
}

// Delete Employee
function deleteEmployee(id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id == id) {
            employees.splice(i, 1);
            document.write("<br>Employee Deleted<br>");
            return;
        }
    }
}

// Total Employees
function totalEmployees() {
    document.write("<br>Total Employees: " + employees.length + "<br>");
}

// Add New Employee
addEmployee({
    id: 103,
    name: "Rahul",
    salary: 50000
});


