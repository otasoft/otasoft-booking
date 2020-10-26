import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetBookingQuery } from '../impl';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingRepository } from 'src/booking/repositories/booking.repository';

@QueryHandler(GetBookingQuery)
export class GetBookingHandler
  implements IQueryHandler<GetBookingQuery> {
  constructor(
    @InjectRepository(BookingRepository)
    private readonly customerRepository: BookingRepository,
  ) {}

  async execute(query: GetBookingQuery) {
    const id = query.getBookingDto;
    const booking = await this.customerRepository.findOne({ where: { id } });

    if (!booking) {
      throw new RpcException('Booking does not exist');
    }

    return booking;
  }
}
