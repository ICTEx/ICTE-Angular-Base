/*
 By: Marco A. Barragan @ ICTE
  */
const MdConstant = require('../lib/transports/api/MdConstant');
const {Kafka, CompressionTypes, logLevel} = require('kafkajs');
const WebSocket = require('ws');
const mdc = MdConstant.MdConstant;

const wss = new WebSocket.Server({
   port: 10750
});

const kafka = new Kafka({
   clientId: createUUID(),
   brokers: ['186.74.247.202:9092'],
   connectionTimeout: 3000,
   retry: {
      initialRetryTime: 100,
      retries: 5
   },
   logLevel: logLevel.ERROR
});

var log4js = require('log4js');

log4js.configure({
   appenders: {everything: {type: 'file', filename: 'kafka-server-consumer.log'}},
   categories: {default: {appenders: ['everything'], level: 'trace'}}
});

var logger = log4js.getLogger('everything');
logger.level = 'debug';


const consumer = kafka.consumer({groupId: 'icte-group'});

var _connected = false;

const run = async () => {
   let topic = mdc.SystemMsgTopic; //TODO: Change in order to use another topic
   await consumer.connect();
   await consumer.subscribe({topic, fromBeginning: false});
   await consumer.run({
      autoCommitInterval: 5000,
      autoCommitThreshold: 100,
      eachBatch: async ({batch, resolveOffset, heartbeat, isRunning}) => {
         for (let message of batch.messages) {
            await resolveOffset(message.offset);
            await heartbeat();
         }
      },
      eachMessage: async ({topic, partition, message}) => {
         wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
               client.send(message.value);
            }
         });
         // logger.debug(`- ${prefix} ${message.key}#${message.value}`);
      },
   });
};

wss.on('connection', function connection(ws, req) {
   const ip = req.connection.remoteAddress;
   console.log('connected client:', ip);
});

run().catch(e => logger.error(`[icte-consumer] ${e.message}`, e));

const errorTypes = ['unhandledRejection', 'uncaughtException'];
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

errorTypes.map(type => {
   process.on(type, async (e) => {
      try {
         logger.error(type, e);
         await consumer.disconnect();
         process.exit(0);
      } catch (_) {
         process.exit(1);
      }
   })
});

signalTraps.map((type) => {
   process.once(type, async () => {
      try {
         await consumer.disconnect();
      } finally {
         process.kill(process.pid, type);
      }
   })
});

function createUUID() {
   var s = [];
   var hexDigits = "0123456789abcdef";
   for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
   }
   s[14] = "4";
   s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
   s[8] = s[13] = s[18] = s[23] = "-";

   var uuid = s.join("");
   return uuid;
}