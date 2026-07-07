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

// PUT /api/[type]/[id] — update
export async function PUT(request: NextRequest, { params }: { params: Promise<{ type: string; id: string }> }) {
  const { type, id } = await params;
  const model = MODEL_MAP[type as keyof typeof MODEL_MAP];
  if (!model) return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });

  try {
    const body = await request.json();
    const item = await model.update({ where: { id }, data: body });
    return NextResponse.json(item);
  } catch (error) {
    console.error(`Failed to update ${type}:`, error);
    return NextResponse.json({ error: `Failed to update ${type}` }, { status: 500 });
  }
}

// DELETE /api/[type]/[id] — delete
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ type: string; id: string }> }) {
  const { type, id } = await params;
  const model = MODEL_MAP[type as keyof typeof MODEL_MAP];
  if (!model) return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });

  try {
    await model.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Failed to delete ${type}:`, error);
    return NextResponse.json({ error: `Failed to delete ${type}` }, { status: 500 });
  }
}
