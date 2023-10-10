export type Category = {
  id: number;
  path: string;
  name: string;
  icon: any;
}[];

export type Product = {
  id: string;
  title: string;
  image: any;
  price: number;
  rating: number;
  category: string[];
  offer: string;
};

export type footerItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type QuickLinks = {
  id: string;
  path: string;
  name: string;
};
