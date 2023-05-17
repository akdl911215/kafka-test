import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('name_jung') private readonly client: ClientKafka,
  ) {}

  // async onModuleInit() {
  //   ['medium.rock'].forEach((key: string) =>
  //     this.client.subscribeToResponseOf(`${key}`),
  //   );
  //
  //   await this.client.connect();
  // }
  //
  // async onModuleDestroy() {
  //   await this.client.close();
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('kafka-test')
  testKafka() {
    return this.client.emit('medium.rock', {
      foo: 'bar',
      data: new Date().toString(),
      str: 'kafka-test',
    });
  }

  // @Get('kafka-test-with-response')
  // testKafkaWithResponse() {
  //   return this.client.send('medium.rock', {
  //     foo: 'bar',
  //     data: new Date().toString(),
  //     str: 'kafka-test-with-response',
  //   });
  // }
}
