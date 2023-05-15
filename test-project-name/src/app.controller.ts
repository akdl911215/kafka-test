import { Controller, Get, Inject } from '@nestjs/common';
import {
  ClientKafka,
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('KAFKA') private readonly client: ClientKafka,
  ) {}

  // @Get('/')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('/')
  getHello(): string {
    return 'Hello Jung';
  }

  @Get('kafka-test')
  testKafka() {
    return this.client.emit('medium.rocks', { foo: 'bar' });
  }

  @MessagePattern('jung')
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    const response = originalMessage.value;

    console.log('originalMessage.value : ', originalMessage.value);
    console.log('message : ', message);

    console.log('context.getTopic() : ', context.getTopic());
    console.log('context.getArgs() : ', context.getArgs());
    console.log('context.getPartition() : ', context.getPartition());
  }
}
