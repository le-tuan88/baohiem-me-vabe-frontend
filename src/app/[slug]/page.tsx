import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug } from "@/lib/api";

export const revalidate = 60; // ISR every 60 seconds
export const dynamic = 'force-dynamic'; // Không prerender tĩnh khi build

type Props = {
    params: Promise<{ slug: string }>;
};

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

    // Làm sạch nội dung: Đổi URL quản trị thành URL tương đối
    const cleanContent = post.content.replace(
        /https?:\/\/quanly\.tuvandai-ichi-life\.com\.vn/g,
        ''
    );

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
