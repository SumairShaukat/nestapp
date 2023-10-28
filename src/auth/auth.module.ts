import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthControllerr } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports : [PrismaModule],
  controllers: [AuthControllerr],
  providers: [AuthService],
})
export class AuthModule {}
