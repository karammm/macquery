/** Animated CPU-style circuit diagram — AI / systems visual for Powered by Innovation */
export default function CpuArchitecture({ label = 'MacQuery' }) {
  const id = (name) => `mq-${name}`

  return (
    <div className="flex items-center justify-center relative w-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.08),transparent_70%)] pointer-events-none" />
      <div className="w-full max-w-4xl aspect-[2/1] relative z-10">
        <svg className="w-full h-full text-zinc-800" width="100%" height="100%" viewBox="0 0 200 100" aria-hidden>
          <g stroke="currentColor" fill="none" strokeWidth="0.3" strokeDasharray="100 100" pathLength="100" markerStart={`url(#${id('circle-marker')})`}>
            <path strokeDasharray="100 100" pathLength="100" d="M 10 20 h 79.5 q 5 0 5 5 v 30" />
            <path strokeDasharray="100 100" pathLength="100" d="M 180 10 h -69.7 q -5 0 -5 5 v 30" />
            <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" />
            <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" />
            <path strokeDasharray="100 100" pathLength="100" d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" />
            <path d="M 94.8 95 v -36" />
            <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" />
            <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" />
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1" />
          </g>

          <g mask={`url(#${id('mask-1')})`}>
            <circle className="cpu-architecture cpu-line-1" cx="0" cy="0" r="8" fill={`url(#${id('blue-grad')})`} />
          </g>
          <g mask={`url(#${id('mask-2')})`}>
            <circle className="cpu-architecture cpu-line-2" cx="0" cy="0" r="8" fill={`url(#${id('yellow-grad')})`} />
          </g>
          <g mask={`url(#${id('mask-3')})`}>
            <circle className="cpu-architecture cpu-line-3" cx="0" cy="0" r="8" fill={`url(#${id('pinkish-grad')})`} />
          </g>
          <g mask={`url(#${id('mask-4')})`}>
            <circle className="cpu-architecture cpu-line-4" cx="0" cy="0" r="8" fill={`url(#${id('white-grad')})`} />
          </g>
          <g mask={`url(#${id('mask-5')})`}>
            <circle className="cpu-architecture cpu-line-5" cx="0" cy="0" r="8" fill={`url(#${id('green-grad')})`} />
          </g>
          <g mask={`url(#${id('mask-6')})`}>
            <circle className="cpu-architecture cpu-line-6" cx="0" cy="0" r="8" fill={`url(#${id('orange-grad')})`} />
          </g>
          <g mask={`url(#${id('mask-7')})`}>
            <circle className="cpu-architecture cpu-line-7" cx="0" cy="0" r="8" fill={`url(#${id('cyan-grad')})`} />
          </g>
          <g mask={`url(#${id('mask-8')})`}>
            <circle className="cpu-architecture cpu-line-8" cx="0" cy="0" r="8" fill={`url(#${id('rose-grad')})`} />
          </g>

          <g>
            <g fill={`url(#${id('connection-gradient')})`}>
              <rect x="93" y="37" width="2.5" height="5" rx="0.7" />
              <rect x="104" y="37" width="2.5" height="5" rx="0.7" />
              <rect x="116.3" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
              <rect x="122.8" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
              <rect x="104" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
              <rect x="114.5" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
              <rect x="80" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
              <rect x="87" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
            </g>
            <rect x="80" y="40" width="40" height="20" rx="2" fill="#181818" filter={`url(#${id('light-shadow')})`} />
            <text x="100" y="52.5" fontSize="7" fill={`url(#${id('text-gradient')})`} fontWeight="600" letterSpacing="0.05em" textAnchor="middle">
              {label}
            </text>
          </g>

          <defs>
            <mask id={id('mask-1')}><path d="M 10 20 h 79.5 q 5 0 5 5 v 24" strokeWidth="0.5" stroke="white" /></mask>
            <mask id={id('mask-2')}><path d="M 180 10 h -69.7 q -5 0 -5 5 v 24" strokeWidth="0.5" stroke="white" /></mask>
            <mask id={id('mask-3')}><path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" strokeWidth="0.5" stroke="white" /></mask>
            <mask id={id('mask-4')}><path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" strokeWidth="0.5" stroke="white" /></mask>
            <mask id={id('mask-5')}><path d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" strokeWidth="0.5" stroke="white" /></mask>
            <mask id={id('mask-6')}><path d="M 94.8 95 v -36" strokeWidth="0.5" stroke="white" /></mask>
            <mask id={id('mask-7')}><path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" strokeWidth="0.5" stroke="white" /></mask>
            <mask id={id('mask-8')}><path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" strokeWidth="0.5" stroke="white" /></mask>

            <radialGradient id={id('blue-grad')} fx="1">
              <stop offset="0%" stopColor="#00E8ED" />
              <stop offset="50%" stopColor="#08F" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id={id('yellow-grad')} fx="1">
              <stop offset="0%" stopColor="#FFD800" />
              <stop offset="50%" stopColor="#FFD800" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id={id('pinkish-grad')} fx="1">
              <stop offset="0%" stopColor="#830CD1" />
              <stop offset="50%" stopColor="#FF008B" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id={id('white-grad')} fx="1">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id={id('green-grad')} fx="1">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id={id('orange-grad')} fx="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id={id('cyan-grad')} fx="1">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id={id('rose-grad')} fx="1">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            <filter id={id('light-shadow')} x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodColor="black" floodOpacity="0.1" />
            </filter>

            <marker id={id('circle-marker')} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="18" markerHeight="18">
              <circle cx="5" cy="5" r="2" fill="black" stroke="#232323" strokeWidth="0.5">
                <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
              </circle>
            </marker>

            <linearGradient id={id('connection-gradient')} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F4F4F" />
              <stop offset="60%" stopColor="#121214" />
            </linearGradient>

            <linearGradient id={id('text-gradient')} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#666666">
                <animate attributeName="offset" values="-2; -1; 0" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
              </stop>
              <stop offset="25%" stopColor="#c084fc">
                <animate attributeName="offset" values="-1; 0; 1" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
              </stop>
              <stop offset="50%" stopColor="#666666">
                <animate attributeName="offset" values="0; 1; 2" dur="5s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
