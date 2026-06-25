let student = {
    NAME: "NANDHAKUMAR",
    TAMIL: 98,
    ENGLISH: 95,
    MATHS: 100,
    SCIENCE: 99,
    SOCIAL: 97,
};

let total = student.TAMIL +
student.ENGLISH +
student.MATHS +
student.SCIENCE +
student.SOCIAL;
let percentage = total / 5;

console.log("Student Name: " + student.NAME);
console.log("Total Marks: " + total);
console.log("Percentage: " + percentage + "%");

if(percentage >= 90){
    console.log("Grade: A+");
} else if(percentage >= 80) {
    console.log("Grade: A");
} else if(percentage >= 70) {
    console.log("Grade: B");
} else if(percentage >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}