import { Invoice } from './invoice';
import { OrderItem } from './order-item';
import { OrderStatus } from './../enums/order-status.enum';
import { User } from './user';

export class Order {
  id: number;
  order_date: Date;
  status: OrderStatus;
  shipmentDate: Date;
  shippedTo: string;
  comments: string;
  user: User;
  order_items: OrderItem;
  invoiceId: number;
}
