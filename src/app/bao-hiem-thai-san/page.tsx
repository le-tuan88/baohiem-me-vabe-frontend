"use client";

import * as motion from "framer-motion/client";
import { CheckCircle2, MessageSquare, FileText, CheckCircle, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import Link from "next/link";
import FeeCalculator from "@/components/FeeCalculator";

export default function MaternityInsurancePage() {
    const packages = [
        {
            name: "Cơ bản",
            price: "Từ 5.000.000đ/năm",
            description: "Giải pháp tiết kiệm, bảo vệ thai sản cơ bản cho mẹ và bé.",
            popular: false,
            benefits: [
                { label: "Sinh thường", value: "Tối đa 15 triệu" },
                { label: "Sinh mổ/Biến chứng", value: "Tối đa 25 triệu" },
                { label: "Tiền giường nằm", value: "1.000.000đ/ngày" },
                { label: "Chăm sóc bé (sau sinh)", value: "Không hỗ trợ" },
            ]
        },
        {
            name: "Nâng cao",
            price: "Từ 8.500.000đ/năm",
            description: "Giải pháp toàn diện, được chọn nhiều nhất với hạn mức cao.",
            popular: true,
            benefits: [
                { label: "Sinh thường", value: "Tối đa 25 triệu" },
                { label: "Sinh mổ/Biến chứng", value: "Tối đa 40 triệu" },
                { label: "Tiền giường nằm", value: "2.000.000đ/ngày" },
                { label: "Chăm sóc bé (sau sinh)", value: "Tối đa 5 triệu" },
            ]
        },
        {
            name: "Toàn diện VIP",
            price: "Từ 15.000.000đ/năm",
            description: "Trải nghiệm dịch vụ sinh đẻ chuẩn quốc tế, VIP care.",
            popular: false,
            benefits: [
                { label: "Sinh thường", value: "Tối đa 50 triệu" },
                { label: "Sinh mổ/Biến chứng", value: "Tối đa 100 triệu" },
                { label: "Tiền giường nằm", value: "5.000.000đ/ngày" },
                { label: "Chăm sóc bé (sau sinh)", value: "Tối đa 15 triệu" },
            ]
        }
    ];

    const steps = [
        {
            icon: <MessageSquare className="w-8 h-8 text-rose-500" />,
            title: "Tư vấn cấu trúc gói",
            desc: "Lựa chọn hạn mức phù hợp với dự định sinh ở viện công hay quốc tế."
        },
        {
            icon: <FileText className="w-8 h-8 text-rose-500" />,
            title: "Làm hồ sơ online",
            desc: "Nhanh chóng, duyệt hồ sơ điện tử chỉ trong 24h làm việc."
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-rose-500" />,
            title: "Nhận hợp đồng & An tâm",
            desc: "Nhận hợp đồng chính thức và sẵn sàng hành trình chào đón bé yêu."
        }
    ];

    return (
        <div className="w-full relative bg-gray-50 h-full min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-brand-pink/40 py-24 pb-32 md:pb-40">
                <div className="absolute inset-0 z-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

                <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text mb-6">
                            Bảo hiểm Thai sản <span className="text-rose-600 block sm:inline mt-2 sm:mt-0">Dai-ichi Life</span>
                            <span className="block text-2xl md:text-4xl mt-4 font-bold opacity-80 decoration-brand-mint underline decoration-4 underline-offset-8">
                                An tâm trọn vẹn đón con yêu
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
                            Tự do lựa chọn nơi sinh tốt nhất (Vinmec, Việt Pháp, Từ Dũ, Hùng Vương...) mà không lo âu về chi phí viện phí đắt đỏ.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('tu-van')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all flex items-center gap-3 mx-auto"
                        >
                            Nhận bảng minh họa phí <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Fee Calculator Section */}
            <div className="container mx-auto px-4">
                <FeeCalculator />
            </div>

            {/* Comparison Table Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-rose-500 font-semibold tracking-wider uppercase">So sánh quyền lợi</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mt-2">Lựa Chọn Gói Phù Hợp Cho Gia Đình</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {packages.map((pkg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.5 }}
                                className={`rounded-3xl border-2 flex flex-col h-full bg-white relative overflow-hidden transition-all ${pkg.popular
                                    ? "border-rose-400 shadow-xl shadow-rose-100 transform md:-translate-y-4"
                                    : "border-gray-100 shadow-md hover:border-brand-pink hover:shadow-lg"
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="bg-rose-500 text-white text-xs font-bold uppercase tracking-widest text-center py-2">
                                        Được chọn nhiều nhất
                                    </div>
                                )}

                                <div className={`p-8 pb-6 border-b ${pkg.popular ? "bg-rose-50/50" : "bg-gray-50/50"}`}>
                                    <h3 className="text-2xl font-bold text-brand-text mb-2">{pkg.name}</h3>
                                    <p className="text-rose-600 font-extrabold text-xl mb-4">{pkg.price}</p>
                                    <p className="text-sm text-gray-500">{pkg.description}</p>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {pkg.benefits.map((benefit, i) => (
                                            <li key={i} className="flex flex-col">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <CheckCircle2 className={`w-4 h-4 ${pkg.popular ? "text-rose-500" : "text-brand-mint"}`} />
                                                    <span className="text-gray-600 text-sm font-medium">{benefit.label}</span>
                                                </div>
                                                <span className="font-bold text-brand-text pl-6">{benefit.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => document.getElementById('tu-van')?.scrollIntoView({ behavior: 'smooth' })}
                                        className={`w-full py-4 rounded-xl font-bold transition-colors ${pkg.popular
                                            ? "bg-rose-500 text-white hover:bg-rose-600"
                                            : "bg-brand-pink/20 text-rose-600 hover:bg-brand-pink/40"
                                            }`}
                                    >
                                        Đăng ký ngay
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Stepper Section */}
            <section className="py-20 bg-brand-pink/10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-brand-text">Quy trình tham gia cực đơn giản</h2>
                        <p className="text-gray-600 mt-2">Toàn bộ quy trình diễn ra online hoặc tận nhà theo yêu cầu.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-4 max-w-5xl mx-auto relative px-4">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-1 bg-rose-200 z-0"></div>

                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3"
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-brand-pink mb-6">
                                    {step.icon}
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm w-full h-full border border-rose-50">
                                    <span className="text-rose-500 font-bold mb-2 block">Bước {idx + 1}</span>
                                    <h3 className="text-lg font-bold text-brand-text mb-3">{step.title}</h3>
                                    <p className="text-gray-600 text-sm">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead Form Section */}
            <section id="tu-van" className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-brand-mint/10 border-2 border-brand-mint/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    >
                        <ShieldCheck className="absolute -top-10 -right-10 w-40 h-40 text-brand-mint/20 -rotate-12" />

                        <div className="text-center mb-10 relative z-10">
                            <h2 className="text-3xl font-extrabold text-brand-text mb-4">Đăng Ký Nhận Bảng Minh Họa</h2>
                            <p className="text-gray-600">
                                Để lại thông tin để chuyên gia của chúng tôi tính toán phí dựa trên độ tuổi và nhu cầu dự sinh của bạn (Hoàn toàn miễn phí).
                            </p>
                        </div>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên mẹ</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập họ tên đầy đủ"
                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại <span className="text-rose-500">*</span></label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="Để chuyên viên liên hệ zalo"
                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Tháng / Năm dự sinh (Nếu có kế hoạch)</label>
                                <input
                                    type="text"
                                    placeholder="VD: Tháng 10/2026 hoặc Đang có kế hoạch"
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/20 outline-none transition-all"
                                />
                            </div>

                            <button type="button" className="w-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-lg py-5 rounded-xl shadow-[0_4px_14px_0_rgb(225,29,72,39%)] transition-all flex items-center justify-center gap-2">
                                <HeartHandshake className="w-5 h-5" /> Gửi Thông Tin Cho Chuyên Gia
                            </button>
                            <p className="text-center text-xs text-gray-500 mt-4">
                                Thông tin của bạn được bảo mật tuyệt đối và chỉ dùng cho mục đích tư vấn bảo hiểm của hệ thống Dai-ichi Life.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
