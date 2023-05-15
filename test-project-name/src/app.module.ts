import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA', // injection token
        transport: Transport.KAFKA, //른 kafka 말고 다른 플랫폼 설정 가능
        options: {
          client: {
            clientId: 'jung-server-1',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'jung-group-0',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
