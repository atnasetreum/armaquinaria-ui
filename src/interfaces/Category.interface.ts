import type { Meta } from "./Common.interface";

export interface ResponseCategory {
  data: Category[];
  meta: Meta;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: null;
  short_description: string;
  products: Product[];
  localizations: any[];
  name_image: string;
}

interface Product {
  id: number;
  documentId: string;
  name: string;
  description: string;
  rent_1_day: string;
  rent_7_days: string;
  rent_15_days: string;
  rent_30_days: string;
  technical_sheet: TechnicalSheet[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: null;
  price: string;
  model: string;
  slug: string;
}

interface TechnicalSheet {
  type: string;
  children: TechnicalSheetChild[];
  level?: number;
  format?: string;
}

interface TechnicalSheetChild {
  type: string;
  text?: string;
  underline?: boolean;
  bold?: boolean;
  children?: ChildChild[];
}

interface ChildChild {
  type: string;
  text: string;
}
