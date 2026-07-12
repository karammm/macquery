import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import { getBlogPostBySlug } from '../data/blogPosts'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <>
        <PageHero
          label="Blog"
          title={<>Article <span className="text-gradient">not found</span></>}
          subtitle="The article you are trying to open does not exist or has been moved."
        />
        <section className="py-16">
          <div className="site-container text-center">
            <Link to="/blog" className="btn-outline text-sm">
              <ArrowLeft size={14} />
              Back to blog
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Seo
        title={`${post.title} | MacQuery Blog`}
        description={post.excerpt}
        keywords={`${post.category}, MacQuery blog, ${post.title}`}
        path={`/blog/${slug}`}
      />
      <PageHero
        label="Blog"
        title={<>{post.title}</>}
        subtitle={post.excerpt}
      />

      <section className="py-16 lg:py-20">
        <article className="site-container max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-xs mb-8">
            <span className="inline-flex items-center gap-1 text-purple-300 bg-purple-500/15 px-2.5 py-1 rounded-full border border-purple-500/20">
              <Tag size={10} />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-text-muted">
              <Calendar size={12} />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-text-muted">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <div className="space-y-5 text-text-secondary leading-relaxed">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border flex justify-start">
            <Link to="/blog" className="btn-outline text-sm">
              <ArrowLeft size={14} />
              Back to all articles
            </Link>
          </div>
        </article>
      </section>
    </>
  )
}
