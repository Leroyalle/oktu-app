import { Link, MainSliderData, Post, Image, Quote, ImageItem, Prisma } from '@prisma/client';

export type MainSliderDataWithRelations = MainSliderData & {
  link: Link | null;
};

export type QuoteWithRelations = Quote & {
  link: Link | null;
};

export interface PostDTO {
  posts: Post[];
  totalCount: number;
}
export type ImageWithRelations = {
  images: (Image & { imageItem: ImageItem[] })[];
  totalCount: number;
};
export type ImageWithItems = Image & { imageItem: ImageItem[] };
