import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';
import { BookingRepository } from 'src/booking/repositories/booking.repository';
import { UpdateBookingCommand } from '../impl/update-booking.command';

@CommandHandler(UpdateBookingCommand)
export class UpdateBookingHandler
  implements ICommandHandler<UpdateBookingCommand> {
  constructor(
    @InjectRepository(BookingRepository)
    private readonly bookingRepository: BookingRepository,
  ) {}

  async execute(command: UpdateBookingCommand) {
    const { id, updatedBooking } = command.updateBookingDto;
    const { customer_id } = updatedBooking;
    try {
      await this.bookingRepository.update({ id }, { customer_id });

      const booking = await this.bookingRepository.findOne(id);
      return booking;
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
