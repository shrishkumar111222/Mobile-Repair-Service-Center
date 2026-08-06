/**
 * Hand-built SVG artwork. The demo ships no binary images so the export stays
 * tiny, loads instantly and never hotlinks a third-party photo host.
 */

export function CrackOverlay({ opacity = 0.9 }: { opacity?: number }) {
  return (
    <g stroke="#e2e8f0" strokeWidth="1.1" opacity={opacity} fill="none" strokeLinecap="round">
      <path d="M78 44 60 82l24 26-16 44 30 30-12 40" />
      <path d="M78 44l34 30 28-14 20 44-30 26 26 42" />
      <path d="M60 82 30 96M84 108 46 132M68 152l-34 8M98 182l-30 26M112 74l30-24M140 60l24 30M170 130l22 12M166 172l24 20" />
    </g>
  );
}

/** Stylised phone. `state` switches between a shattered and a restored display. */
export function PhoneArt({ state = 'fixed' }: { state?: 'broken' | 'fixed' }) {
  const broken = state === 'broken';

  return (
    <svg viewBox="0 0 220 400" className="h-full w-full" role="img" aria-label={broken ? 'Smartphone with a shattered display' : 'Smartphone with a restored display'}>
      <defs>
        <linearGradient id={`screen-${state}`} x1="0" y1="0" x2="1" y2="1">
          {broken ? (
            <>
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="45%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#dc2626" />
            </>
          )}
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="200" height="380" rx="34" fill="#0b1220" stroke="#334155" strokeWidth="3" />
      <rect x="22" y="22" width="176" height="356" rx="26" fill={`url(#screen-${state})`} />
      {broken ? (
        <CrackOverlay />
      ) : (
        <g opacity="0.85">
          <rect x="44" y="60" width="132" height="10" rx="5" fill="#ffffff" opacity=".5" />
          <rect x="44" y="84" width="90" height="10" rx="5" fill="#ffffff" opacity=".3" />
          <circle cx="110" cy="215" r="42" fill="none" stroke="#22C55E" strokeWidth="6" />
          <path d="m92 216 13 13 26-27" fill="none" stroke="#22C55E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="44" y="300" width="132" height="10" rx="5" fill="#ffffff" opacity=".3" />
        </g>
      )}
      <rect x="86" y="26" width="48" height="12" rx="6" fill="#0b1220" />
    </svg>
  );
}

type Layout = 'bench' | 'counter' | 'shopfront';

const scenes: Record<string, { title: string; accents: [string, string]; layout: Layout }> = {
  lab: { title: 'Repair Lab', accents: ['#dc2626', '#22c55e'], layout: 'bench' },
  team: { title: 'Technician Team', accents: ['#0ea5e9', '#f59e0b'], layout: 'counter' },
  desk: { title: 'Customer Desk', accents: ['#22c55e', '#0ea5e9'], layout: 'counter' },
  diagnostics: { title: 'Diagnostic Equipment', accents: ['#f59e0b', '#0ea5e9'], layout: 'bench' },
  station: { title: 'Repair Stations', accents: ['#dc2626', '#0ea5e9'], layout: 'bench' },
  storefront: { title: 'Storefront', accents: ['#0ea5e9', '#dc2626'], layout: 'shopfront' },
};

