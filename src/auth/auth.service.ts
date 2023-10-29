import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { AuthDto } from './dto';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto): Promise<User> {
    const password = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
        data: {
            email: dto.email,
            password
        }
    });
   
    return user;
  }

  signIn() {
    return { msg: 'Singin working' };
  }
}
