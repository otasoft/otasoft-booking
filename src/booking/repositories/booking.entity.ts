import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BookingEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_id: number;

  @Column()
  date: Date;
}
