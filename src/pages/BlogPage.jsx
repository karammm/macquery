import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import PageHero from '../components/PageHero'
import { blogPosts as posts } from '../data/blogPosts'

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title={<>Insights from the <span className="text-gradient">MacQuery</span> team</>}
        subtitle="Engineering notes, architecture deep-dives, and lessons from shipping products for startups and enterprises."
      />

      <section className="py-20">
        <div className="site-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl glass-card overflow-hidden flex flex-col"
              >
                <div className="h-40 bg-gradient-to-br from-purple-600/30 to-violet-900/20 flex items-end p-5">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-purple-300 bg-purple-500/15 px-2.5 py-1 rounded-full border border-purple-500/20">
                    <Tag size={10} />
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-text-muted text-xs mb-3">
                    <Calendar size={12} />
                    {post.date}
                    <span>·</span>
                    {post.readTime}
                  </div>
                  <h2 className="text-text font-semibold text-lg mb-3 group-hover:text-purple-300 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 text-sm font-medium">
                    Read article
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </Motion.article>
            ))}
          </div>

          <p className="text-center text-text-muted text-sm mt-14">
            Full articles coming soon. Subscribe via{' '}
            <Link to="/contact" className="text-purple-400 hover:text-purple-300">contact</Link>
            {' '}for updates.
          </p>
        </div>
      </section>
    </>
  )
}
