import { UpdateBookingDto } from 'src/booking/dto/update-booking.dto';

export class UpdateBookingCommand {
  constructor(public readonly updateBookingDto: UpdateBookingDto) {}
}
