import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateBookingCommand } from './commands/impl';
import { DeleteBookingCommand } from './commands/impl/delete-booking.command';
import { UpdateBookingCommand } from './commands/impl/update-booking.command';
import { CreateBookingDto } from './dto/create-booking.dto';
import { DeleteBookingDto } from './dto/delete-booking.dto';
import { GetBookingDto } from './dto/get-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { GetBookingQuery } from './queries/impl';
import { BookingEntity } from './repositories/booking.entity';

@Injectable()
export class BookingService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async getBookingById(getBookingDto: GetBookingDto): Promise<BookingEntity> {
    return this.queryBus.execute(new GetBookingQuery(getBookingDto));
  }

  async createBooking(
    createBookingDto: CreateBookingDto,
  ): Promise<BookingEntity> {
    console.log({ createBookingDto });
    return this.commandBus.execute(new CreateBookingCommand(createBookingDto));
  }

  async updateBooking(
    updateBookingDto: UpdateBookingDto,
  ): Promise<BookingEntity> {
    return this.commandBus.execute(new UpdateBookingCommand(updateBookingDto));
  }

  async deleteBookingById(
    deleteBookingDto: DeleteBookingDto,
  ): Promise<boolean> {
    return this.commandBus.execute(new DeleteBookingCommand(deleteBookingDto));
  }
}
