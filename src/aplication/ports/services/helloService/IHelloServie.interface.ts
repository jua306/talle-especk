/* eslint-disable prettier/prettier */
import {Injectable} from '@nestjs/common' ;

@Injectable()
export abstract class IHelloService{
    abstract getHello();
}