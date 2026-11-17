import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  { icon: MapPin, label: 'آدرس', value: 'تهران، خیابان ولیعصر، پلاک ۱۲۳' },
  { icon: Phone, label: 'تلفن', value: '۰۲۱-۱۲۳۴۵۶۷۸' },
  { icon: Mail, label: 'ایمیل', value: 'info@noavaran.digital' },
  { icon: Clock, label: 'ساعت کاری', value: 'شنبه تا پنجشنبه ۹ تا ۱۸' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-medium text-sm tracking-wider">تماس با ما</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            با ما در ارتباط باشید
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            آماده شنیدن ایده‌های شما هستیم. فرم زیر را پر کنید تا در اسرع وقت با شما تماس بگیریم.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 glass-card rounded-xl p-5 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={22} className="text-primary-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                  <div className="text-white font-medium mt-1">{item.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="glass-card rounded-xl p-5">
              <div className="text-gray-400 text-sm mb-4">ما را در شبکه‌های اجتماعی دنبال کنید</div>
              <div className="flex gap-3">
                {['instagram', 'telegram', 'twitter', 'linkedin'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                  >
                    <i className={`fab fa-${social} text-lg`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all"
                    placeholder="نام شما"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">ایمیل</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all"
                    placeholder="email@example.com"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">شماره تماس</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">موضوع</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all"
                  >
                    <option value="" className="bg-gray-900">انتخاب کنید</option>
                    <option value="web" className="bg-gray-900">طراحی وب‌سایت</option>
                    <option value="app" className="bg-gray-900">اپلیکیشن موبایل</option>
                    <option value="seo" className="bg-gray-900">سئو و بهینه‌سازی</option>
                    <option value="other" className="bg-gray-900">سایر</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">پیام شما</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all resize-none"
                  placeholder="پیام خود را بنویسید..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300"
              >
                <Send size={20} />
                ارسال پیام
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
