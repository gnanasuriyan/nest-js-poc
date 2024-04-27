import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MiddlewaresModule } from './middlewares/middlewares.module';

@Module({
  imports: [CatsModule, MiddlewaresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
