import { Controller } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppController {
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
