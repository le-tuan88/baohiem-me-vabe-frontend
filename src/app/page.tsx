import * as motion from "framer-motion/client";
import { ShieldCheck, HeartHandshake, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-rose-500 mb-4" />,
      title: "Chuyên viên kinh nghiệm",
      description: "Đội ngũ tư vấn viên hơn 10 năm kinh nghiệm tư vấn chuyên biệt các gói bảo hiểm dành cho mẹ và bé."
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-rose-500 mb-4" />,
      title: "Đồng hành trọn đời",
      description: "Không chỉ lúc mua nghiệm, chúng tôi cam kết sát cánh cùng gia đình bạn trong suốt hành trình bảo vệ."
    },
    {
      icon: <Clock className="w-10 h-10 text-rose-500 mb-4" />,
      title: "Xử lý bồi thường nhanh",
      description: "Cam kết hỗ trợ làm hồ sơ bồi thường nhanh chóng, minh bạch và tối đa hóa quyền lợi khách hàng."
    }
  ];

  const mockBlogs = [
    {
      id: 1,
      title: "Cần chuẩn bị gì trước khi mua bảo hiểm thai sản?",
      excerpt: "Những lưu ý quan trọng để tối ưu hóa quyền lợi bảo hiểm khi chuẩn bị sinh em bé...",
      date: "12/10/2026",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Gói bảo hiểm giáo dục nào tốt nhất cho trẻ sơ sinh?",
      excerpt: "Phân tích và lựa chọn các giải pháp tích lũy giáo dục an toàn cho tương lai của bé yêu nhà bạn.",
      date: "05/10/2026",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Quy trình giải quyết quyền lợi viện phí chuẩn y tế",
      excerpt: "Hướng dẫn chi tiết từ A-Z cách sử dụng thẻ bảo hiểm sức khỏe khi bé yêu phải nhập viện.",
      date: "28/09/2026",
      image: "https://images.unsplash.com/photo-1623548981442-70b656a87754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-brand-pink/30 py-20 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1608625907409-eb44a49db2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

        <div className="container relative z-10 mx-auto px-4 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text mb-6 leading-tight">
              Bảo vệ mầm non tương lai từ <span className="text-rose-500">những điều nhỏ nhất</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
              Cùng Dai-ichi Life kiến tạo một nền tảng vững chắc cho sự phát triển toàn diện của bé yêu. Hãy để chúng tôi đồng hành cùng gia đình bạn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/lien-he" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-center">
                Đăng Ký Tư Vấn
              </Link>
              <Link href="/blog" className="bg-white border-2 border-brand-mint text-brand-text hover:bg-brand-mint hover:text-brand-text px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto text-center">
                Tìm Hiểu Thêm
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-semibold tracking-wider uppercase text-sm">Điểm khác biệt</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mt-2">Tại Sao Chọn Chúng Tôi?</h2>
            <div className="w-24 h-1 bg-brand-mint mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-brand-pink/10 p-8 rounded-3xl border border-brand-pink hover:shadow-xl hover:-translate-y-2 transition-all text-center flex flex-col items-center"
              >
                <div className="bg-white p-4 rounded-full shadow-sm mb-6 inline-flex border border-brand-pink/50">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-brand-mint/20 border-y border-brand-mint/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-500 uppercase tracking-widest font-semibold mb-8">Đối Tác Uy Tín</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
            {/* Mock logo for Dai-ichi Life */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all font-bold text-2xl">
              <ShieldCheck className="text-red-600" />
              <span className="tracking-tighter">DAI-ICHI LIFE</span>
            </div>
            {/* More mock logos placeholder */}
            <div className="h-8 md:h-12 w-32 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-8 md:h-12 w-32 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-8 md:h-12 w-32 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-rose-500 font-semibold tracking-wider uppercase text-sm">Cập nhật</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text mt-2">Kiến Thức Mới Nhất</h2>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-rose-500 font-semibold hover:text-rose-600 transition-colors">
              Xem tất cả <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockBlogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.id}`} className="group h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col"
                >
                  <div className="h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand-pink/20 z-10 group-hover:opacity-0 transition-opacity"></div>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm text-gray-400 font-medium mb-3 block">{blog.date}</span>
                    <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-rose-500 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {blog.excerpt}
                    </p>
                    <span className="text-brand-mint font-semibold uppercase text-sm tracking-wider flex items-center gap-1 mt-auto">
                      Đọc tiếp <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 text-rose-500 font-semibold hover:text-rose-600 transition-colors">
              Xem tất cả bài viết <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
