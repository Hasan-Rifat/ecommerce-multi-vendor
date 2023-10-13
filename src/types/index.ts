export type Category = {
  id: number;
  path: string;
  name: string;
  icon: any;
}[];

export type CategoryItem = {
  category: string;
  path: string;
  subcategories?: Product[];
};

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

export type socialLinkIcon = {
  id: string;
  image: any;
  path: string;
};

export type review = {
  id: string;
  name: string;
  image: string;
  review: string;
  rating: string;
  date: string;
};

export type cartItem = {
  id: string;
  title: string;
  image: any;
  price: number;
};
