import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'فروشگاه آنلاین دیجی‌استایل',
    category: 'فروشگاه اینترنتی',
    description: 'طراحی و توسعه فروشگاه آنلاین مد و پوشاک با سیستم پرداخت امن',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-blue-600 to-cyan-500',
    image: '🛍️',
  },
  {
    title: 'اپلیکیشن مدیریت پروژه',
    category: 'نرم‌افزار سازمانی',
    description: 'پلتفرم مدیریت پروژه تیمی با قابلیت همکاری آنلاین',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    gradient: 'from-purple-600 to-pink-500',
    image: '📊',
  },
  {
    title: 'پلتفرم آموزش آنلاین',
    category: 'آموزش',
    description: 'سامانه آموزش آنلاین با ویدیو کنفرانس و سیستم آزمون',
    tags: ['Vue.js', 'Django', 'WebRTC'],
    gradient: 'from-orange-500 to-red-500',
    image: '🎓',
  },
  {
    title: 'اپلیکیشن سلامت و تناسب اندام',
    category: 'موبایل',
    description: 'اپلیکیشن موبایل ردیابی سلامت و برنامه‌ریزی ورزشی',
    tags: ['React Native', 'Firebase', 'AI'],
    gradient: 'from-green-500 to-emerald-500',
    image: '💪',
  },
  {
    title: 'داشبورد تحلیلی',
    category: 'تحلیل داده',
    description: 'داشبورد تحلیلی پیشرفته با نمودارهای تعاملی و گزارش‌گیری',
    tags: ['React', 'D3.js', 'Python'],
    gradient: 'from-indigo-500 to-violet-500',
    image: '📈',
  },
  {
    title: 'شبکه اجتماعی محلی',
    category: 'شبکه اجتماعی',
    description: 'پلتفرم ارتباطی محلی با قابلیت چت و اشتراک‌گذاری',
    tags: ['React', 'Socket.io', 'Redis'],
    gradient: 'from-pink-500 to-rose-500',
    image: '🌐',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-medium text-sm tracking-wider">نمونه کارها</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            پروژه‌های اخیر ما
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            نگاهی به برخی از پروژه‌های موفقی که برای مشتریانمان انجام داده‌ایم
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300"
            >
              {/* Project Image/Visual */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                <span className="text-6xl">{project.image}</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                  >
                    <ExternalLink size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                  >
                    <Github size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-primary-400 font-medium">{project.category}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
