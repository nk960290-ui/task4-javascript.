let balance = Number(prompt("Enter your account balance:"));
let withdrawalAmount = Number(prompt("Enter the amount you want to withdraw:"));

if (withdrawalAmount < balance) {
    balance = balance - withdrawalAmount;
    alert(`Withdrawal successful! Your new balance is: ${balance}`);
    
} else {
    alert("Insufficient funds.");
    document.write("<h3>Withdrawal failed!</h3>");
    document.write("withdrawal amount: " + withdrawalAmount + "<br>");
    document.write("Current balance: " + balance + "<br>");
    }
        document.write("<h3>Insufficient balance!</h3>");
    