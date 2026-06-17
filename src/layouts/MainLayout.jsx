import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingCTA from '../components/FloatingCTA'
import SmoothScroll from '../components/SmoothScroll'
import ScrollProgress from '../components/ScrollProgress'
import LiquidBackground from '../components/LiquidBackground'

export default function MainLayout() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-bg flex flex-col relative">
        <LiquidBackground />
        <ScrollProgress />
        <div className="relative z-50">
          <Navbar />
        </div>
        <main className="flex-1 relative z-10">
          <Outlet />
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
        <FloatingCTA />
      </div>
    </SmoothScroll>
  )
}
