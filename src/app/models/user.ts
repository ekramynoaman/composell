import { Invoice } from './invoice';
import { Payment } from './payment';
import { Order } from './order';
import { Profile } from './profile';

export class User {
  id: number;
  username: string;
  password: string;
  profileId: number;
  isAdmin: boolean;
  orders: Order[];
  payment: Payment[];
  invoices: Invoice[];
}

