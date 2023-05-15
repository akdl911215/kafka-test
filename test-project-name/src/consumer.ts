// import { Kafka } from 'kafkajs';
//
// const kafka = new Kafka({
//   clientId: 'my-app',
//   brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
// });
//
// const producer = kafka.producer();
// const consumer = kafka.consumer({ groupId: 'jung-group-0' });
//
// const run = async () => {
//   // Consumer
//   await producer.connect();
//
//   await consumer.subscribe({ topic: 'jung', fromBeginning: true });
//   await consumer.run({
//     eachMessage: async ({ topic, partition, message }) => {
//       console.log({
//         partition,
//         topic,
//         offset: message.offset,
//         value: message.value.toString(),
//       });
//     },
//   });
// };
//
// run().catch(console.error);
