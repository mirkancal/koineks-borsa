var koineksData;
var koineksKeys = ["BTC", "ETH", "TRX", "EOS", "USDT", "BCH", "LTC", "DOGE", "DASH", "XRP", "XLM", "XEM", "BTG", "ETC"];

_getKoineks = function () {
    var url = "https://cors-anywhere.herokuapp.com/http://koineks.com/ticker";
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      koineksData = Object.assign({}, responseJson);
      _renderKoineks(koineksData);
      //_renderKoineks(koineksData);

    })["catch"](function (error) {
      console.error(error);
    });
  };

_renderLayout= function(arr) {
    arr.forEach((coin) => {

        // select container
        var container = document.getElementsByClassName('container')[0];

        // create card
        var card = document.createElement('card');
        card.className = 'card';
        card.id = coin.toLowerCase();

        // create div for table
        var tableDiv = document.createElement('div');
        tableDiv.className = 'table';

        // create actual table
        var table = document.createElement('table');

        var thead = document.createElement('thead');
        var thead_tr = document.createElement('tr');

        // preparing retro coin image for first th
        var retroCoinImg = document.createElement('img');
        retroCoinImg.src = "icons/retro.png";
        retroCoinImg.alt = "retro coin image";

        // adding retro coin image to first th
        var thead_tr_th1 = document.createElement('th');
        thead_tr_th1.appendChild(retroCoinImg);


        var thead_tr_th2 = document.createElement('th');
        thead_tr_th2.textContent = 'Coin';

        var thead_tr_th3 = document.createElement('th');
        thead_tr_th3.textContent = 'Güncel';

        var thead_tr_th4 = document.createElement('th');
        thead_tr_th4.textContent = 'En Yüksek';

        var thead_tr_th5 = document.createElement('th');
        thead_tr_th5.textContent = 'En Düşük';

        var thead_tr_th6 = document.createElement('th');
        thead_tr_th6.textContent = '%';

        thead_tr.appendChild(thead_tr_th1);
        thead_tr.appendChild(thead_tr_th2);
        thead_tr.appendChild(thead_tr_th3);
        thead_tr.appendChild(thead_tr_th4);
        thead_tr.appendChild(thead_tr_th5);
        thead_tr.appendChild(thead_tr_th6);

        thead.appendChild(thead_tr);

        // end of thead

        // tbody
        tbody = document.createElement('tbody');

        tbody_tr = document.createElement('tr');

        // coin photo for td1
        var coinImage = document.createElement('img');
        coinImage.src = `icons/${coin.toLowerCase()}.png`
        coinImage.alt = `${coin.toLowerCase()} icon`

        var tbody_tr_td1 = document.createElement('td');
        tbody_tr_td1.appendChild(coinImage);

        var tbody_tr_td2 = document.createElement('td');
        tbody_tr_td2.textContent = `${coin}`;

        var tbody_tr_td3 = document.createElement('td');
        tbody_tr_td3.id = `${coin}-current`;

        var tbody_tr_td4 = document.createElement('td');
        tbody_tr_td4.id = `${coin}-high`;

        var tbody_tr_td5 = document.createElement('td');
        tbody_tr_td5.id = `${coin}-low`;

        var tbody_tr_td6 = document.createElement('td');
        tbody_tr_td6.id = `${coin}-percentage`;

        tbody_tr.appendChild(tbody_tr_td1);
        tbody_tr.appendChild(tbody_tr_td2);
        tbody_tr.appendChild(tbody_tr_td3);
        tbody_tr.appendChild(tbody_tr_td4);
        tbody_tr.appendChild(tbody_tr_td5);
        tbody_tr.appendChild(tbody_tr_td6);

        tbody.appendChild(tbody_tr);
        // end of tbody

        table.appendChild(thead);
        table.appendChild(tbody);
        tableDiv.appendChild(table);
        card.appendChild(tableDiv);

        container.appendChild(card);
        
    });
};

_renderKoineks = function(data) {
    Object.keys(data).forEach((coin) => {
        document.getElementById(`${coin}-current`).textContent = data[coin].current;

        document.getElementById(`${coin}-high`).textContent = data[coin].high;

        document.getElementById(`${coin}-low`).textContent = data[coin].low;

        document.getElementById(`${coin}-percentage`).textContent = data[coin].change_percentage;
    
    })
}


_renderLayout(koineksKeys);
_getKoineks();
setInterval(_getKoineks, 60000);