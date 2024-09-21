import { Link, MainSliderData } from '@prisma/client';

export type MainSliderDataWithRelations = MainSliderData & {
  link: Link | null;
};
