import Link from "next/link";
import { getLatestPosts } from "@/lib/api";

export const revalidate = 60; // ISR: revalidate sau 60 giây

export default async function BlogList() {
    const data = await getLatestPosts();
    // Default to empty array if data isn't available
    const posts = data?.posts?.nodes || [];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-brand-text mb-8">Kiến thức Mẹ và Bé</h1>
            {posts.length === 0 ? (
                <p className="text-gray-500">Chưa có bài viết nào.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post: any) => (
                        <Link key={post.id} href={`/${post.slug}`} className="block">
                            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                                <div className="bg-brand-pink/30 h-48 w-full flex items-center justify-center text-gray-400 overflow-hidden relative">
                                    {post.featuredImage?.node?.sourceUrl ? (
                                        <img
                                            src={post.featuredImage.node.sourceUrl}
                                            alt={post.featuredImage.node.altText || post.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span>Hình ảnh bài viết</span>
                                    )}
                                </div>
                                <div className="p-4 flex-grow flex flex-col">
                                    <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider mb-2 block">
                                        {post.date ? new Date(post.date).toLocaleDateString('vi-VN') : 'Mới nhất'}
                                    </span>
                                    <h2 className="text-lg font-bold mb-2 text-brand-text hover:text-rose-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    {post.excerpt && (
                                        <div
                                            className="text-sm text-gray-600 line-clamp-2 mt-auto"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                        />
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
