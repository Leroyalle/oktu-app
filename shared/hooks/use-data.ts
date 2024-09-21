import { MainSliderDataWithRelations } from '@/@types/main-slider-data';
import { prisma } from '@/prisma/prisma-client';
import { Department, Quote, TitlesSection } from '@prisma/client';

interface ReturnProps {
  mainSliderData: MainSliderDataWithRelations[];
  departments: Department[];
  quote: Quote | null;
  titles: TitlesSection[];
}

export const useData = async (): Promise<ReturnProps> => {
  const mainSliderData = await prisma.mainSliderData.findMany({
    include: {
      link: true,
    },
  });
  const departments = await prisma.department.findMany();
  const quote = await prisma.quote.findFirst();
  const titles = await prisma.titlesSection.findMany();

  return {
    mainSliderData,
    departments,
    quote,
    titles,
  };
};
