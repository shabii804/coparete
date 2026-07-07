import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// POST /api/quote-requests — submit a quote request
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const quote = await db.quoteRequest.create({
      data: {
        service: body.service || '',
        budget: body.budget || '',
        timeline: body.timeline || '',
        name: body.name || '',
        email: body.email || '',
        company: body.company || null,
        phone: body.phone || null,
        details: body.details || null,
        file: body.file || null,
      },
    });
    return NextResponse.json(quote, { status: 201 });
  } catch (error) {
    console.error('Failed to save quote request:', error);
    return NextResponse.json({ error: 'Failed to save quote request' }, { status: 500 });
  }
}
