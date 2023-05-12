// import { Controller, Inject } from '@nestjs/common';
// import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
//
// @Controller()
// export class HeroesController {
//   constructor(@Inject('HERO_SERVICE') private readonly client: ClientKafka) {}
//
//   async onModuleInit() {
//     this.client.subscribeToResponseOf('hero.kill.dragon');
//
//     await this.client.connect();
//   }
//
//   @MessagePattern('hero.kill.dragon')
//   killDragon(@Payload() message: KillDragonMessage): any {
//     const dragonId = message.dragonId;
//     const items = [
//       { id: 1, name: 'Mythical Sword' },
//       { id: 2, name: 'Key to Dungeon' },
//     ];
//     return items;
//   }
// }
