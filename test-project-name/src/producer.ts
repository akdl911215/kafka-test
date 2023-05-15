import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
});

const producer = kafka.producer();

const run = async () => {
  // Producing
  await producer.connect();
  await producer.send({
    topic: 'jung',
    messages: [{ value: `happy new year` }],
  });
};

run().catch(console.error);
