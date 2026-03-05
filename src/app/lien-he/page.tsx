"use client";
import { Phone, MapPin, Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="w-full min-h-screen bg-gray-50 pb-20">
            <section className="bg-brand-pink/30 py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Liên Hệ Dai-ichi Life</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto px-4">Hãy để chúng tôi thiết kế giải pháp bảo vệ tối ưu nhất cho gia đình bạn.</p>
            </section>

            <section className="container mx-auto px-4 py-20 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="lg:w-2/5 md:p-12 p-8 bg-rose-500 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Thông Tin Liên Hệ</h2>
                            <ul className="space-y-8 mt-8">
                                <li className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 shrink-0" />
                                    <span className="text-lg">0901 281 386</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 shrink-0" />
                                    <span className="text-lg">cskh.dlvn@gmail.com</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 shrink-0" />
                                    <span className="text-lg">Trụ sở: 149-151 Nguyễn Văn Trỗi, Phường 11, Quận Phú Nhuận, TP.HCM</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-16">
                            <p className="opacity-80 italic">Liên hệ trực tiếp để được tư vấn gói phù hợp. Phục vụ 24/7 toàn quốc qua Zalo/Phone.</p>
                        </div>
                    </div>

                    <div className="lg:w-3/5 md:p-12 p-8">
                        <h2 className="text-3xl font-bold text-brand-text mb-8">Gửi Yêu Cầu Tư Vấn</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Họ Tên</label>
                                    <input type="text" placeholder="Tên của bạn" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Số Điện Thoại *</label>
                                    <input type="tel" placeholder="SĐT/Zalo để tư vấn" required className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Ghi Chú Nhu Cầu</label>
                                <textarea rows={4} placeholder="VD: Mình đang mang thai tuần 12, muốn hỏi gói thai sản Vinmec..." className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"></textarea>
                            </div>
                            <button type="button" className="w-full bg-rose-500 text-white font-bold py-5 rounded-xl text-lg hover:bg-rose-600 shadow-md transition-all flex items-center justify-center gap-2">
                                <MessageSquare className="w-5 h-5" /> Gửi Thông Tin Cho Chúng Tôi
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
