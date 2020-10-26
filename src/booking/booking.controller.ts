import { Controller } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { BookingService } from './booking.service';
import { MessagePattern } from '@nestjs/microservices';
import { BookingEntity } from './repositories/booking.entity';
import { GetBookingDto } from './dto/get-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) { }

  @MessagePattern({ role: 'booking', cmd: 'get' })
  async getBookingById(
    @Body() getBookingDto: GetBookingDto,
  ): Promise<BookingEntity> {
    return this.bookingService.getBookingById(getBookingDto);
  }
}
