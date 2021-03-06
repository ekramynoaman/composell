import { Order } from './order';
import { Payment } from './payment';
import { User } from './user';
export class Invoice {
  id: number;
  number: number;
  invoice_total: number;
  invoice_date: Date;
  due: Date;
  payment_date: Date;
  client: User;
  payment: Payment;
  order: Order;
}
