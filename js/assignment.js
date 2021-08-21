//memory button 1
document.getElementById('memory-button-1').addEventListener('click', function () {
    const bestPriceInput = document.getElementById('best-price');
    const bestPriceText = bestPriceInput.innerText;
    const bestPriceAmount = parseFloat(bestPriceText) + 0;
    bestPriceInput.innerText = bestPriceAmount;
    console.log(bestPriceAmount);
});
// memory button 2
document.getElementById('memory-button-2').addEventListener('click', function () {

    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCostText = extraMemoryCost.innerText;
    const extraMemoryAmount = parseFloat(extraMemoryCostText) + 180;
    extraMemoryCost.innerText = extraMemoryAmount;
    console.log(extraMemoryAmount);
});
// storage 1
document.getElementById('storage-button-1').addEventListener('click', function () {
    const normalMemory = document.getElementById('extra-storage-cost');
    const normalMemoryText = normalMemory.innerText;
    const normalMemoryAmount = parseFloat(normalMemoryText);
    normalMemory.innerText = normalMemoryAmount;
    console.log(normalMemoryAmount);
});
// storage 2
document.getElementById('storage-button-2').addEventListener('click', function () {
    const normalMemory = document.getElementById('extra-storage-cost');
    const normalMemoryText = normalMemory.innerText;
    const normalMemoryAmount = parseFloat(normalMemoryText) + 100;
    normalMemory.innerText = normalMemoryAmount;
    console.log(normalMemoryAmount);
});
// storage 3
document.getElementById('storage-button-3').addEventListener('click', function () {
    const normalMemory = document.getElementById('extra-storage-cost');
    const normalMemoryText = normalMemory.innerText;
    const normalMemoryAmount = parseFloat(normalMemoryText) + 180;
    normalMemory.innerText = normalMemoryAmount;
    console.log(normalMemoryAmount);
});
// Delivery 1
document.getElementById('delivery-button-1').addEventListener('click', function () {
    const delivery = document.getElementById('extra-delivery-charge');
    const deliverText = delivery.innerText;
    const deliveryAmount = parseFloat(deliverText);
    delivery.innerText = deliveryAmount;
    console.log(deliveryAmount);

});
// delivery 2
document.getElementById('delivery-button-2').addEventListener('click', function () {
    const delivery = document.getElementById('extra-delivery-charge');
    const deliverText = delivery.innerText;
    const deliveryAmount = parseFloat(deliverText) + 20;
    delivery.innerText = deliveryAmount;
    console.log(deliveryAmount);
});