import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug, getAllPostSlugs } from "@/lib/api";

export const revalidate = 60; // ISR: revalidate sau 60 giây

type Props = {
    params: Promise<{ slug: string }>;
};

// Pre-build các trang bài viết khi deploy (ISR)
export async function generateStaticParams() {
    try {
        const slugs = await getAllPostSlugs();
        return (slugs || []).map((slug: string) => ({ slug }));
    } catch {
        return [];
    }
}

// ============================================
// generateMetadata: Tạo thẻ SEO động cho từng bài viết
// ============================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = await getPostBySlug(slug);
    const post = data?.post;

    if (!post) {
        return {
            title: "Bài viết không tồn tại",
        };
    }

    // Làm sạch excerpt để dùng làm meta description
    const rawExcerpt = post.excerpt?.replace(/<[^>]*>/g, "").trim() ?? "";
    const description = rawExcerpt || "Xem bài viết chi tiết tại Bảo Hiểm Mẹ và Bé.";
    const imageUrl = post.featuredImage?.node?.sourceUrl || "/hero-mevabe.jpg";
    const canonicalUrl = `https://baohiemmevabe.com.vn/${slug}/`;

    return {
        title: `${post.title} | Bảo Hiểm Mẹ và Bé`,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: post.title,
            description,
            url: canonicalUrl,
            type: "article",
            publishedTime: post.date,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            locale: "vi_VN",
            siteName: "Bảo Hiểm Mẹ và Bé",
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description,
            images: [imageUrl],
        },
    };
}

// ============================================
// Page Component
// ============================================
export default async function BlogPost({ params }: Props) {
    const { slug } = await params;

    if (!slug) {
        notFound();
    }

    const data = await getPostBySlug(slug);
    const post = data?.post;

    if (!post) {
        notFound();
    }

    // Làm sạch nội dung: Đổi TẤT CẢ URL WordPress (cả domain quản trị lẫn domain public) thành URL tương đối
    // Điều này đảm bảo link trong bài viết sẽ navigate đúng sang trang Next.js tương ứng thay vì redirect về trang chủ
    const cleanContent = post.content
        // 1. Strip domain quản trị WordPress cũ
        .replace(/https?:\/\/quanly\.tuvandai-ichi-life\.com\.vn/g, '')
        // 2. Strip domain quản trị WordPress mới (quanly.baohiemmevabe.com.vn)
        .replace(/https?:\/\/quanly\.baohiemmevabe\.com\.vn/g, '')
        // 3. Strip domain public WordPress (nếu WP public dùng cùng domain với Next.js, link sẽ là internal)
        .replace(/https?:\/\/baohiemmevabe\.com\.vn/g, '')
        // 4. Xử lý các URL có www
        .replace(/https?:\/\/www\.baohiemmevabe\.com\.vn/g, '');

    // JSON-LD Schema cho bài viết (Article)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt?.replace(/<[^>]*>/g, "").trim() ?? "",
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Person",
            "name": "Bảo Trâm",
            "url": "https://baohiemmevabe.com.vn"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Bảo Hiểm Mẹ và Bé",
            "url": "https://baohiemmevabe.com.vn",
            "logo": {
                "@type": "ImageObject",
                "url": "https://baohiemmevabe.com.vn/hero-mevabe.jpg"
            }
        },
        "image": post.featuredImage?.node?.sourceUrl ?? "https://baohiemmevabe.com.vn/hero-mevabe.jpg",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://baohiemmevabe.com.vn/${slug}/`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <h1 className="text-4xl font-bold text-brand-text mb-4">
                    {post.title}
                </h1>
                <div className="text-sm text-gray-500 mb-8 flex items-center gap-4">
                    <span>Tác giả: Bảo Trâm</span>
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
        </>
    );
}
