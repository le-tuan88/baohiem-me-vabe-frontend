"use client";

import { useState } from "react";
import { Calculator, AlertCircle } from "lucide-react";

export default function FeeCalculator() {
    const [age, setAge] = useState<number | "">("");
    const [pregnancyStatus, setPregnancyStatus] = useState<string>("chua-mang-thai");
    const [fee, setFee] = useState<number | null>(null);
    const [warning, setWarning] = useState<string | null>(null);

    const calculateFee = () => {
        setWarning(null);

        if (pregnancyStatus === "tren-12-tuan") {
            setWarning("Vui lòng liên hệ trực tiếp chuyên gia để kiểm tra điều kiện tham gia (Do mẹ thai kỳ đã qua 12 tuần).");
            setFee(null);
            return;
        }

        if (age === "" || isNaN(Number(age))) {
            setWarning("Vui lòng nhập số tuổi hợp lệ của mẹ.");
            setFee(null);
            return;
        }

        const numericAge = Number(age);
        if (numericAge < 18) {
            setWarning("Mẹ cần đủ 18 tuổi trở lên để tham gia.");
            setFee(null);
            return;
        }

        if (numericAge < 30) {
            setFee(5500000);
        } else if (numericAge >= 30 && numericAge <= 35) {
            setFee(8500000);
        } else {
            setFee(12000000);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-pink/30 mb-20 relative z-20 -mt-10 md:-mt-20">
            {/* Header */}
            <div className="bg-brand-pink/30 p-6 flex items-center justify-center gap-3 border-b border-brand-pink/50">
                <Calculator className="w-8 h-8 text-rose-500" />
                <h3 className="text-2xl font-bold text-brand-text">Công cụ tính phí bảo hiểm dự kiến</h3>
            </div>

            {/* Content */}
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Age Input */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Tuổi của mẹ hiện tại</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value === "" ? "" : Number(e.target.value))}
                            placeholder="Nhập tuổi (VD: 28)"
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                        />
                    </div>

                    {/* Pregnancy Status Select */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Tình trạng thai kỳ</label>
                        <select
                            value={pregnancyStatus}
                            onChange={(e) => setPregnancyStatus(e.target.value)}
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/20 outline-none transition-all appearance-none bg-white font-medium text-gray-700"
                        >
                            <option value="chua-mang-thai">Chưa mang thai / Lên kế hoạch</option>
                            <option value="duoi-12-tuan">Đã mang thai (Dưới 12 tuần)</option>
                            <option value="tren-12-tuan">Đã mang thai (Trên 12 tuần)</option>
                        </select>
                    </div>
                </div>

                {/* Calculate Button */}
                <button
                    onClick={calculateFee}
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] mb-8"
                >
                    TÍNH PHÍ DỰ KIẾN
                </button>

                {/* Results Area */}
                <div className="min-h-[120px] rounded-2xl bg-gray-50 flex flex-col items-center justify-center p-6 border border-gray-100 text-center">
                    {warning ? (
                        <div className="flex items-center gap-2 text-amber-600">
                            <AlertCircle className="w-6 h-6 flex-shrink-0" />
                            <p className="font-medium text-sm md:text-base">{warning}</p>
                        </div>
                    ) : fee !== null ? (
                        <div className="animate-in fade-in zoom-in duration-300">
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Phí bảo hiểm ước tính (Gói cơ bản)</p>
                            <p className="text-4xl md:text-5xl font-extrabold text-rose-600 mb-2">
                                {new Intl.NumberFormat('vi-VN').format(fee)} <span className="text-2xl text-rose-400">VNĐ</span><span className="text-xl text-gray-400">/năm</span>
                            </p>
                        </div>
                    ) : (
                        <p className="text-gray-400 italic">Nhập thông tin và bấm nút để xem ngay mức phí dự kiến.</p>
                    )}
                </div>

                {/* CTA Zalo */}
                <div className="mt-8 text-center pt-8 border-t border-gray-100">
                    <a
                        href="https://zalo.me/0909129916"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-col sm:flex-row items-center gap-3 bg-[#0068FF] hover:bg-[#0055D4] text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_20px_0_rgba(0,104,255,0.3)] hover:shadow-[0_8px_25px_0_rgba(0,104,255,0.5)] transition-all hover:-translate-y-1"
                    >
                        <div className="bg-white text-[#0068FF] p-1.5 rounded-full">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.426 10.363c0-4.885-4.453-8.863-10.021-8.863S1.385 5.478 1.385 10.363c0 2.656 1.348 5.034 3.483 6.643-1.614 2.87-1.129 2.107-.945 3.016.14.686.83.652 1.472.06l3.541-3.238c.813.167 1.493.226 2.47.226 5.545-.067 9.998-4 9.998-8.863z" />
                                <text x="12" y="16.5" fontSize="11" fontWeight="bold" fontFamily="Arial" fill="currentColor" textAnchor="middle">Zalo</text>
                            </svg>
                        </div>
                        <span className="text-sm md:text-base">Kết nối Zalo với Bảo Trâm để nhận bảng minh họa</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
