import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/admin/applications — fetch all job applications
export async function GET() {
  try {
    const applications = await db.jobApplication.findMany({
      orderBy: { createdAt: 'desc' },
      include: { job: { select: { title: true, department: true } } },
    });
    return NextResponse.json(applications);
  } catch (error) {
    console.error('Failed to fetch applications:', error);
    return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
  }
}