/** A worker: head, shoulders and one arm reaching toward the bench. */
function Person({ x, flip = false }: { x: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} 0) ${flip ? 'scale(-1 1)' : ''}`}>
      <circle cx="0" cy="104" r="17" fill="#43536e" />
      <path d="M0 121c16 0 27 13 30 34h-60c3-21 14-34 30-34Z" fill="#33415a" />
      <path d="M22 132c14 5 22 12 26 22" stroke="#43536e" strokeWidth="10" strokeLinecap="round" fill="none" />
    </g>
  );
}

/**
 * Workshop illustration. Output is fully deterministic (no randomness), so
 * server and client markup always match.
 */
export function LabScene({ variant, label }: { variant: keyof typeof scenes | string; label?: string }) {
  const scene = scenes[variant] ?? scenes.lab;
  const [a, b] = scene.accents;
  const uid = String(variant);

  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label={label ?? scene.title}>
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#16223b" />
          <stop offset="100%" stopColor="#0a1120" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill={`url(#bg-${uid})`} />
      <g opacity=".13" stroke="#94a3b8" strokeWidth="1">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} />
        ))}
      </g>
      <circle cx="86" cy="72" r="74" fill={a} opacity=".15" />
      <circle cx="330" cy="128" r="66" fill={b} opacity=".12" />

      {scene.layout === 'bench' ? (
        <>
          {/* Pegboard tool rack */}
          <rect x="24" y="34" width="118" height="58" rx="6" fill="#101a2e" />
          <g stroke="#7c8ba5" strokeWidth="4" strokeLinecap="round">
            <path d="M44 46v30M36 46h16" />
            <path d="M72 46l10 15-10 15" />
            <path d="M104 46v14a8 8 0 0 0 16 0V46M112 74v6" />
          </g>
          <rect x="30" y="86" width="106" height="4" rx="2" fill="#3d4c66" />

          {/* Diagnostic monitor */}
          <rect x="236" y="46" width="126" height="78" rx="8" fill="#050a14" stroke="#44536c" strokeWidth="3" />
          <g stroke={b} strokeWidth="5" strokeLinecap="round">
            <path d="M252 108V86M268 108V68M284 108V94M300 108V60M316 108V78M332 108V90M348 108V72" />
          </g>
          <path d="M306 124v10h-20v-10" fill="#44536c" />
          <rect x="274" y="134" width="64" height="6" rx="3" fill="#44536c" />

          <Person x={148} />

          {/* Bench */}
          <rect x="16" y="186" width="368" height="13" rx="4" fill="#3a4a67" />
          <rect x="16" y="199" width="368" height="7" fill="#1d283b" />
          <rect x="46" y="206" width="13" height="58" fill="#182236" />
          <rect x="341" y="206" width="13" height="58" fill="#182236" />

          {/* Board under repair */}
          <rect x="150" y="158" width="100" height="28" rx="4" fill="#0d4034" stroke={a} strokeWidth="2" />
          <g fill={a}>
            <rect x="159" y="166" width="18" height="12" rx="2" />
            <rect x="183" y="168" width="11" height="9" rx="1.5" />
            <rect x="200" y="165" width="26" height="6" rx="1.5" />
            <rect x="200" y="175" width="15" height="5" rx="1.5" />
            <rect x="232" y="166" width="10" height="12" rx="2" />
          </g>

          {/* Microscope */}
          <g fill="none" stroke="#7c8ba5" strokeLinecap="round">
            <path d="M300 186v-56" strokeWidth="8" />
            <path d="M300 136h28" strokeWidth="6" />
            <path d="M328 136v16" strokeWidth="10" />
          </g>
          <circle cx="328" cy="162" r="10" fill="#0a1120" stroke={b} strokeWidth="4" />
          <rect x="282" y="178" width="40" height="8" rx="3" fill="#4b5a75" />

          {/* Soldering iron on its stand */}
          <path d="M58 180l30-8" stroke="#8c9ab2" strokeWidth="5" strokeLinecap="round" />
          <path d="M88 172l14-4" stroke={a} strokeWidth="6" strokeLinecap="round" />
          <rect x="52" y="180" width="44" height="6" rx="3" fill="#4b5a75" />
        </>
      ) : null}

      {scene.layout === 'counter' ? (
        <>
          {/* Wall signage + shelves */}
          <rect x="36" y="34" width="150" height="40" rx="8" fill="#101a2e" stroke={a} strokeWidth="2" />
          <g fill={a} opacity=".85">
            <rect x="52" y="48" width="60" height="7" rx="3.5" />
            <rect x="52" y="60" width="96" height="5" rx="2.5" />
          </g>
          <rect x="232" y="44" width="130" height="6" rx="3" fill="#3d4c66" />
          <g fill="#33415a">
            <rect x="244" y="24" width="26" height="20" rx="3" />
            <rect x="280" y="16" width="20" height="28" rx="3" />
            <rect x="310" y="28" width="34" height="16" rx="3" />
          </g>

          <Person x={118} />
          <Person x={286} flip />

          {/* Service counter */}
          <rect x="30" y="176" width="340" height="18" rx="5" fill="#3a4a67" />
          <rect x="46" y="194" width="308" height="72" rx="4" fill="#1b2740" />
          <g stroke="#33415a" strokeWidth="3">
            <path d="M200 194v72M46 226h308" />
          </g>

          {/* Job card + handset on the counter */}
          <rect x="150" y="156" width="46" height="22" rx="3" fill="#e2e8f0" opacity=".9" />
          <g stroke="#64748b" strokeWidth="2.5" strokeLinecap="round">
            <path d="M158 164h30M158 171h20" />
          </g>
          <rect x="218" y="150" width="20" height="28" rx="4" fill="#0a1120" stroke={b} strokeWidth="2.5" />
          <rect x="222" y="155" width="12" height="16" rx="1.5" fill={b} opacity=".55" />
        </>
      ) : null}

      {scene.layout === 'shopfront' ? (
        <>
          {/* Facade */}
          <rect x="34" y="42" width="332" height="48" rx="6" fill="#101a2e" stroke={a} strokeWidth="2" />
          <g fill={a}>
            <rect x="60" y="58" width="120" height="9" rx="4.5" />
            <rect x="60" y="72" width="80" height="6" rx="3" opacity=".6" />
          </g>
          <circle cx="330" cy="66" r="14" fill="none" stroke={b} strokeWidth="4" />
          <path d="M324 66l5 5 9-10" fill="none" stroke={b} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

          {/* Awning */}
          <path d="M28 96h344l-14 26H42Z" fill="#1e2b45" />
          <g stroke={a} strokeWidth="4" opacity=".7">
            <path d="M78 96l-6 26M136 96l-5 26M194 96l-3 26M252 96l-1 26M310 96l1 26" />
          </g>

          {/* Windows + door */}
          <rect x="46" y="134" width="120" height="98" rx="5" fill="#0a1120" stroke="#3d4c66" strokeWidth="3" />
          <rect x="234" y="134" width="120" height="98" rx="5" fill="#0a1120" stroke="#3d4c66" strokeWidth="3" />
          <rect x="176" y="134" width="48" height="98" rx="4" fill="#121d33" stroke="#3d4c66" strokeWidth="3" />
          <circle cx="215" cy="186" r="3.5" fill="#8c9ab2" />

          {/* Window displays */}
          <g fill={b} opacity=".6">
            <rect x="66" y="160" width="34" height="48" rx="5" />
            <rect x="112" y="174" width="38" height="34" rx="4" />
          </g>
          <g fill={a} opacity=".55">
            <rect x="252" y="168" width="40" height="40" rx="5" />
            <rect x="302" y="158" width="34" height="50" rx="5" />
          </g>

          <Person x={200} />

          {/* Pavement */}
          <rect x="0" y="232" width="400" height="10" fill="#3a4a67" />
        </>
      ) : null}

      <rect x="0" y="264" width="400" height="36" fill="#060b15" />
      <rect x="0" y="264" width="400" height="2" fill="#1f2b42" />
    </svg>
  );
}

/** Radial battery health gauge used by the battery section. */
export function BatteryGauge({ percent, label }: { percent: number; label: string }) {
  const r = 52;
  const circumference = 2 * Math.PI * r;
  const dash = (percent / 100) * circumference;
  const color = percent >= 80 ? '#22C55E' : percent >= 50 ? '#f59e0b' : '#DC2626';

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-32 w-32">
        <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
          <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,.09)" strokeWidth="12" />
          <circle
            cx="70"
            cy="70"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center text-2xl font-black text-white">
          {percent}%
        </span>
      </div>
      <div className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
        {label}
      </div>
    </div>
  );
}
