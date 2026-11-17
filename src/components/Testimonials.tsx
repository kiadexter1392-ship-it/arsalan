import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'علی محمدی',
    role: 'مدیرعامل شرکت دیجی‌تک',
    content: 'تیم نوآوران دیجیتال فوق‌العاده حرفه‌ای عمل کردند. سایت فروشگاهی ما بعد از بازطراحی، ۳ برابر فروش بیشتری داشت. واقعاً راضی هستم.',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    name: 'سارا احمدی',
    role: 'بنیانگذار استارتاپ فودلی',
    content: 'اپلیکیشنی که برایمان ساختند دقیقاً همان چیزی بود که می‌خواستیم. تیم خلاق و متعهد با پشتیبانی عالی.',
    rating: 5,
    avatar: '👩‍💻',
  },
  {
    name: 'رضا کریمی',
    role: 'مدیر بازاریابی شرکت آریا',
    content: 'سئوی سایت ما توسط این تیم انجام شد و در عرض ۳ ماه به صفحه اول گوگل رسیدیم. خدمات فوق‌العاده‌ای دارند.',
    rating: 5,
    avatar: '👨‍🔬',
  },
  {
    name: 'مریم حسینی',
    role: 'صاحب گالری هنری',
    content: 'طراحی سایت گالری ما بسیار زیبا و حرفه‌ای شده. مشتریان ما از تجربه کاربری سایت بسیار راضی هستند.',
    rating: 5,
    avatar: '👩‍🎨',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-medium text-sm tracking-wider">نظرات مشتریان</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            مشتریان ما چه می‌گویند؟
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            رضایت مشتریان بزرگترین افتخار ماست
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote size={40} className="text-primary-500/20 absolute top-6 left-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
