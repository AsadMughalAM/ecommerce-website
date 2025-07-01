export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: Category;
  image: string;
}

export type Category =
  | 'hoodies'
  | 'sweatpants'
  | 'jackets'
  | 'tracksuits'
  | 'sweatshirts'
  | 'footwear'
  | 'vests'
  | 't-shirts'
  | 'pants'
  | 'shorts'
  | 'swimsuit'
  | 'caps'
  | 'socks';