import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module'
import { BookingModule } from './booking/booking.module';

@Module({
    imports: [ConfigModule.forRoot(), DbModule, BookingModule],
})
export class AppModule { }
