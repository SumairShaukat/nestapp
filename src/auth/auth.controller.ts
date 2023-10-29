import { AuthService } from './auth.service';
import { Controller, Post , Body} from "@nestjs/common";
import { AuthDto } from './dto';
@Controller("auth")
export class AuthControllerr {
    constructor (private authservice: AuthService)
{}
// @Post('signin')
// signIn(dto: AuthDto)  {
//     return  this.authservice.signIn()
// }

@Post('signUp') 
signUp(@Body() dto: AuthDto) {
    return this.authservice.signup(dto)
}
}
