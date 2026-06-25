let products =[
    { name: "computer", price: 30000 },
    { name:"mouse", price: 1500 },
    { name:"keyboard", price: 1000 }
];

function calculatebill(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }

    console.log(`Total bill amount is: ${total}`);
    
    if (total > 10000) {
       let discount = total * 0.10;
      let finalTotal = total - discount;

       console.log(`Discount applied: ${discount}`);
       console.log(`Final bill amount is: ${finalTotal}`);
    } else {
        console.log("No discount applied.");
    }
}
calculatebill(products);

    
