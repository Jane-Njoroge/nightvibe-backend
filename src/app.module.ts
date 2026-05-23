import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VenuesModule } from './venues/venues.module';
import { DjsModule } from './djs/djs.module';
import { EventsModule } from './events/events.module';
import {BookingsModule} from './bookings/bookings.module'
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    VenuesModule,
    DjsModule,
    EventsModule,
    BookingsModule,
    PaymentsModule,
  ],
})
export class AppModule {}