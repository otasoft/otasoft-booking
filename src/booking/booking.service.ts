import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetBookingDto } from './dto/get-booking.dto';
import { GetBookingQuery } from './queries/impl';
import { BookingEntity } from './repositories/booking.entity';

@Injectable()
export class BookingService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async getBookingById(getBookingDto: GetBookingDto): Promise<BookingEntity> {
    return this.queryBus.execute(
      new GetBookingQuery(getBookingDto),
    );
  }
}
