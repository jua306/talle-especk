/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { IHelloService} from 'src/aplication/ports/services/helloService/IHelloServie.interface';
import { AppController } from 'src/presentation/controllers/app.controller';

import { HelloService } from 'src/domain/services/hello/Hello.Service';
import { HelloController } from 'src/presentation/controllers/hello/hello.controller';
import { IHelloUseCase } from 'src/aplication/ports/useCases/IHelloUseCase.interface';
import { HelloUseCase } from 'src/aplication/useCases/HelloUseCase/HelloUseCase';

@Module({
  imports: [HelloController],
  controllers: [AppController],
  providers: [
    {provide:IHelloUseCase,useClass:HelloUseCase},
    {provide:IHelloService, useClass:HelloService}],
})
export class HelloModule {} 