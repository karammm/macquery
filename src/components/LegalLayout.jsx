import PageHero from './PageHero'
import Seo from './Seo'
import { LAST_UPDATED } from '../data/legal'

/** Section heading + body wrapper used by every legal page. */
export function LegalSection({ title, children }) {
  return (
    <section className="mb-11">
      <h2 className="text-text font-bold text-lg mb-4">{title}</h2>
      <div className="space-y-4 text-text-secondary text-sm leading-relaxed">{children}</div>
    </section>
  )
}

export function LegalList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 size-1.5 rounded-full bg-purple-400 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** Definition-style rows for addresses and company particulars. */
export function LegalFacts({ rows }) {
  return (
    <dl className="grid sm:grid-cols-[minmax(0,14rem)_1fr] gap-x-8 gap-y-3">
      {rows.map(({ label, value }) => (
        <div key={label} className="contents">
          <dt className="text-text font-medium">{label}</dt>
          <dd className="text-text-secondary">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function LegalTable({ head, rows }) {
  return (
    <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[36rem] text-left text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            {head.map((h) => (
              <th key={h} className="py-3 pr-6 text-text font-semibold align-bottom">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/60 align-top">
              {row.map((cell, j) => (
                <td key={j} className="py-3.5 pr-6 text-text-secondary leading-relaxed">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function LegalLayout({ seo, label, title, intro, children }) {
  return (
    <>
      <Seo {...seo} />
      <PageHero label={label} title={title} subtitle={intro} />
      <div className="site-container pb-24 lg:pb-32">
        <div className="max-w-3xl">
          <p className="text-text-muted text-xs mb-12">Last updated: {LAST_UPDATED}</p>
          {children}
        </div>
      </div>
    </>
  )
}
