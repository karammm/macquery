import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SectionCTA({ to, label = 'View all', className = '' }) {
  return (
    <div className={`site-container flex justify-center py-10 ${className}`}>
      <Link to={to} className="btn-outline text-sm min-w-[220px] justify-center">
        {label}
        <ArrowRight size={14} />
      </Link>
    </div>
  )
}
