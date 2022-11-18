/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IHelloUseCase } from 'src/aplication/ports/useCases/IHelloUseCase.interface';

@Injectable ()
export class HelloUseCase implements IHelloUseCase {
    hello(): string {
        return 'Hello World!' ;
    }


}