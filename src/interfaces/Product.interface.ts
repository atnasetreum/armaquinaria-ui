import type { Meta } from "./Common.interface";

export interface ResponseProduct {
  data: Product[];
  meta: Meta;
}

export interface Product {
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
  short_description: string;
  model: string;
  slug: string;
  brand: Brand;
  category: Brand;
  name_image: string[];
  localizations: any[];
}

interface Brand {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: null;
  short_description?: string;
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
