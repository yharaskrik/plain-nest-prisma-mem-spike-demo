import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

@Injectable()
export class AppService {
  constructor(private prismaService:PrismaService) {
  }

  getData(): { message: string } {
    this.prismaService;
    return { message: 'Welcome to api!' };
  }
}
