import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/919380216302?text=Hi%20MacQuery%2C%20I%27d%20like%20a%20free%20consultation.'

export default function FloatingCTA() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-purple-600/30 hover:from-purple-400 hover:to-purple-500 transition-all"
      aria-label="Get free quote on WhatsApp"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Get Free Quote</span>
    </motion.a>
  )
}
