import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const footerLinks = {
  services: {
    title: 'خدمات',
    links: ['طراحی وب‌سایت', 'اپلیکیشن موبایل', 'فروشگاه آنلاین', 'سئو و بهینه‌سازی', 'طراحی UI/UX'],
  },
  company: {
    title: 'شرکت',
    links: ['درباره ما', 'تیم ما', 'بلاگ', 'فرصت‌های شغلی', 'تماس با ما'],
  },
  support: {
    title: 'پشتیبانی',
    links: ['سوالات متداول', 'مرکز راهنما', 'قوانین و مقررات', 'حریم خصوصی', 'گارانتی خدمات'],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">ن</span>
              </div>
              <span className="text-white font-bold text-xl">نوآوران دیجیتال</span>
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              ما با ارائه خدمات حرفه‌ای طراحی و توسعه وب، به کسب‌وکارها کمک می‌کنیم تا در دنیای دیجیتال رشد کنند.
            </p>
            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-all"
                dir="ltr"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl text-sm font-medium"
              >
                عضویت
              </motion.button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-white font-bold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            ساخته شده با <Heart size={14} className="text-red-500 fill-red-500" /> توسط تیم نوآوران دیجیتال
          </p>
          <p className="text-gray-500 text-sm">
            © ۱۴۰۳ تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
