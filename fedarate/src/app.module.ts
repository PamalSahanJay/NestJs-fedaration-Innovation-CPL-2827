import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { JobModule } from './job/job.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductModule, JobModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
