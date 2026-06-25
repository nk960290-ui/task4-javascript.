let age = parseInt(prompt("Enter your age:"));
let weight = parseInt(prompt("Enter your weight:"));

if (age > 18) {
    if (weight > 50) {
        alert("Eligible For Treatment");
    } else {
        alert("Not Eligible");
    }
} else {
    alert("Not Eligible");
}
