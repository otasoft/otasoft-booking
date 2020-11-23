import { EntityRepository, Repository } from 'typeorm';
import { BookingEntity } from './booking.entity';

@EntityRepository(BookingEntity)
export class BookingRepository extends Repository<BookingEntity> {}
