import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const skip = req.nextUrl.searchParams.get('skip') || 0;
  const take = req.nextUrl.searchParams.get('take') || 12;
  try {
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
  } catch (error) {
    console.log('Error [GET_IMAGES]', error);
  }
}
