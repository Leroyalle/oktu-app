import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const skip = req.nextUrl.searchParams.get('skip');
  const take = req.nextUrl.searchParams.get('take');
  const tag = req.nextUrl.searchParams.get('tag');
  const whereCondition = tag === null ? {} : { tagId: Number(tag) };

  const [posts, totalCount] = await Promise.all([
    prisma.post.findMany({
      skip: Number(skip),
      take: Number(take),
      where: whereCondition,
      orderBy: {
        createdAt: 'desc',
      },
    }),
    prisma.post.count({ where: whereCondition }),
  ]);

  const totalPages = Math.ceil(totalCount / Number(take));
  return NextResponse.json({ posts, totalPages });
}
