import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

const MODEL_MAP = {
  services: db.service,
  products: db.product,
  industries: db.industry,
  team: db.teamMember,
  blog: db.blogPost,
  testimonials: db.testimonial,
  devmodels: db.devModel,
  techstack: db.techItem,
} as const;

export type ContentType = keyof typeof MODEL_MAP;

// GET /api/[type]?active=true
export async function GET(request: NextRequest, { params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const model = MODEL_MAP[type as ContentType];
  if (!model) return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });

  try {
    const { searchParams } = new URL(request.url);
    const activeOnly = searchParams.get('active') !== 'false';

    const where: any = {};
    if (activeOnly) {
      if (type === 'blog') where.published = true;
      else where.active = true;
    }

    const items = await model.findMany({
      where,
      orderBy: { sortOrder: 'asc' },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error(`Failed to fetch ${type}:`, error);
    return NextResponse.json({ error: `Failed to fetch ${type}` }, { status: 500 });
  }
}

// POST /api/[type] — create
export async function POST(request: NextRequest, { params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const model = MODEL_MAP[type as ContentType];
  if (!model) return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });

  try {
    const body = await request.json();
    const item = await model.create({ data: body });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error(`Failed to create ${type}:`, error);
    return NextResponse.json({ error: `Failed to create ${type}` }, { status: 500 });
  }
}
