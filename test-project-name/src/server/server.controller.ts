import { BadRequestException, Controller } from '@nestjs/common';
import { AppService } from '../app.service';
import { MessagePattern } from '@nestjs/microservices';

function OgmaSkip() {}

@Controller()
export class KafkaServerController {
  constructor(private readonly service: AppService) {}

  @MessagePattern('say.hello')
  sayHello() {
    return this.service.getHello();
  }

  // @UseFilters(ExceptionFilter)
  @MessagePattern('say.error')
  sayError() {
    throw new BadRequestException('Borked');
  }

  // @OgmaSkip()
  @MessagePattern('say.skip')
  saySkip() {
    return this.service.getHello();
  }
}
