import { PaymentMethods } from './../enums/payment-methods.enum';
import { Invoice } from './invoice';
import { OrderItem } from './order-item';
import { User } from './user';
export class Payment {
  id: number;
  client: User;
  date: Date;
  amount: number;
  payment_method: PaymentMethods;
  invoiceId: number;
}
