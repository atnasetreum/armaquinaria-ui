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
  image: Image;
}

interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
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
  thumbnail: Thumbnail;
}

interface Thumbnail {
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
