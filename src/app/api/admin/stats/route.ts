import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/admin/stats — dashboard statistics
export async function GET() {
  try {
    const [jobs, applications, quotes, messages] = await Promise.all([
      db.job.count({ where: { active: true } }),
      db.jobApplication.count(),
      db.quoteRequest.count(),
      db.contactMessage.count(),
    ]);

    const recentApplications = await db.jobApplication.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: { job: { select: { title: true } } },
    });

    const recentQuotes = await db.quoteRequest.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    });

    const recentMessages = await db.contactMessage.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({
      counts: { jobs, applications, quotes, messages },
      recentApplications,
      recentQuotes,
      recentMessages,
    });
  } catch (error) {
    console.error('Failed to fetch stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
