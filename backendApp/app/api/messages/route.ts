import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 1. GET: Ambil daftar pesan berdasarkan channelId
// Contoh panggil: /api/messages?channelId=xxxx
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const channelId = searchParams.get('channelId');

    if (!channelId) {
      return NextResponse.json(
        { success: false, error: 'channelId wajib disertakan' },
        { status: 400 }
      );
    }

    const messages = await prisma.message.findMany({
      where: { channelId },
      include: {
        user: {
          select: { username: true },
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    return NextResponse.json({ success: true, data: messages }, { status: 200 });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal memuat pesan' },
      { status: 500 }
    );
  }
}

// 2. POST: Kirim pesan baru ke channel
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { content, userId, channelId } = body;

    if (!content || !userId || !channelId) {
      return NextResponse.json(
        { success: false, error: 'content, userId, dan channelId wajib diisi' },
        { status: 400 }
      );
    }

    const newMessage = await prisma.message.create({
      data: {
        content,
        userId,
        channelId,
      },
      include: {
        user: {
          select: { username: true },
        },
      },
    });

    return NextResponse.json({ success: true, data: newMessage }, { status: 201 });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal mengirim pesan' },
      { status: 500 }
    );
  }
}
