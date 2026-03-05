"use client";
import { Users, ArrowRight, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function FamilyComboPage() {
    return (
        <div className="w-full min-h-screen bg-gray-50 pb-20">
            <section className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Combo Bảo Hiểm Gia Đình</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto px-4">Giải pháp tiết kiệm thông minh. Duy nhất 1 hợp đồng bảo vệ sức khỏe cho cả nhà.</p>
            </section>

            <section className="container mx-auto px-4 py-20 max-w-5xl text-center">
                <Users className="w-20 h-20 text-indigo-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-6 text-brand-text">Đặc quyền của Combo Gia Đình Dai-ichi</h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Tối ưu hóa ngân sách gia đình, chỉ với một khoản đóng nhỏ mỗi năm, cả bố, mẹ và các con đều có thẻ chăm sóc sức khỏe cao cấp.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-sm border border-indigo-100">
                        <ShieldCheck className="w-10 h-10 text-indigo-500 mb-4" />
                        <h3 className="text-xl font-bold text-brand-text mb-2">Bảo Vệ Người Trụ Cột</h3>
                        <p className="text-gray-600">Đảm bảo nguồn thu nhập vững vàng cho gia đình trước mọi biến cố.</p>
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-sm border border-indigo-100">
                        <HeartPulse className="w-10 h-10 text-indigo-500 mb-4" />
                        <h3 className="text-xl font-bold text-brand-text mb-2">Quyền Lợi Sức Khỏe Chung</h3>
                        <p className="text-gray-600">Thẻ sức khỏe đính kèm thanh toán viện phí từ bệnh viện tuyến huyện đến quốc tế.</p>
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-sm border border-indigo-100">
                        <Sparkles className="w-10 h-10 text-indigo-500 mb-4" />
                        <h3 className="text-xl font-bold text-brand-text mb-2">Phí Đóng Thấp Hơn</h3>
                        <p className="text-gray-600">Tiết kiệm đến 30% chi phí so với việc mua nhiều hợp đồng lẻ tẻ cho từng người.</p>
                    </motion.div>
                </div>

                <a href="https://zalo.me/0901281386" target="_blank" className="inline-flex items-center gap-2 bg-indigo-500 text-white px-10 py-5 rounded-full font-bold shadow-lg hover:bg-indigo-600 hover:scale-105 transition-all text-lg">
                    Tư Vấn Miễn Phí <ArrowRight className="w-5 h-5" />
                </a>
            </section>
        </div>
    );
}
