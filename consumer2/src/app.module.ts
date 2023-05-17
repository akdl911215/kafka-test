import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'any_name_i_want_2',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'any_client_id_i_want_2',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'an_unique_string_id_2',
          },
        },
      },
    ]),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
