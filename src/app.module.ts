import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule],
})
export class AppModule {}
