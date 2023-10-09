export type Category = {
  id: number;
  path: string;
  name: string;
  icon: any;
}[];

export type Product = {
  id: number;
  title: string;
  image: any;
  price: number;
  rating: number;
  category: string[];
  offer: string;
};

export type footerItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type QuickLinks = {
  id: number;
  path: string;
  name: string;
};
