import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// POST /api/contact-messages — submit a contact message
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = await db.contactMessage.create({
      data: {
        name: body.name || '',
        email: body.email || '',
        company: body.company || null,
        phone: body.phone || null,
        message: body.message || '',
      },
    });
    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    console.error('Failed to save contact message:', error);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}
