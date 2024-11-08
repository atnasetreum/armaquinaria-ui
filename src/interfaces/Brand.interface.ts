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
  image: Image;
  localizations: any[];
  description: string;
}

interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: null;
}

interface Formats {
  thumbnail: Large;
  small?: Large;
  medium?: Large;
  large?: Large;
}

interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
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
