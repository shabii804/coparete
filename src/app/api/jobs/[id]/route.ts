import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/jobs/[id] — fetch single job
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const job = await db.job.findUnique({ where: { id } });
    if (!job) return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    return NextResponse.json(job);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch job' }, { status: 500 });
  }
}

// PUT /api/jobs/[id] — update job (admin)
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const job = await db.job.update({
      where: { id },
      data: {
        ...(body.title && { title: body.title }),
        ...(body.type && { type: body.type }),
        ...(body.department && { department: body.department }),
        ...(body.location && { location: body.location }),
        ...(body.description && { description: body.description }),
        ...(body.requirements && { requirements: JSON.stringify(body.requirements) }),
        ...(body.salary !== undefined && { salary: body.salary }),
        ...(body.active !== undefined && { active: body.active }),
      },
    });
    return NextResponse.json(job);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update job' }, { status: 500 });
  }
}

// DELETE /api/jobs/[id] — delete job (admin)
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await db.job.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 });
  }
}
