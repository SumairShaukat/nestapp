import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from "@nestjs/common";


@Injectable({})
export class AuthService {
    constructor(private prismaservice: PrismaService){}


    signIn() {
        return {msg: 'Singin working'}
    }
}