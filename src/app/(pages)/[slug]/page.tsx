import { notFound } from "next/navigation";

export default async function StaticPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    if (!slug) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-6 capitalize">
                {slug.replace(/-/g, " ")}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Đây là trang tĩnh (như Liên hệ, Quy trình bồi thường) được xây dựng sử dụng route group trong Next.js.
            </p>
            <div className="mt-8 bg-brand-mint/10 border border-brand-mint/30 rounded-2xl p-8 inline-block text-left w-full max-w-xl">
                <h2 className="text-xl font-bold mb-4">Thông tin liên hệ mẫu:</h2>
                <ul className="space-y-3 text-gray-700">
                    <li><strong>Email:</strong> hotro@baohiemmevabe.com.vn</li>
                    <li><strong>Hotline:</strong> 1800 xxxx</li>
                    <li><strong>Địa chỉ:</strong> Tòa nhà văn phòng, TP.HCM</li>
                </ul>
            </div>
        </div>
    );
}
