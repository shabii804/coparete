import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// POST /api/applications — submit a job application
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const application = await db.jobApplication.create({
      data: {
        jobId: body.jobId,
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        resume: body.resume || null,
        coverLetter: body.coverLetter || null,
      },
    });
    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error('Failed to submit application:', error);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}
