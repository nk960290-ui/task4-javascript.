function orderPlaced(callback) {
    alert("ORDER RECEIVED");
    callback();
}

function foodpreparing(callback) {
    alert("FOOD BEING PREPARED");
    callback();
}

function foodelivered() {
    alert("FOOD DELIVERED");
}

orderPlaced(function() {
    foodpreparing(function() {
        foodelivered();
    });
});