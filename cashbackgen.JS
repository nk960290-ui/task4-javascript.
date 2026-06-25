function* cashbackGenerator() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

function showOffers() {
    let offers = cashbackGenerator();

    console.log(offers.next().value);
    console.log(offers.next().value);
    console.log(offers.next().value);
    console.log(offers.next().value);
}





