import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobResolver } from './job.resolver';

@Module({
  providers: [JobService, JobResolver]
})
export class JobModule {}
