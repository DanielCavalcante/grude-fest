import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'ParaibaJS no Grude Fest!';
  }
}
