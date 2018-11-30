var coinData = {};
var requestFunc = function() {
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/http://koineks.com/ticker",
    dataType: 'json',
    async: false,
    success: function(data) {
        coinData = data;
    }
});
//Bitcoin
document.getElementById("btc-current").innerHTML = coinData.BTC.current;
document.getElementById("btc-high").innerHTML = coinData.BTC.high;
document.getElementById("btc-low").innerHTML = coinData.BTC.low;
document.getElementById("btc-percentage").innerHTML = coinData.BTC.change_percentage;

//Etherium
document.getElementById("eth-current").innerHTML = coinData.ETH.current;
document.getElementById("eth-high").innerHTML = coinData.ETH.high;
document.getElementById("eth-low").innerHTML = coinData.ETH.low;
document.getElementById("eth-percentage").innerHTML = coinData.ETH.change_percentage;

//Bitcoin Gold
document.getElementById("btg-current").innerHTML = coinData.BTG.current;
document.getElementById("btg-high").innerHTML = coinData.BTG.high;
document.getElementById("btg-low").innerHTML = coinData.BTG.low;
document.getElementById("btg-percentage").innerHTML = coinData.BTG.change_percentage;

//Etherium Classic
document.getElementById("etc-current").innerHTML = coinData.ETC.current;
document.getElementById("etc-high").innerHTML = coinData.ETC.high;
document.getElementById("etc-low").innerHTML = coinData.ETC.low;
document.getElementById("etc-percentage").innerHTML = coinData.ETC.change_percentage;

//DOGE
document.getElementById("doge-current").innerHTML = coinData.DOGE.current;
document.getElementById("doge-high").innerHTML = coinData.DOGE.high;
document.getElementById("doge-low").innerHTML = coinData.DOGE.low;
document.getElementById("doge-percentage").innerHTML = coinData.DOGE.change_percentage;

//LITECOIN
document.getElementById("ltc-current").innerHTML = coinData.LTC.current;
document.getElementById("ltc-high").innerHTML = coinData.LTC.high;
document.getElementById("ltc-low").innerHTML = coinData.LTC.low;
document.getElementById("ltc-percentage").innerHTML = coinData.LTC.change_percentage;

//RIPPLE
document.getElementById("xrp-current").innerHTML = coinData.XRP.current;
document.getElementById("xrp-high").innerHTML = coinData.XRP.high;
document.getElementById("xrp-low").innerHTML = coinData.XRP.low;
document.getElementById("xrp-percentage").innerHTML = coinData.XRP.change_percentage;

//NEM
document.getElementById("xem-current").innerHTML = coinData.XEM.current;
document.getElementById("xem-high").innerHTML = coinData.XEM.high;
document.getElementById("xem-low").innerHTML = coinData.XEM.low;
document.getElementById("xem-percentage").innerHTML = coinData.XEM.change_percentage;

//DASH
document.getElementById("dash-current").innerHTML = coinData.DASH.current;
document.getElementById("dash-high").innerHTML = coinData.DASH.high;
document.getElementById("dash-low").innerHTML = coinData.DASH.low;
document.getElementById("dash-percentage").innerHTML = coinData.DASH.change_percentage;

//STELLAR
document.getElementById("xlm-current").innerHTML = coinData.XLM.current;
document.getElementById("xlm-high").innerHTML = coinData.XLM.high;
document.getElementById("xlm-low").innerHTML = coinData.XLM.low;
document.getElementById("xlm-percentage").innerHTML = coinData.XLM.change_percentage;

//BITCOIN CASH
document.getElementById("bch-current").innerHTML = coinData.BCH.current;
document.getElementById("bch-high").innerHTML = coinData.BCH.high;
document.getElementById("bch-low").innerHTML = coinData.BCH.low;
document.getElementById("bch-percentage").innerHTML = coinData.BCH.change_percentage;

//TRON
document.getElementById("trx-current").innerHTML = coinData.TRX.current;
document.getElementById("trx-high").innerHTML = coinData.TRX.high;
document.getElementById("trx-low").innerHTML = coinData.TRX.low;
document.getElementById("trx-percentage").innerHTML = coinData.TRX.change_percentage;

//USD TETHER
document.getElementById("usdt-current").innerHTML = coinData.USDT.current;
document.getElementById("usdt-high").innerHTML = coinData.USDT.high;
document.getElementById("usdt-low").innerHTML = coinData.USDT.low;
document.getElementById("usdt-percentage").innerHTML = coinData.USDT.change_percentage;

console.log(coinData);

}

requestFunc();
setInterval(requestFunc, 60000);


