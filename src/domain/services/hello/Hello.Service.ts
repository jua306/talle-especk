/* eslint-disable prettier/prettier */
import {Injectable} from '@nestjs/common';
import { IHelloService } from 'src/aplication/ports/services/helloService/IHelloServie.interface';
import { IHelloUseCase } from 'src/aplication/ports/useCases/IHelloUseCase.interface';

@Injectable()
export class HelloService implements IHelloService{
  /**
   *
   */
  constructor(private useCase:IHelloUseCase) {
   
    
  }
  getHello(): string {
    return this.useCase.hello( );
  }
}