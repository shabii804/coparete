import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/jobs — fetch all active jobs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const department = searchParams.get('department');
    const location = searchParams.get('location');
    const search = searchParams.get('search');

    const where: any = { active: true };
    if (type && type !== 'All') where.type = type;
    if (department && department !== 'All') where.department = department;
    if (location && location !== 'All') where.location = location;
    if (search) {
      where.OR = [
        { title: { contains: search } },
        { description: { contains: search } },
        { department: { contains: search } },
      ];
    }

    const jobs = await db.job.findMany({
      where,
      orderBy: { postedAt: 'desc' },
    });

    return NextResponse.json(jobs);
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}

// POST /api/jobs — create a new job (admin)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const job = await db.job.create({
      data: {
        title: body.title,
        type: body.type,
        department: body.department,
        location: body.location,
        description: body.description,
        requirements: JSON.stringify(body.requirements || []),
        salary: body.salary || null,
        active: body.active !== false,
      },
    });
    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error('Failed to create job:', error);
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
  }
}
