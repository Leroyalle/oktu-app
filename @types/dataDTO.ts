import {
  Link,
  MainSliderData,
  Post,
  Image,
  Quote,
  ImageItem,
  PostItem,
  Department,
  DepartmentItem,
  PostImageCarousel,
} from '@prisma/client';

export type MainSliderDataWithRelations = MainSliderData & {
  link: Link | null;
};
export type QuoteWithRelations = Quote & {
  link: Link | null;
};
export interface PostDTO {
  posts: Post[];
  totalPages: number;
}
export type ImageWithRelations = {
  images: (Image & { imageItem: ImageItem[] })[];
  totalCount: number;
};
export type ImageWithItems = Image & { imageItem: ImageItem[] };
export type PostWithItem = Post & {
  postItem: (PostItem & { postImageCarousel: PostImageCarousel[] }) | null;
};
export type DepartmentWithItem = Department & {
  departmentItem: DepartmentItem | null;
};
