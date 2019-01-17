/*
 By: Marco A. Barragan @ ICTE
  */
const MdConstant = require('../lib/transports/api/MdConstant').MdConstant;
const {Kafka, CompressionTypes, logLevel} = require('kafkajs');
const WebSocket = require('ws');

const wss = new WebSocket.Server({
   port: 10550
});

var _connected = false;

var log4js = require('log4js');
log4js.configure({
   appenders: {everything: {type: 'file', filename: 'kafka-server-debug.log'}},
   categories: {default: {appenders: ['everything'], level: 'trace'}}
});
var logger = log4js.getLogger('everything');
logger.level = 'error';

const host = '186.74.247.202';

//TODO: Change in order to send messages to another topic
const topic = MdConstant.SystemMsgTopic;

const kafka = new Kafka({
   logLevel: logLevel.DEBUG,
   brokers: [`${host}:9092`],
   clientId: 'icte-producer',
   connectionTimeout: 3000,
   retry: {initialRetryTime: 100, retries: 8}
});

const producer = kafka.producer();

function getGmtDelta() {
   return getGmtZeroNow() - getGmtZeroMidnight();
}

function getGmtZeroNow() {
   let d = new Date();
   let z = d.getTime() + (d.getTimezoneOffset() * 60000);
   let zd = new Date(z);
   return zd.getTime();
}

function getGmtZeroMidnight() {
   let d = new Date();
   let z = d.getTime() + (d.getTimezoneOffset() * 60000);
   let zd = new Date(z);
   zd.setHours(0);
   zd.setMinutes(0);
   zd.setSeconds(0);
   zd.setMilliseconds(0);
   return zd.getTime();
}


const sendMessage = (messsage) => {

   var timestamp = getGmtDelta();

   const createMessage = (num, msg) => ({
      key: `key-${num}`,
      value: `${msg}`,
   })

   return producer
      .send({
         topic,
         messages: [createMessage(timestamp, messsage)]
      })
      //.then((e) => logger.debug(e))
      .catch((e) => logger.error(`[icte-producer] ${e.message}`, e));
};

wss.on('connection', function connection(ws, req) {
   const ip = req.connection.remoteAddress;
   console.log('connected client:', ip);

   ws.on('message', function incoming(message) {
      console.log(message);
      if(_connected){
         sendMessage(message);
      }
   });
});



const run = async () => {
   await producer.connect();
   _connected=true;
};

run().catch((e) => logger.error(e));

const errorTypes = ['unhandledRejection', 'uncaughtException'];
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

errorTypes.map((type) => {
   process.on(type, async (err) => {
      try {
         logger.error(`process.on ${type}`);
         logger.error(err)
         await producer.disconnect();
         process.exit(0);
      } catch (_) {
         process.exit(1);
      }
   })
});

signalTraps.map((type) => {
   process.once(type, async () => {
      try {
         await producer.disconnect();
         logger.error('Signal', type);
      } finally {
         process.kill(process.pid, type);
      }
   })
});

