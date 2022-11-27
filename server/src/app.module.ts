import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { ApiModule } from './controllers/api/api.module';

// Global app module, we need to import global modules here
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ScheduleModule.forRoot(), ApiModule],
})
export class AppModule {
}
