import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { JobModule } from './job/job.module';

@Module({
  imports: [ProductModule, JobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
