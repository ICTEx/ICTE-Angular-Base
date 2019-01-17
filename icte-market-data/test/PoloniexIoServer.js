/*
 By: Marco A. Barragan @ ICTE
  */
const express = require('express')
const app = express();
const server = require('http').createServer(app);
const sio = require('socket.io')(server);
const ioClient = require('socket.io-client');

const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex('39IAU1TX-90OSBA19-VRSPP9AK-LL6AIFBC',
    'e3637a20ac600e1b128f9a55120e2a9e4a99e4fd4b5124714d1996e3b9bde3f493f71dd7bb3447725a713087faaec0d37bda932f447799c325a928071ba06d43');

const orderBookModify = 77, orderBookRemove = 82, newTrade = 119;

const askConstant = 97; //'a' unicode number
const bidConstant = 98; //'b' unicode number
const tickerChannel = 116; //'t' unicode number

let port = 8080;

const validPairs = [
    'USDT_BTC',
    'USDT_DOGE',
    'USDT_DASH',
    'USDT_LTC',
    'USDT_NXT',
    'USDT_STR',
    'USDT_XMR',
    'USDT_XRP',
    'USDT_ETH',
    'USDT_SC',
    'USDT_LSK',
    'USDT_ETC',
    'USDT_REP',
    'USDT_ZEC',
    'USDT_GNT',
    'USDT_BCH',
    'USDT_ZRX',
    'USDT_EOS',
    'USDT_SNT',
    'USDT_KNC',
    'USDT_BAT',
    'USDT_LOOM',
    'USDT_QTUM',
    'USDT_BNT',
    'USDT_MANA'
];

poloniex.subscribe('ticker');
validPairs.forEach((pair) => poloniex.subscribe(pair));

sio.on('connection', function (socket) {
    console.log("user connected");
});

sio.on('disconnect', function (socket) {
    console.log("disconnected");
});

sio.on('error', function (error) {
    console.log(error);
});

poloniex.on('message', (channelName, data, seq) => {
    sio.emit("m", channelName, data, seq);
});

poloniex.on('open', () => {
    console.log(`Poloniex WebSocket connection open`);
});

poloniex.on('close', (reason, details) => {
    console.log(`Poloniex WebSocket connection disconnected`);
    console.log(reason);
    console.log(details);
});

poloniex.on('error', (error) => {
    console.log('An error has occured');
    console.log(error);
});

poloniex.openWebSocket({version: 2});

server.listen(port);