import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';
import { BookingRepository } from 'src/booking/repositories/booking.repository';
import { DeleteBookingCommand } from '../impl/delete-booking.command';

@CommandHandler(DeleteBookingCommand)
export class DeleteBookingHandler
  implements ICommandHandler<DeleteBookingCommand> {
  constructor(
    @InjectRepository(BookingRepository)
    private readonly bookingRepository: BookingRepository,
  ) {}

  async execute(command: DeleteBookingCommand) {
    const id = command.deleteBookingDto;

    try {
      const customer = await this.bookingRepository.findOne(id);
      await this.bookingRepository.remove(customer);
    } catch (error) {
      throw new RpcException(
        `Problem occured when removing a booking: ${error}`,
      );
    }

    return true;
  }
}
