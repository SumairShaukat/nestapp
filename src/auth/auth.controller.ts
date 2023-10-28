import { AuthService } from './auth.service';
import { AuthModule } from './auth.module';
import { Controller, Post } from "@nestjs/common";

@Controller("auth")
export class AuthControllerr {
    constructor (private authservice: AuthService)
{}
@Post('signin')
signIn() {
    return  this.authservice.signIn()
}

@Post('signUp')
signUp(): string {
    return 'string'
}
}
