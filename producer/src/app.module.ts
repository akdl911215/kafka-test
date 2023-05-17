import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'name_jung',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'client_id_jung',
            brokers: ['localhost:29092'],
          },
        },
      },
    ]),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
