import { NextResponse } from 'next/server';
import getClientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    const client = await getClientPromise();
    const db = client.db();

    await db.collection('enquiries').insertOne({
      name,
      email,
      phone: phone ?? '',
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to save enquiry:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
