import type { Meta } from "./Common.interface";

export interface ResponseBrand {
  data: Brand[];
  meta: Meta;
}

export interface Brand {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: null;
  products: Product[];
  name_image: string;
  localizations: any[];
  description: string;
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
  short_description: string;
}

interface TechnicalSheet {
  type: string;
  format?: string;
  children: TechnicalSheetChild[];
  level?: number;
}

interface TechnicalSheetChild {
  type: string;
  children?: ChildChild[];
  text?: string;
  bold?: boolean;
  underline?: boolean;
}

interface ChildChild {
  type: string;
  text: string;
}
