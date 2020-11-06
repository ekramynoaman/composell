import { OrderItem } from './order-item';
import { CartItem } from './cart-item';
import { Category } from './category';

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  publishedIn: Date;
  addedToCart: boolean;
  quantity: number;
  cartQuantity: number;
  image: string;
  category: Category;
  cartItem: CartItem;
  order_items: OrderItem[];
}
