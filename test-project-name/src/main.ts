import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Partitioners, Kafka } from 'kafkajs';

async function bootstrap() {
  // const kafka = new Kafka({
  //   brokers: ['localhost:9092'],
  //   clientId: 'my-app',
  // });
  // kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });

  // 마이크로서비스 추가
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },

        consumer: {
          groupId: 'jung-group-0',
        },
      },
    },
  );

  // HTTP(S) 서버 실행
  await app.listen();
}
bootstrap();
