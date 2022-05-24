import { Body, Controller, Get, Post, Request, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  async signin(@Request() req, @Response() res, @Body() dto: AuthDto) {
    return this.authService.signin(dto, req, res);
  }

  @Get('signout')
  signout(@Request() req, @Response() res) {
    return this.authService.signout(req, res);
  }
}
