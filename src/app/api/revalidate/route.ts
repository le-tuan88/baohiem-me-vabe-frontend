import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route: On-Demand ISR Revalidation
 * 
 * WordPress gọi endpoint này sau khi lưu/cập nhật bài viết.
 * Thay vì dùng Vercel Deploy Hook (rebuild toàn bộ app),
 * endpoint này chỉ làm mới cache của trang cụ thể.
 * 
 * Cách dùng (gọi từ WordPress webhook):
 *   POST https://baohiemmevabe.com.vn/api/revalidate
 *   Header: x-revalidate-secret: <REVALIDATE_SECRET>
 *   Body (JSON): { "slug": "ten-bai-viet", "type": "post" }
 * 
 * Hoặc GET (tiện test):
 *   GET /api/revalidate?secret=TOKEN&slug=ten-bai-viet
 */
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const slug = request.nextUrl.searchParams.get('slug');

  // Kiểm tra secret token
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    if (slug) {
      // Làm mới trang bài viết cụ thể (cả 2 route patterns)
      revalidatePath(`/${slug}/`);
      revalidatePath(`/blog/${slug}/`);
      console.log(`[Revalidate] Revalidated slug: ${slug}`);
    } else {
      // Không có slug → làm mới tất cả trang liên quan
      revalidatePath('/');
      revalidatePath('/blog/');
      console.log('[Revalidate] Revalidated all pages');
    }

    return NextResponse.json({ revalidated: true, slug: slug || 'all', timestamp: Date.now() });
  } catch (err) {
    console.error('[Revalidate] Error:', err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  // Kiểm tra secret qua header hoặc query param
  const headerSecret = request.headers.get('x-revalidate-secret');
  const querySecret = request.nextUrl.searchParams.get('secret');
  const secret = headerSecret || querySecret;

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    let slug: string | null = null;

    // Đọc body JSON (WordPress gửi theo dạng này)
    try {
      const body = await request.json();
      slug = body?.slug || body?.post_slug || null;
    } catch {
      // Body không phải JSON, bỏ qua
    }

    if (slug) {
      revalidatePath(`/${slug}/`);
      revalidatePath(`/blog/${slug}/`);
      console.log(`[Revalidate] POST - Revalidated slug: ${slug}`);
    } else {
      // Không biết slug cụ thể → làm mới trang blog và trang chủ
      revalidatePath('/');
      revalidatePath('/blog/');
      console.log('[Revalidate] POST - Revalidated blog index');
    }

    return NextResponse.json({ revalidated: true, slug: slug || 'index', timestamp: Date.now() });
  } catch (err) {
    console.error('[Revalidate] POST Error:', err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
