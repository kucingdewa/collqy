import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username } = body;

    if (!username) {
      return NextResponse.json(
        { success: false, error: 'Username anonim wajib diisi' },
        { status: 400 }
      );
    }

    // Cek apakah user anonim sudah ada di database
    let user = await prisma.user.findFirst({
      where: { username },
    });

    // kalau belum ada, buat user anonim baru
    if (!user) {
      user = await prisma.user.create({
        data: { username },
      });
    }

    // Kembalikan data user yang berhasil login/terdaftar
    return NextResponse.json(
      { success: true, message: 'Login anonim berhasil', data: user },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saat login:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal melakukan proses login' },
      { status: 500 }
    );
  }
}
