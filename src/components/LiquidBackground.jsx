/** Static ambient blobs only — no mouse tracking (better performance) */
export default function LiquidBackground() {
  return (
    <div className="liquid-bg fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="liquid-blob liquid-blob-1" />
      <div className="liquid-blob liquid-blob-2" />
      <div className="liquid-blob liquid-blob-3" />
    </div>
  )
}
