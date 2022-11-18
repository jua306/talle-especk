/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './presentation/controllers/app.controller';
import {HelloModule} from 'src/infraestrucuture/ioc/hello.module'

@Module({
  imports: [HelloModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {} 