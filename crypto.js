
let btcNaira = document.getElementById('btcNaira');
let btcDollar = document.getElementById('btcDollar');
let btcMc = document.getElementById('btcMc');

let ethNaira = document.getElementById('ethNaira');
let ethDollar = document.getElementById('ethDollar');
let ethMc = document.getElementById('ethMc');


let solNaira = document.getElementById('solNaira');
let solDollar = document.getElementById('solDollar');
let solMc = document.getElementById('solMc');

let dogeNaira = document.getElementById('dogeNaira');
let dogeDollar = document.getElementById('dogeDollar');
let dogeMc = document.getElementById('dogeMc');


// let busdNaira = document.getElementById('busdNaira');
// let busdDollar = document.getElementById('busdDollar');
// let busdMc = document.getElementById('busdMc');

let myRequest = new XMLHttpRequest();

myRequest.open('GET','http://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Csolana%2Cusdt&vs_currencies=ngn%2Cusd&include_market_cap=true&precision=3');

myRequest.onerror = function () {
    alert('Error');
    
};

myRequest.onload = function () {
    console.log(myRequest);
    

    let myData = myRequest.responseText;
    console.log(myData);

    let newData = JSON.parse(myData);
    console.log(newData);

btcDollar.innerHTML = `$${newData.bitcoin.usd}`;
btcNaira.innerHTML = `₦${newData.bitcoin.ngn}`;
ethDollar.innerHTML = `$${newData.ethereum.usd}`;
ethNaira.innerHTML = `₦${newData.ethereum.ngn}`;
solDollar.innerHTML = `$${newData.solana.usd}`;
solNaira.innerHTML = `₦${newData.solana.ngn}`;
dogeDollar.innerHTML = `$${newData.dogecoin.usd}`;
dogeNaira.innerHTML =  `${newData.dogecoin.ngn}`;

}











myRequest.send();
