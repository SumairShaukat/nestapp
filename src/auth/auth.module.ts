import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthControllerr } from './auth.controller';
@Module({
  controllers: [AuthControllerr],
  providers: [AuthService],
})
export class AuthModule {}
