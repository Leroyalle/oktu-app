import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const skip = req.nextUrl.searchParams.get('skip');
  const take = req.nextUrl.searchParams.get('take');
  const data = await prisma.image.findMany({
    skip: Number(skip),
    take: Number(take),
    where: {
      imageItem: {
        some: {},
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      imageItem: true,
    },
  });

  const images = data.filter((image) => image.imageItem.length <= 2);
  const totalCount = images.length;

  return NextResponse.json({ images, totalCount });
}