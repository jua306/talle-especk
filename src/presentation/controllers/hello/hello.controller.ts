/* eslint-disable prettier/prettier */
import { Controller, Get} from '@nestjs/common';
import { IHelloService } from 'src/aplication/ports/services/helloService/IHelloServie.interface';

@Controller()
export class HelloController{
   
    constructor(private servicies:IHelloService) {
      
        
    }

    @Get('Hello')
      async getHello(){
        return this.servicies.getHello();


    }
}