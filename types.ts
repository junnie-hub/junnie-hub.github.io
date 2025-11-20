export interface Dish {
  id: number;
  name: string;
  category: 'Appetizer' | 'Main Course' | 'Dessert' | 'Beverage' | 'accompagnement' | 'hot drink' | 'Breakfast';
  description: string;
  price: number;
  imageUrl: string;
  allergens: string[];
  available: boolean;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  location: 'interior' | 'private_room';
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface CartItem extends Dish {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string;
  type: 'delivery' | 'takeaway';
  status: 'preparing' | 'on_the_way' | 'delivered' | 'ready_for_pickup';
  deliveryEta: number; // in minutes
  createdAt: number; // timestamp for tracking simulation
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  imageUrl?: string;
}