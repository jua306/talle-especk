/* eslint-disable prettier/prettier */
import {Injectable} from '@nestjs/common';

@Injectable()
export abstract class IHelloUseCase {
    abstract hello():string;
}