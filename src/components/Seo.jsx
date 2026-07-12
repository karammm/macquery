import { useEffect } from 'react'

const SITE_URL = 'https://www.macquery.in'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-route SEO. Updates the document title, description, keywords, canonical
 * and Open Graph / Twitter tags so each page ranks for its own keyword set on
 * Google (Googlebot renders JS). Social scrapers (WhatsApp/Facebook) read the
 * static index.html, so the homepage tags there remain the share defaults.
 */
export default function Seo({ title, description, keywords, path = '/', image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`

    if (title) document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'keywords', keywords)
    setLink('canonical', url)

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', image)

    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)
  }, [title, description, keywords, path, image])

  return null
}
