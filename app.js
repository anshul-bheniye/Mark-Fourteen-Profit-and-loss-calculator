let initialPrice = document.querySelector('.initial-price');
let quantityStocks = document.querySelector('.quantity-stocks');
let currentPrice = document.querySelector('.current-price');
let btn = document.querySelector('#calculate');
let output = document.querySelector('.output');

var calculateStock = () => {
    let ip = initialPrice.value;
    let curr = currentPrice.value;
    let qty = quantityStocks.value;

    if(ip > curr){
        var loss = (ip - curr) * qty;
        var lossPercentage = (loss / ip) * 100;
        output.innerText = `Hey the loss is ${loss} and percentage is ${lossPercentage}%`;
    } else if (curr > ip){
        var profit = (curr - ip)  * qty;
        var profitPercentage = (profit / ip) * 100;
        output.innerText =  `Hey the profit is ${profit} and percentage is ${profitPercentage}%`;
    } else {
        output.innerText = 'Patience is the key. Stocks do not immediately goes up';
    }
    
}

btn.addEventListener('click', calculateStock);