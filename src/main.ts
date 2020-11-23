import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { bookingMicroserviceOptions } from './microservice-connection/microservice-connection';

const logger = new Logger('BookingMicroservice');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    bookingMicroserviceOptions,
  );

  await app.listen(() => {
    logger.log('Microservice is listening');
  });
}
bootstrap();
