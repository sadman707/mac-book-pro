// declaring global variable

//memory button 1
document.getElementById('memory-button-1').addEventListener('click', function () {
    const bestPriceInput = document.getElementById('best-price');
    const bestPriceText = bestPriceInput.innerText;
    const bestPriceAmount = parseFloat(bestPriceText);
    bestPriceInput.innerText = bestPriceAmount;
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = 0;

    // console.log(bestPriceAmount);
});
// memory button 2
document.getElementById('memory-button-2').addEventListener('click', function () {

    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCostText = extraMemoryCost.innerText;
    if (extraMemoryCostText < 180) {
        const extraMemoryAmount = parseFloat(extraMemoryCostText) + 180;
        extraMemoryCost.innerText = extraMemoryAmount;
        let totalPrice = 0;
        let price1 = 1299 + parseFloat(document.getElementById('extra-memory-cost').innerText);
        totalPrice = totalPrice + price1;

        console.log('price1', price1);
    }



});
// console.log('second button price', totalPrice);
// storage 1
document.getElementById('storage-button-1').addEventListener('click', function () {
    const normalMemory = document.getElementById('extra-storage-cost');
    const normalMemoryText = normalMemory.innerText;
    const normalMemoryAmount = parseFloat(normalMemoryText);
    normalMemory.innerText = 0;

    // console.log(normalMemoryAmount);
});
// storage 2
document.getElementById('storage-button-2').addEventListener('click', function () {
    const normalMemory = document.getElementById('extra-storage-cost');
    const normalMemoryText = normalMemory.innerText;
    if (normalMemoryText < 100) {
        const normalMemoryAmount = parseFloat(normalMemoryText) + 100;
        normalMemory.innerText = normalMemoryAmount;

        //add
        let price2 = 1299 + parseFloat(document.getElementById('extra-storage-cost').innerText);
    }
    // console.log(normalMemoryAmount);
});
// storage 3
document.getElementById('storage-button-3').addEventListener('click', function () {
    const normalMemory = document.getElementById('extra-storage-cost');
    const normalMemoryText = normalMemory.innerText;
    if (normalMemoryText < 180) {
        const normalMemoryAmount = parseFloat(normalMemoryText) + 180;
        normalMemory.innerText = normalMemoryAmount;

        //add
        let price3 = 1299 + normalMemoryText;
    }

    // console.log(normalMemoryAmount);
});
// Delivery 1
document.getElementById('delivery-button-1').addEventListener('click', function () {
    const delivery = document.getElementById('extra-delivery-charge');
    const deliverText = delivery.innerText;
    const deliveryAmount = parseFloat(deliverText);
    delivery.innerText = 0;
    // console.log(deliveryAmount);

});
// delivery 2
document.getElementById('delivery-button-2').addEventListener('click', function () {
    const delivery = document.getElementById('extra-delivery-charge');
    const deliverText = delivery.innerText;
    if (deliverText < 20) {
        const deliveryAmount = parseFloat(deliverText) + 20;
        delivery.innerText = deliveryAmount;

        //add
        let price4 = 1299 + parseFloat(document.getElementById('extra-delivery-charge').innerText);
    }

    // console.log(deliveryAmount);
});
let total = document.getElementById('total-price').innerText
let totalAmount = parseFloat(total);
totalAmount = price1 + price2 + price3 + price4;
