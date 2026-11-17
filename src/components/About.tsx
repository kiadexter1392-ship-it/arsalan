import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Zap } from 'lucide-react';

const features = [
  'تیم متخصص و با تجربه',
  'استفاده از جدیدترین تکنولوژی‌ها',
  'تحویل به‌موقع پروژه‌ها',
  'پشتیبانی ۲۴ ساعته',
  'قیمت‌گذاری منصفانه',
  'گارانتی کیفیت',
];

const highlights = [
  { icon: Users, value: '۵۰+', label: 'متخصص حرفه‌ای' },
  { icon: Award, value: '۱۵+', label: 'جایزه و افتخار' },
  { icon: Zap, value: '۹۹٪', label: 'رضایت مشتریان' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary-400 font-medium text-sm tracking-wider">درباره ما</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              ما به <span className="gradient-text">نوآوری</span> اعتقاد داریم
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              تیم نوآوران دیجیتال با بیش از ۵ سال تجربه در زمینه طراحی و توسعه وب،
              همواره در تلاش است تا بهترین راه‌حل‌های دیجیتال را برای کسب‌وکارهای ایرانی ارائه دهد.
              ما با ترکیب خلاقیت و تکنولوژی، پروژه‌هایی می‌سازیم که تفاوت ایجاد می‌کنند.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-accent-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl font-medium hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300"
            >
              بیشتر بدانید
            </motion.a>
          </motion.div>

          {/* Left Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative glass-card rounded-3xl p-8 md:p-10">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-20 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl opacity-20 blur-sm" />

              {/* Stats Grid */}
              <div className="grid grid-cols-1 gap-6">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                      <item.icon size={24} className="text-primary-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{item.value}</div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bars */}
              <div className="mt-8 space-y-4">
                {[
                  { label: 'React & Next.js', value: 95 },
                  { label: 'UI/UX Design', value: 90 },
                  { label: 'Backend Development', value: 85 },
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{skill.label}</span>
                      <span className="text-primary-400">{skill.value}٪</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
