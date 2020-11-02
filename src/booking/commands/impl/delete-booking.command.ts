import { DeleteBookingDto } from '../../dto/delete-booking.dto';

export class DeleteBookingCommand {
  constructor(public readonly deleteBookingDto: DeleteBookingDto) {}
}
