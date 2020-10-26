import { GetBookingDto } from '../../dto/get-booking.dto';

export class GetBookingQuery {
  constructor(public readonly getBookingDto: GetBookingDto) {}
}
