/**
 * Generates MacQuery company brochure PDF (5 pages, A4).
 * Run: npm run brochure
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import PDFDocument from 'pdfkit'
import { PDFDocument as PDFLibDocument } from 'pdf-lib'
import QRCode from 'qrcode'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'brochure')
const OUT_FILE = path.join(OUT_DIR, 'MacQuery-Company-Brochure.pdf')
const LOGO = path.join(ROOT, 'public', 'macquerylogo.png')

const BRAND = '#7e22ce'
const BRAND_BRIGHT = '#9333ea'
const BRAND_SOFT = '#ede9fe'
const INK = '#12121a'
const MUTED = '#4a4a5c'
const LIGHT = '#f6f5fa'
const BORDER = '#e4e2ec'

const PAGE_W = 595.28
const PAGE_H = 841.89
const M = 48

const services = [
  ['Web Development', 'React, Next.js, Angular — fast, SEO-ready web apps & platforms.'],
  ['Mobile Apps', 'React Native & Flutter — iOS/Android apps users love.'],
  ['SEO & Growth', 'Technical SEO, content strategy, and measurable organic growth.'],
  ['Cloud Solutions', 'AWS, GCP, DevOps, Kubernetes — scale with 99.9%+ uptime.'],
  ['AI & Automation', 'LLM integrations, n8n workflows, and intelligent pipelines.'],
  ['UI/UX Design', 'Research-led design systems, prototypes, and conversion-focused UX.'],
  ['3D Design', 'Product renders, character art, and immersive visual experiences.'],
  ['Content Strategy', 'Brand voice, content calendars, and engagement-driven copy.'],
]

const projects = [
  ['Siila.org', 'Wellness discovery · 100K+ concurrent users · AWS, Redis, Angular'],
  ['Magda Gallery', 'Art enterprise platform · 76K+ accounts · Celery, RBAC'],
  ['Abhidhya', 'E-learning · live contests & exams · SolidJS, Google Cloud'],
  ['Meghnify', 'Multi-cloud DevOps · 500+ companies · AWS, Azure, K8s'],
  ['AI Instagram Scraper', 'n8n + AI prompt pipelines · PostgreSQL exports'],
  ['Kumar Jewellers', 'React Native retail app · catalog, WhatsApp, store locator'],
  ['Gola & Silver ERP', 'Ongoing ERP — inventory, billing, operations (retail)'],
]

const team = [
  ['Karamjit Verma', 'Founder & CEO'],
  ['Asmita Verma', 'Managing Director'],
  ['Shivam Sharma', 'Operations Director'],
  ['Hritik Suman', 'Technical Director'],
]

const whyUs = [
  'Industry-specific solutions — not one-size-fits-all templates',
  'Scalable, secure architecture built for real traffic',
  'Senior engineering, design, and delivery leadership',
  'Transparent pricing and milestone-based delivery',
  '1 year free maintenance on eligible engagements',
]

const industries = [
  'Healthcare', 'Education', 'E-Commerce', 'Government',
  'Real Estate', 'Manufacturing', 'Startups & SMEs', 'Finance & FinTech',
]

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function footer(doc, pageNum, total = 5) {
  doc.fontSize(8).fillColor(MUTED).font('Helvetica')
  doc.text('MacQuery · SIILARD LABS LLP · New Delhi, India', M, PAGE_H - 36, {
    width: PAGE_W - M * 2,
    align: 'center',
    lineBreak: false,
  })
  doc.text(`www.macquery.in  ·  Page ${pageNum} of ${total}`, M, PAGE_H - 24, {
    width: PAGE_W - M * 2,
    align: 'center',
    lineBreak: false,
  })
}

function createSinglePage(render) {
  return new Promise((resolve, reject) => {
    const chunks = []
    const doc = new PDFDocument({
      size: 'A4',
      autoFirstPage: false,
      margins: { top: M, bottom: M, left: M, right: M },
    })
    doc.on('data', (chunk) => chunks.push(chunk))
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)
    doc.addPage()
    doc.x = M
    doc.y = M
    render(doc)
    doc.end()
  })
}

function pageHeader(doc, label, title) {
  doc.rect(0, 0, PAGE_W, 5).fill(BRAND_BRIGHT)
  doc
    .fontSize(9)
    .fillColor(BRAND)
    .font('Helvetica-Bold')
    .text(label.toUpperCase(), M, 32, { characterSpacing: 1.2 })
  doc
    .fontSize(22)
    .fillColor(INK)
    .text(title, M, 48, { width: PAGE_W - M * 2 })
  doc
    .moveTo(M, 78)
    .lineTo(PAGE_W - M, 78)
    .strokeColor(BORDER)
    .lineWidth(1)
    .stroke()
}

function bulletList(doc, items, x, y, width, opts = {}) {
  const { fontSize = 10, lineGap = 6, color = MUTED, maxY = PAGE_H - 90 } = opts
  let cy = y
  doc.fontSize(fontSize).fillColor(color).font('Helvetica')
  for (const item of items) {
    if (cy > maxY) break
    doc.circle(x + 4, cy + 5, 2).fill(BRAND)
    doc.text(item, x + 14, cy, { width: width - 14, lineGap: 2, height: 28, ellipsis: true })
    cy += 34
  }
  return cy
}

function renderCover(doc) {
  doc.rect(0, 0, PAGE_W, PAGE_H).fill('#4c1d95')
  doc.rect(0, PAGE_H * 0.55, PAGE_W, PAGE_H * 0.45).fill('#581c87')

  if (fs.existsSync(LOGO)) {
    doc.image(LOGO, PAGE_W / 2 - 42, 120, { width: 84, height: 84 })
  }

  doc
    .fontSize(42)
    .fillColor('#ffffff')
    .font('Helvetica-Bold')
    .text('MacQuery', 0, 230, { width: PAGE_W, align: 'center' })

  doc
    .fontSize(18)
    .fillColor('#e9d5ff')
    .font('Helvetica')
    .text('Build smart.  Ship fast.', 0, 285, { width: PAGE_W, align: 'center' })

  doc
    .fontSize(11)
    .fillColor('#ddd6fe')
    .text(
      'AI-driven web & mobile apps · scalable cloud · pixel-perfect UI/UX',
      M,
      330,
      { width: PAGE_W - M * 2, align: 'center', lineGap: 4 },
    )

  doc.save()
  doc.roundedRect(M + 40, 400, PAGE_W - (M + 40) * 2, 72, 8).fillOpacity(0.15).fill('#ffffff')
  doc.restore()

  doc
    .fontSize(10)
    .fillColor('#f5f3ff')
    .text('A brand of SIILARD LABS LLP', M, 418, { width: PAGE_W - M * 2, align: 'center' })
  doc.text('New Delhi, India  ·  Serving clients worldwide', M, 438, {
    width: PAGE_W - M * 2,
    align: 'center',
  })

  doc
    .fontSize(9)
    .fillColor('#c4b5fd')
    .text('Company Brochure  ·  2026', 0, PAGE_H - 60, { width: PAGE_W, align: 'center', lineBreak: false })
}

function renderAbout(doc) {
  pageHeader(doc, 'About Us', 'Your full-stack digital partner')
  let y = 95

  doc
    .fontSize(10.5)
    .fillColor(MUTED)
    .font('Helvetica')
    .text(
      'MacQuery is a specialized digital studio under SIILARD LABS LLP. Founded in 2024 in New Delhi, we bridge bold product ideas and production-grade software — from AI automation and cloud scale to mobile apps and design that converts.',
      M,
      y,
      { width: PAGE_W - M * 2, lineGap: 5, align: 'justify', height: 72, ellipsis: true },
    )
  y = 188
  doc.y = y

  doc.fontSize(12).fillColor(INK).font('Helvetica-Bold').text('Why teams choose MacQuery', M, y)
  y += 22
  y = bulletList(doc, whyUs, M, y, PAGE_W - M * 2) + 16

  doc.fontSize(12).fillColor(INK).font('Helvetica-Bold').text('Track record', M, y)
  y += 22

  const stats = [
    ['10+', 'Projects delivered'],
    ['6+', 'Industries served'],
    ['99%', 'Client satisfaction'],
    ['8+', 'Years team experience'],
  ]
  const statW = (PAGE_W - M * 2 - 24) / 4
  stats.forEach(([val, label], i) => {
    const x = M + i * (statW + 8)
    doc.roundedRect(x, y, statW, 58, 6).fill(BRAND_SOFT)
    doc
      .fontSize(20)
      .fillColor(BRAND)
      .font('Helvetica-Bold')
      .text(val, x, y + 12, { width: statW, align: 'center' })
    doc
      .fontSize(8)
      .fillColor(MUTED)
      .font('Helvetica')
      .text(label, x + 4, y + 38, { width: statW - 8, align: 'center' })
  })
  y += 78

  doc.fontSize(12).fillColor(INK).font('Helvetica-Bold').text('Industries we serve', M, y)
  y += 22
  doc.fontSize(9).fillColor(MUTED).font('Helvetica')
  doc.text(industries.join('  ·  '), M, y, { width: PAGE_W - M * 2, lineGap: 4, height: 36, ellipsis: true })
  doc.x = M

  footer(doc, 2)
}

function renderServices(doc) {
  pageHeader(doc, 'Services', 'End-to-end digital capabilities')
  let y = 95

  doc
    .fontSize(10)
    .fillColor(MUTED)
    .font('Helvetica')
    .text(
      'From discovery to launch and beyond — one team for strategy, design, engineering, cloud, and growth.',
      M,
      y,
      { width: PAGE_W - M * 2, lineGap: 4, height: 28, ellipsis: true },
    )
  y = 128
  doc.y = y

  const colW = (PAGE_W - M * 2 - 16) / 2
  services.forEach(([title, desc], i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const x = M + col * (colW + 16)
    const boxY = y + row * 88

    doc.roundedRect(x, boxY, colW, 78, 6).strokeColor(BORDER).lineWidth(1).stroke()
    doc.rect(x, boxY, 4, 78).fill(BRAND_BRIGHT)

    doc
      .fontSize(11)
      .fillColor(INK)
      .font('Helvetica-Bold')
      .text(title, x + 14, boxY + 12, { width: colW - 20, height: 16, ellipsis: true })
    doc
      .fontSize(9)
      .fillColor(MUTED)
      .font('Helvetica')
      .text(desc, x + 14, boxY + 30, { width: colW - 20, lineGap: 3, height: 38, ellipsis: true })
    doc.x = M
    doc.y = boxY + 78
  })

  y = y + Math.ceil(services.length / 2) * 88 + 20

  doc.roundedRect(M, y, PAGE_W - M * 2, 52, 8).fill(BRAND_SOFT)
  doc
    .fontSize(10)
    .fillColor(BRAND)
    .font('Helvetica-Bold')
    .text('Included on eligible projects:', M + 16, y + 12)
  doc
    .fontSize(9.5)
    .fillColor(MUTED)
    .font('Helvetica')
    .text(
      '1 year of free maintenance & support  ·  Milestone-based delivery  ·  Clear communication & documentation',
      M + 16,
      y + 28,
      { width: PAGE_W - M * 2 - 32, height: 24, ellipsis: true },
    )
  doc.y = y + 52

  footer(doc, 3)
}

function renderPortfolio(doc) {
  pageHeader(doc, 'Portfolio', 'Selected success stories')
  let y = 95

  doc
    .fontSize(10)
    .fillColor(MUTED)
    .text('Representative builds across wellness, ed-tech, retail, cloud, and automation.', M, y, {
      width: PAGE_W - M * 2,
      height: 24,
      ellipsis: true,
    })
  y = 118
  doc.y = y

  projects.forEach(([title, desc], i) => {
    const boxY = y + i * 56
    doc.roundedRect(M, boxY, PAGE_W - M * 2, 48, 5).fill(i % 2 === 0 ? LIGHT : '#ffffff')
    doc
      .fontSize(11)
      .fillColor(INK)
      .font('Helvetica-Bold')
      .text(title, M + 14, boxY + 10, { width: PAGE_W - M * 2 - 28, height: 14, ellipsis: true })
    doc
      .fontSize(9)
      .fillColor(MUTED)
      .font('Helvetica')
      .text(desc, M + 14, boxY + 26, { width: PAGE_W - M * 2 - 28, height: 18, ellipsis: true })
    doc.x = M
    doc.y = boxY + 48
  })

  y = y + projects.length * 56 + 10

  doc
    .fontSize(8.5)
    .fillColor(BRAND)
    .font('Helvetica-Oblique')
    .text(
      '"Available, responsive, and the end result exceeded our expectations." — Aymar de Gunzburg, Founder, Siila.org',
      M,
      y,
      { width: PAGE_W - M * 2, lineGap: 3, height: 32, ellipsis: true },
    )

  footer(doc, 4)
}

function renderContact(doc, qrBuffer) {
  pageHeader(doc, 'Let\'s build together', 'Leadership & contact')
  let y = 95

  doc.fontSize(12).fillColor(INK).font('Helvetica-Bold').text('Leadership team', M, y)
  y += 20

  const teamW = (PAGE_W - M * 2 - 12) / 2
  team.forEach(([name, role], i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const x = M + col * (teamW + 12)
    const boxY = y + row * 52
    doc.roundedRect(x, boxY, teamW, 44, 5).strokeColor(BORDER).stroke()
    doc.fontSize(10).fillColor(INK).font('Helvetica-Bold').text(name, x + 12, boxY + 10)
    doc.fontSize(9).fillColor(BRAND).font('Helvetica').text(role, x + 12, boxY + 26)
  })
  y = y + 112

  doc.fontSize(12).fillColor(INK).font('Helvetica-Bold').text('Get in touch', M, y)
  y += 20

  const contacts = [
    ['Email', 'info@macquery.in'],
    ['Phone / WhatsApp', '+91 93802 16302'],
    ['Web', 'www.macquery.in'],
    ['Location', 'New Delhi, India (SIILARD LABS LLP)'],
  ]
  contacts.forEach(([label, value]) => {
    doc.fontSize(9).fillColor(BRAND).font('Helvetica-Bold').text(label, M, y, { lineBreak: false })
    doc.fontSize(10).fillColor(INK).font('Helvetica').text(value, M + 100, y, { lineBreak: false })
    y += 22
  })
  y += 8

  doc
    .fontSize(10)
    .fillColor(MUTED)
    .text('Free consultation · Response within 24 hours · Mon–Sat, 9AM–8PM IST', M, y, {
      height: 16,
      ellipsis: true,
    })
  y += 28
  doc.y = y

  // QR block
  const qrSize = 130
  const qrX = PAGE_W - M - qrSize - 20
  const qrY = y
  const boxH = 200

  doc.roundedRect(M, qrY, PAGE_W - M * 2, boxH, 10).fill(BRAND_SOFT)
  doc.image(qrBuffer, qrX, qrY + 24, { width: qrSize, height: qrSize })

  doc
    .fontSize(14)
    .fillColor(INK)
    .font('Helvetica-Bold')
    .text('Scan to visit our website', M + 20, qrY + 28, { width: qrX - M - 40 })

  doc
    .fontSize(11)
    .fillColor(BRAND)
    .font('Helvetica-Bold')
    .text('www.macquery.in', M + 20, qrY + 52)

  doc
    .fontSize(9.5)
    .fillColor(MUTED)
    .font('Helvetica')
    .text(
      'Explore services, case studies, blog insights, and start your project online. Point your camera at the QR code — no app required.',
      M + 20,
      qrY + 76,
      { width: qrX - M - 36, lineGap: 4, height: 52, ellipsis: true },
    )

  doc
    .fontSize(10)
    .fillColor('#ffffff')
    .font('Helvetica-Bold')
  const ctaY = qrY + boxH - 36
  doc.roundedRect(M + 20, ctaY, 200, 28, 14).fill(BRAND_BRIGHT)
  doc.fillColor('#ffffff').text('Book a free consultation →', M + 20, ctaY + 8, {
    width: 200,
    align: 'center',
  })

  footer(doc, 5)
}

async function build() {
  ensureDir(OUT_DIR)

  const qrBuffer = await QRCode.toBuffer('https://www.macquery.in/', {
    type: 'png',
    width: 280,
    margin: 1,
    color: { dark: INK, light: '#ffffff' },
  })

  const pageBuffers = await Promise.all([
    createSinglePage(renderCover),
    createSinglePage(renderAbout),
    createSinglePage(renderServices),
    createSinglePage(renderPortfolio),
    createSinglePage((doc) => renderContact(doc, qrBuffer)),
  ])

  const merged = await PDFLibDocument.create()
  merged.setTitle('MacQuery — Company Brochure')
  merged.setAuthor('MacQuery / SIILARD LABS LLP')
  merged.setSubject('Digital solutions: web, mobile, AI, cloud')
  merged.setKeywords(['MacQuery', 'web development', 'mobile apps', 'AI', 'cloud', 'India'])

  for (const buffer of pageBuffers) {
    const single = await PDFLibDocument.load(buffer)
    const [copied] = await merged.copyPages(single, [0])
    merged.addPage(copied)
  }

  const pdfBytes = await merged.save()
  fs.writeFileSync(OUT_FILE, pdfBytes)

  console.log(`✓ Brochure saved: ${OUT_FILE} (${merged.getPageCount()} pages)`)
}

build().catch((err) => {
  console.error(err)
  process.exit(1)
})
