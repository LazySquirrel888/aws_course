import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    description: "Tour ID: 124598",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 650,
    title: "Relaxing Nature Tour",
  },
  {
    description: "Tour ID: 234876",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 450,
    title: "Leisure and Serenity",
  },
  {
    description: "Tour ID: 854756",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 280,
    title: "Scenic Beauty Expedition",
  },
  {
    description: "Tour ID: 687634",
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 575,
    title: "Relax and Recharge Trip",
  },
  {
    description: "Tour ID: 937465",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 760,
    title: "Travel With Children Adventure",
  },
  {
    description: "Tour ID: 648239",
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 380,
    title: "Peaceful Journey",
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      description: "Short Product Description1",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 24,
      title: "ProductOne",
    },
    count: 2,
  },
  {
    product: {
      description: "Short Product Description7",
      id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      price: 15,
      title: "ProductName",
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
