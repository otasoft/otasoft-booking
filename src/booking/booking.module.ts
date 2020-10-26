import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { QueryHandlers } from './queries/handlers';
import { BookingEntity } from './repositories/booking.entity';
import { BookingRepository } from './repositories/booking.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookingRepository, BookingEntity]),
    CqrsModule,
  ],
  controllers: [BookingController],
  providers: [
    BookingService, 
    ConfigService,
    ...QueryHandlers,
  ],
})
export class BookingModule { }
