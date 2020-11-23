import { Transport } from '@nestjs/microservices';

export const bookingMicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
        urls: [
            `amqp://${process.env.RABBITMQ_DEFAULT_USER}:${process.env.RABBITMQ_DEFAULT_PASS}@localhost:${process.env.RABBITMQ_FIRST_HOST_PORT}/${process.env.RABBITMQ_DEFAULT_VHOST}`,
        ],
        queue: 'booking_queue',
        queueOptions: {
            durable: false,
        },
    },
};
