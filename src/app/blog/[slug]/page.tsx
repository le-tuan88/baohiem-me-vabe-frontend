import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/api";

export const revalidate = 60; // ISR every 60 seconds

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    if (!slug) {
        notFound();
    }

    const data = await getPostBySlug(slug);
    const post = data?.post;

    if (!post) {
        notFound();
    }

    // Làm sạch nội dung: Đổi TẤT CẢ URL WordPress thành URL tương đối để proxy hoạt động và link nội bộ đúng
    const cleanContent = post.content
        // 1. Strip domain quản trị WordPress cũ
        .replace(/https?:\/\/quanly\.tuvandai-ichi-life\.com\.vn/g, '')
        // 2. Strip domain quản trị WordPress mới (quanly.baohiemmevabe.com.vn)
        .replace(/https?:\/\/quanly\.baohiemmevabe\.com\.vn/g, '')
        // 3. Strip domain public WordPress (nếu WP public dùng cùng domain với Next.js, link sẽ là internal)
        .replace(/https?:\/\/baohiemmevabe\.com\.vn/g, '')
        // 4. Xử lý các URL có www
        .replace(/https?:\/\/www\.baohiemmevabe\.com\.vn/g, '');

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold text-brand-text mb-4">
                {post.title}
            </h1>
            <div className="text-sm text-gray-500 mb-8 flex items-center gap-4">
                <span>Tác giả: Admin</span>
                <span>•</span>
                <span>Ngày đăng: {post.date ? new Date(post.date).toLocaleDateString('vi-VN') : 'Mới nhất'}</span>
            </div>

            {post.featuredImage?.node?.sourceUrl && (
                <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 relative">
                    <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            )}

            <div
                className="prose prose-pink max-w-none text-gray-700 wp-content entry-content"
                dangerouslySetInnerHTML={{ __html: cleanContent }}
            />
        </div>
    );
}
