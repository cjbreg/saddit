import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('AUTHORIZATION_SERVICE')
    private readonly authorizationService: ClientProxy,
  ) {}
}
