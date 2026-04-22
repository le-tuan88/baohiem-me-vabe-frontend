import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/api";
import WpContent from "@/components/WpContent";

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

    // Làm sạch nội dung: Đổi URL WordPress thành URL tương đối CHỈ CHO LINK INTERAL (href=...) 
    // Giữ nguyên src=... và srcset=... để ảnh load trực tiếp từ server WP, tránh lỗi proxy/rewrites và giảm tải Vercel
    let cleanContent = post.content;
    const domainsToReplace = [
        'https://quanly.tuvandai-ichi-life.com.vn',
        'http://quanly.tuvandai-ichi-life.com.vn',
        'https://quanly.baohiemmevabe.com.vn',
        'http://quanly.baohiemmevabe.com.vn',
        'https://baohiemmevabe.com.vn',
        'http://baohiemmevabe.com.vn',
        'https://www.baohiemmevabe.com.vn',
        'http://www.baohiemmevabe.com.vn'
    ];

    domainsToReplace.forEach(domain => {
        // Chỉ replace domain trong href=... để giữ link nội bộ chạy qua Next.js
        const regexDouble = new RegExp(`href="${domain}`, 'gi');
        const regexSingle = new RegExp(`href='${domain}`, 'gi');
        cleanContent = cleanContent.replace(regexDouble, `href="`);
        cleanContent = cleanContent.replace(regexSingle, `href='`);
    });

    // Bỏ loading="lazy" vì trong môi trường SPA với dangerouslySetInnerHTML, 
    // thuộc tính này đôi khi khiến ảnh không được hiển thị (trình duyệt không trigger được event)
    cleanContent = cleanContent.replace(/loading="lazy"/g, 'loading="eager"');

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

            <WpContent html={cleanContent} />
        </div>
    );
}
