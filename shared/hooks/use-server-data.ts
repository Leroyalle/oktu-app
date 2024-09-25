import { prisma } from '@/prisma/prisma-client';
import { MainSliderDataWithRelations, QuoteWithRelations } from '@/@types/dataDTO';
import { Department, TitlesSection } from '@prisma/client';

interface ReturnProps {
  mainSliderData: MainSliderDataWithRelations[];
  departments: Department[];
  quote: QuoteWithRelations | null;
  titles: TitlesSection[];
}

export const useServerData = async (): Promise<ReturnProps> => {
  const mainSliderData = await prisma.mainSliderData.findMany({
    include: {
      link: true,
    },
  });
  const departments = await prisma.department.findMany();
  const quote = await prisma.quote.findFirst({
    include: {
      link: true,
    },
  });
  const titles = await prisma.titlesSection.findMany();

  return {
    mainSliderData,
    departments,
    quote,
    titles,
  };
};
