export default interface IOrder {
  id: number;
  name: string;
  description: string;
  price: number;
  amount: number;
  ingredients: string[];
  userDetails: Object,
  items: number
}
