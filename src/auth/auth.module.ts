import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthControllerr } from './auth.controller';
@Module({
  imports: [AuthModule],
  controllers: [AuthControllerr],
  providers: [AuthService],
})
export class AuthModule {}
