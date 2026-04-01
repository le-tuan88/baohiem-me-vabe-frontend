import Link from "next/link";
import { getPaginatedPosts } from "@/lib/api";

export const revalidate = 60; // ISR: revalidate sau 60 giây

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BlogList({ searchParams }: Props) {
    const params = await searchParams;
    
    // We fetch 9 posts per page
    const postsPerPage = 9;
    
    const after = typeof params.after === 'string' ? params.after : '';
    const before = typeof params.before === 'string' ? params.before : '';
    
    // Fetch data based on cursors
    let data;
    if (before) {
        data = await getPaginatedPosts(9, "", before, postsPerPage);
    } else {
        data = await getPaginatedPosts(postsPerPage, after, "", null);
    }

    // Default to empty array if data isn't available
    const posts = data?.posts?.nodes || [];
    const pageInfo = data?.posts?.pageInfo || {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: "",
        endCursor: ""
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-brand-text mb-8">Kiến thức Mẹ và Bé</h1>
            {posts.length === 0 ? (
                <p className="text-gray-500">Chưa có bài viết nào.</p>
            ) : (
                <>
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

                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center gap-4 mt-12">
                        {pageInfo.hasPreviousPage ? (
                            <Link
                                href={`/blog?before=${pageInfo.startCursor}`}
                                className="px-6 py-2 border border-brand-mint text-brand-text font-medium rounded-full hover:bg-brand-mint transition-colors"
                            >
                                &larr; Trang trước
                            </Link>
                        ) : (
                            <button disabled className="px-6 py-2 border border-gray-200 text-gray-400 font-medium rounded-full cursor-not-allowed">
                                &larr; Trang trước
                            </button>
                        )}

                        {pageInfo.hasNextPage ? (
                            <Link
                                href={`/blog?after=${pageInfo.endCursor}`}
                                className="px-6 py-2 bg-brand-pink text-brand-text font-medium rounded-full hover:bg-brand-pink/80 transition-colors"
                            >
                                Trang sau &rarr;
                            </Link>
                        ) : (
                            <button disabled className="px-6 py-2 bg-gray-100 text-gray-400 font-medium rounded-full cursor-not-allowed">
                                Trang sau &rarr;
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
