import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';
import { CreateBookingCommand } from '../impl';
import { BookingRepository } from '../../repositories/booking.repository';

@CommandHandler(CreateBookingCommand)
export class CreateBookingHandler
  implements ICommandHandler<CreateBookingCommand> {
  constructor(
    @InjectRepository(BookingRepository)
    private readonly bookingRepository: BookingRepository,
  ) {}

  async execute(command: CreateBookingCommand) {
    const { customer_id } = command.createBookingDto;
    const booking = await this.bookingRepository.create();

    booking.customer_id = customer_id;
    booking.date = new Date();

    try {
      await booking.save();
      return booking;
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
