import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { BookingService } from './booking.service';
import { MessagePattern } from '@nestjs/microservices';
import { BookingEntity } from './repositories/booking.entity';
import { GetBookingDto } from './dto/get-booking.dto';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { DeleteBookingDto } from './dto/delete-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @MessagePattern({ role: 'booking', cmd: 'get' })
  async getBookingById(
    @Body() getBookingDto: GetBookingDto,
  ): Promise<BookingEntity> {
    return this.bookingService.getBookingById(getBookingDto);
  }

  @UsePipes(new ValidationPipe())
  @MessagePattern({ role: 'booking', cmd: 'create' })
  async createBooking(
    @Body() createBookingDto: CreateBookingDto,
  ): Promise<BookingEntity> {
    return this.bookingService.createBooking(createBookingDto);
  }

  @MessagePattern({ role: 'booking', cmd: 'update' })
  async updateBooking(
    @Body() getBookingDto: UpdateBookingDto,
  ): Promise<BookingEntity> {
    return this.bookingService.updateBooking(getBookingDto);
  }

  @MessagePattern({ role: 'booking', cmd: 'remove' })
  async deleteBookingById(
    @Body() deleteBookingDto: DeleteBookingDto,
  ): Promise<boolean> {
    return this.bookingService.deleteBookingById(deleteBookingDto);
  }
}
