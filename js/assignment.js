//memory button 1
document.getElementById('memory-button-1').addEventListener('click', function () {
    const bestPriceInput = document.getElementById('best-price');
    const bestPriceText = bestPriceInput.innerText;
    const bestPriceAmount = parseFloat(bestPriceText);
    bestPriceInput.innerText = bestPriceAmount;
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = 0;
    let totalPrice = parseFloat(document.getElementById('total-price').innerText);
    let subtractedPrice = totalPrice - 180;
    document.getElementById('total-price').innerText = subtractedPrice;

    // console.log(bestPriceAmount);
});
// memory button 2
document.getElementById('memory-button-2').addEventListener('click', function () {

    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCostText = extraMemoryCost.innerText;
    if (extraMemoryCostText < 180) {
        const extraMemoryAmount = parseFloat(extraMemoryCostText) + 180;
        extraMemoryCost.innerText = extraMemoryAmount;
        let price1 = 1299 + parseFloat(document.getElementById('extra-memory-cost').innerText) + parseFloat(document.getElementById('extra-storage-cost').innerText) + parseFloat(document.getElementById('extra-delivery-charge').innerText);

        document.getElementById('total-price').innerText = price1;

        // console.log('price1', price1);
    }
});
// console.log('second button price', totalPrice);
// storage 1
document.getElementById('storage-button-1').addEventListener('click', function () {
    const normalStorage = document.getElementById('extra-storage-cost');
    const normalStoryText = normalStorage.innerText;
    const normalStorageAmount = parseFloat(normalStoryText);
    const extraStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    if (extraStorageCost == 100) {
        let totalPrice = parseFloat(document.getElementById('total-price').innerText);
        let subtractedPrice = totalPrice - 100;
        document.getElementById('total-price').innerText = subtractedPrice;
    }
    else {
        let totalPrice = parseFloat(document.getElementById('total-price').innerText);
        let subtractedPrice = totalPrice - 180;
        document.getElementById('total-price').innerText = subtractedPrice;
    }
    normalStorage.innerText = 0;

    console.log('extra cost', extraStorageCost);


    // console.log(normalMemoryAmount);
});
// storage 2
document.getElementById('storage-button-2').addEventListener('click', function () {
    const normalStorage = document.getElementById('extra-storage-cost');
    const normalStorageText = normalStorage.innerText;
    if (normalStorageText < 100) {
        const normalStorageAmount = parseFloat(normalStorageText) + 100;
        normalStorage.innerText = normalStorageAmount;
        let price1 = 1299 + parseFloat(document.getElementById('extra-memory-cost').innerText) + parseFloat(document.getElementById('extra-storage-cost').innerText) + parseFloat(document.getElementById('extra-delivery-charge').innerText);

        document.getElementById('total-price').innerText = price1;
    }
    // console.log(normalMemoryAmount);
});
// storage 3
document.getElementById('storage-button-3').addEventListener('click', function () {
    const normalStorage = document.getElementById('extra-storage-cost');
    const normalStorageText = normalStorage.innerText;
    if (normalStorageText < 180) {
        const normalStorageAmount = parseFloat(normalStorageText) + 180;
        normalStorage.innerText = normalStorageAmount;

        //add
        let price1 = 1299 + parseFloat(document.getElementById('extra-memory-cost').innerText) + parseFloat(document.getElementById('extra-storage-cost').innerText) + parseFloat(document.getElementById('extra-delivery-charge').innerText);

        document.getElementById('total-price').innerText = price1;
    }

    // console.log(normalMemoryAmount);
});
// Delivery 1
document.getElementById('delivery-button-1').addEventListener('click', function () {
    const delivery = document.getElementById('extra-delivery-charge');
    const deliverText = delivery.innerText;
    const deliveryAmount = parseFloat(deliverText);
    delivery.innerText = 0;
    let totalPrice = parseFloat(document.getElementById('total-price').innerText);
    let subtractedPrice = totalPrice - 20;
    document.getElementById('total-price').innerText = subtractedPrice;

});
// delivery 2
document.getElementById('delivery-button-2').addEventListener('click', function () {
    const delivery = document.getElementById('extra-delivery-charge');
    const deliverText = delivery.innerText;
    if (deliverText < 20) {
        const deliveryAmount = parseFloat(deliverText) + 20;
        delivery.innerText = deliveryAmount;
        let price1 = 1299 + parseFloat(document.getElementById('extra-memory-cost').innerText) + parseFloat(document.getElementById('extra-storage-cost').innerText) + parseFloat(document.getElementById('extra-delivery-charge').innerText);
        document.getElementById('total-price').innerText = price1;
    }
});

