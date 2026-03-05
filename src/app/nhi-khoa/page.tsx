"use client";

import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Baby, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PediatricInsurancePage() {
    return (
        <div className="w-full min-h-screen bg-gray-50 pb-20">
            <section className="bg-gradient-to-br from-emerald-50 to-brand-mint/40 py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Bảo Hiểm Nhi Khoa</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto px-4">Bảo vệ sức khoẻ toàn diện cho bé yêu từ những năm tháng đầu đời. Quyền lợi nội/ngoại trú vượt trội.</p>
            </section>
            <section className="container mx-auto px-4 py-20 max-w-5xl text-center">
                <HeartPulse className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-6 text-brand-text">Gói Bảo Hiểm Sức Khỏe Cho Bé</h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
                    Trẻ nhỏ có sức đề kháng yếu nên thường xuyên ốm vặt, đặc biệt là các bệnh về hô hấp và tiêu hóa. Hãy trang bị thẻ bảo hiểm sức khỏe để an tâm mỗi khi con đi viện, tận hưởng dịch vụ y tế 5 sao mà không lo lắng về viện phí.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
                    <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-emerald-100 p-4 rounded-full">
                                <Stethoscope className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-text">Ngoại Trú</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" /> <span className="text-gray-700">Chi trả 100% tiền khám, chụp chiếu, xét nghiệm.</span></li>
                            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" /> <span className="text-gray-700">Chi trả 100% tiền thuốc theo đơn bác sĩ.</span></li>
                            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" /> <span className="text-gray-700">Hạn mức lên đến 15.000.000 VNĐ / năm.</span></li>
                        </ul>
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-emerald-100 p-4 rounded-full">
                                <Baby className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-text">Nội Trú</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" /> <span className="text-gray-700">Thanh toán tiền phòng, giường bệnh chuẩn quốc tế.</span></li>
                            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" /> <span className="text-gray-700">Dịch vụ bảo lãnh viện phí trực tiếp tại Vinmec, Hồng Ngọc...</span></li>
                            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" /> <span className="text-gray-700">Không giới hạn số ngày nằm viện/năm.</span></li>
                        </ul>
                    </motion.div>
                </div>

                <a href="https://zalo.me/0901281386" target="_blank" className="inline-flex items-center gap-2 bg-emerald-500 text-white px-10 py-5 rounded-full font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-105 transition-all text-lg">
                    Tư Vấn Miễn Phí <ArrowRight className="w-5 h-5" />
                </a>
            </section>
        </div>
    );
}
