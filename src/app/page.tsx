"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Clock, ArrowRight, Star, HeartHandshake, Baby, Users, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      title: "Bảo hiểm Thai sản",
      desc: "Sinh con nhẹ tênh tại các BV Quốc tế hàng đầu. Chi trả trọn gói chi phí sinh nở.",
      icon: <HeartHandshake className="w-12 h-12 text-rose-500 mb-4" />,
      link: "/bao-hiem-thai-san",
      color: "border-rose-200 hover:border-rose-400 bg-rose-50/30"
    },
    {
      title: "Bảo hiểm Nhi khoa",
      desc: "Bảo vệ toàn diện cho bé yêu trước các rủi ro bệnh lý, tai nạn. Quyền lợi cao.",
      icon: <Baby className="w-12 h-12 text-emerald-500 mb-4" />,
      link: "/nhi-khoa",
      color: "border-emerald-200 hover:border-emerald-400 bg-emerald-50/30"
    },
    {
      title: "Combo Gia đình",
      desc: "Bảo vệ sức khỏe cho cả nhà. Tiết kiệm chi phí với gói combo ưu đãi từ Dai-ichi Life.",
      icon: <Users className="w-12 h-12 text-indigo-500 mb-4" />,
      link: "/combo-gia-dinh",
      color: "border-indigo-200 hover:border-indigo-400 bg-indigo-50/30"
    }
  ];

  const steps = [
    { icon: <UserCheck className="w-8 h-8 text-white" />, title: "Tư vấn nhu cầu", desc: "Hiểu rõ mong muốn của gia đình." },
    { icon: <FileText className="w-8 h-8 text-white" />, title: "Thiết kế giải pháp", desc: "Lên bảng minh họa tối ưu nhất." },
    { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: "Làm hồ sơ", desc: "Thủ tục nhanh gọn, trực tuyến." },
    { icon: <Star className="w-8 h-8 text-white" />, title: "Trao hợp đồng", desc: "Đồng hành trọn đời bảo vệ." },
  ];

  const Feedbacks = [
    { name: "Chị Nguyễn Hằng", role: "Mẹ bỉm sữa", text: "Gói thai sản Dai-ichi giúp mình sinh mổ tại Vinmec hoàn toàn miễn phí. Dịch vụ chăm sóc khách hàng cực kỳ tốt." },
    { name: "Anh Trần Phong", role: "Trưởng phòng IT", text: "Gói gia đình giúp tôi an tâm làm việc. Hôm trước bé nhà ốm viện phí mấy chục triệu đều được Dai-ichi lo hết." },
    { name: "Chị Phương Thảo", role: "Kinh doanh tự do", text: "Quy trình bồi thường cực nhanh, chỉ trong 3 ngày qua app là tiền đã nổi tài khoản. Rất hài lòng!" }
  ]

  return (
    <div className="w-full relative overflow-hidden">
      {/* 1. Hero Section (Split Screen) */}
      <section className="relative pt-6 md:pt-24 pb-20 bg-gradient-to-br from-brand-pink/10 to-brand-mint/10 overflow-hidden">
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Cột trái (Nội dung) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex flex-col gap-2 md:gap-4 z-10"
            >
              <span className="bg-rose-100 text-rose-600 px-4 py-2 rounded-full font-bold text-sm md:text-base w-fit inline-block mb-1">
                Giải pháp bảo hiểm thai sản & sức khỏe toàn diện
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text leading-none mt-0 mb-3 tracking-tight">
                Đồng hành cùng Mẹ, <br /> <span className="text-sky-500">An tâm cho Bé</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl font-medium leading-relaxed">
                Bảo Trâm mang đến các gói bảo hiểm được thiết kế riêng, bảo vệ sức khỏe cho mẹ bầu và sự phát triển của bé yêu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
                <a href="https://zalo.me/0909129916" target="_blank" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-3xl font-bold text-lg shadow-lg hover:shadow-rose-600/50 transition-all flex justify-center items-center gap-2">
                  Nhận Tư Vấn Ngay
                </a>
                <Link href="/bao-hiem-thai-san" className="bg-transparent border-2 border-brand-text text-brand-text hover:bg-brand-text hover:text-white px-8 py-4 rounded-3xl font-bold text-lg transition-all flex justify-center items-center">
                  Tìm Hiểu Thêm
                </Link>
              </div>
            </motion.div>

            {/* Cột phải (Hình ảnh Blob) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 relative mt-8 lg:mt-0"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/hero-mevabe.jpg"
                  alt="Bảo Trâm Dai-ichi Life"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Decorative elements behind blob */}
              <div className="absolute top-10 -left-10 w-24 h-24 bg-brand-pink rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute top-10 -right-10 w-24 h-24 bg-brand-mint rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-10 left-20 w-32 h-32 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Sản phẩm Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">Danh Mục Sản Phẩm</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Các giải pháp bảo vệ được thiết kế tối ưu với mức phí tiết kiệm nhất.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((prod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`p-8 rounded-3xl border-2 transition-all ${prod.color} text-center flex flex-col items-center group`}
              >
                {prod.icon}
                <h3 className="text-2xl font-bold text-brand-text mb-4 group-hover:text-rose-600 transition-colors">{prod.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow">{prod.desc}</p>
                <Link href={prod.link} className="flex items-center gap-2 font-bold text-brand-text hover:text-rose-500">
                  Xem chi tiết <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Quy trình Section */}
      <section className="py-24 bg-brand-pink/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">Quy Trình Tham Gia</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Đơn giản, minh bạch và hoàn toàn trực tuyến để bạn tiết kiệm thời gian.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative text-center">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center relative z-10"
              >
                <div className="w-20 h-20 rounded-full bg-rose-400 flex items-center justify-center shadow-lg border-4 border-white mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Bước {idx + 1}: <br /> {step.title}</h3>
                <p className="text-gray-600 text-sm px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tại sao chọn chúng tôi Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
                <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6">Trải Nghiệm Dịch Vụ Khác Biệt</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Chúng tôi không chỉ bán hợp đồng bảo hiểm. Chúng tôi trao cho bạn sự an tâm, cam kết đồng hành và đứng ra bảo vệ quyền lợi hợp pháp của bạn khi rủi ro xảy ra.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-mint/30 p-3 rounded-full"><Clock className="text-emerald-600 w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-xl text-brand-text">Hỗ trợ siêu tốc</h4>
                      <p className="text-gray-600">Thủ tục bảo lãnh viện phí chỉ trong vòng chưa đầy 1 giờ đồng hồ.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-pink/50 p-3 rounded-full"><ShieldCheck className="text-rose-600 w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-xl text-brand-text">Bảo vệ quyền lợi</h4>
                      <p className="text-gray-600">Luôn đứng về phía khách hàng để tối đa hóa số tiền bồi thường.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-100 rounded-3xl h-96 w-full flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center shadow-xl">
                {/* Placeholder image representation */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Feedback Khách Hàng Section */}
      <section className="py-24 bg-brand-mint/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">Khách Hàng Nói Gì</h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Feedbacks.map((fb, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 relative"
              >
                <div className="flex text-yellow-400 mb-4">
                  <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{fb.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                    {fb.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-text">{fb.name}</h4>
                    <span className="text-sm text-gray-500">{fb.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
