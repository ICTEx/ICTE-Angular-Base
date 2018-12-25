const MdConstant = require('../lib/transports/api/MdConstant').MdConstant;
const { Kafka, logLevel } = require('kafkajs')

// Create the client with the broker list
const kafka = new Kafka({
   clientId: 'icte-client-test',
   brokers: ['186.74.247.202:9092'],
   connectionTimeout: 3000,
   retry: {
      initialRetryTime: 100,
      retries: 8
   },
   logLevel: logLevel.INFO
});

const consumer = kafka.consumer({ groupId: 'icte-group' });
const topic = MdConstant.SystemMsgTopic; //TODO: Change to listen to another topic

const run = async () => {
   await consumer.connect()
   await consumer.subscribe({ topic })
   await consumer.run({
      eachBatch: async ({ batch }) => {
         console.log(batch)
      },
      eachMessage: async ({ topic, partition, message }) => {
         const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
         console.log(`- ${prefix} ${message.key}#${message.value}`)
      },
   })
};

run().catch(e => console.error(`[example/consumer] ${e.message}`, e))

const errorTypes = ['unhandledRejection', 'uncaughtException'];
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

errorTypes.map(type => {
   process.on(type, async e => {
      try {
         console.log(`process.on ${type}`);
         console.error(e);
         await consumer.disconnect();
         process.exit(0);
      } catch (_) {
         process.exit(1);
      }
   });
});

signalTraps.map(type => {
   process.once(type, async () => {
      try {
         await consumer.disconnect();
      } finally {
         process.kill(process.pid, type);
      }
   });
});