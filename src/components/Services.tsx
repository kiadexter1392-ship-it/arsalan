import { motion } from 'framer-motion';
import { Globe, Smartphone, ShoppingCart, Search, Palette, Server } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'طراحی وب‌سایت',
    description: 'طراحی وب‌سایت‌های مدرن، واکنش‌گرا و بهینه‌شده با آخرین تکنولوژی‌ها',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'اپلیکیشن موبایل',
    description: 'توسعه اپلیکیشن‌های iOS و Android با عملکرد بالا و طراحی جذاب',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: ShoppingCart,
    title: 'فروشگاه آنلاین',
    description: 'راه‌اندازی فروشگاه اینترنتی حرفه‌ای با سیستم پرداخت امن',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Search,
    title: 'سئو و بهینه‌سازی',
    description: 'بهینه‌سازی سایت برای موتورهای جستجو و افزایش رتبه در گوگل',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'طراحی رابط کاربری',
    description: 'طراحی UI/UX حرفه‌ای با تمرکز بر تجربه کاربری عالی',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Server,
    title: 'هاستینگ و پشتیبانی',
    description: 'خدمات میزبانی وب سریع و مطمئن با پشتیبانی ۲۴ ساعته',
    color: 'from-indigo-500 to-violet-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-medium text-sm tracking-wider">خدمات ما</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            چه کاری برایتان انجام می‌دهیم؟
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ما طیف گسترده‌ای از خدمات دیجیتال را ارائه می‌دهیم تا کسب‌وکار شما در دنیای آنلاین بدرخشد
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
