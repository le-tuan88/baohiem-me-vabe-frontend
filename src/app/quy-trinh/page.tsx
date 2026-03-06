"use client";
import { FileSearch, Stethoscope, HandHeart, CheckCircle, ArrowRight } from "lucide-react";

export default function ProcessPage() {
    const processes = [
        {
            icon: <Stethoscope className="w-8 h-8 text-white" />,
            title: "1. Khám / Nằm viện",
            desc: "Khách hàng khám bệnh hoặc nằm viện tại các cơ sở trên toàn quốc (Yêu cầu giữ lại toàn bộ hóa đơn đỏ, kết luận bệnh, đơn thuốc)."
        },
        {
            icon: <FileSearch className="w-8 h-8 text-white" />,
            title: "2. Nộp hồ sơ App",
            desc: "Chụp ảnh hồ sơ y tế gửi lên ứng dụng Dai-ichi Connect hoặc gửi trực tiếp cho chuyên gia tư vấn của bạn."
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-white" />,
            title: "3. Thẩm định",
            desc: "Công ty tiến hành xem xét hồ sơ trong 3-5 ngày làm việc. Quá trình rất nhanh chóng, minh bạch."
        },
        {
            icon: <HandHeart className="w-8 h-8 text-white" />,
            title: "4. Nhận tiền",
            desc: "Tiền bồi thường được chuyển thẳng vào tài khoản ngân hàng của khách hàng đã đăng ký."
        }
    ]

    return (
        <div className="w-full min-h-screen bg-white pb-20">
            <section className="bg-brand-mint/20 py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Quy Trình Bồi Thường</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto px-4">Minh bạch, nhanh chóng, thủ tục online 100%.</p>
            </section>

            <section className="container mx-auto px-4 py-20 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {processes.map((p, i) => (
                        <div key={i} className="flex gap-6 items-start bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <div className="bg-emerald-500 p-4 rounded-xl shrink-0 shadow-md">
                                {p.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-brand-text mb-2">{p.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-4">Đối với Mạng lưới Bảo Lãnh Chi Trực Tiếp (Bảo Lãnh Viện Phí)</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">Tại hơn 600 cơ sở y tế (Vinmec, Thu Cúc, Tâm Anh, Pháp Việt...), khách hàng chỉ cần xuất trình Thẻ Bảo Hiểm Cứng/App để được trừ tiền trực tiếp trước khi ra viện mà không cần nộp hồ sơ.</p>
                    <a href="https://zalo.me/0909129916" target="_blank" className="inline-flex items-center gap-2 bg-brand-pink text-rose-600 hover:bg-rose-200 px-8 py-4 rounded-full font-bold shadow-sm transition-all text-lg">
                        Hỗ trợ lấy thẻ bảo lãnh <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
}
