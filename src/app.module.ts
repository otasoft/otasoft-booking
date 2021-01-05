import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module'
import { BookingModule } from './booking/booking.module';
import { HealthModule } from './health/health.module';

@Module({
    imports: [ConfigModule.forRoot(), DbModule, BookingModule, HealthModule],
})
export class AppModule { }
