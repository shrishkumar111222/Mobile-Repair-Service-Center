import Counter from './ui/Counter';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';

const stats = [
  { value: 10000, suffix: '+', label: 'Devices Repaired', icon: 'wrench' },
  { value: 5000, suffix: '+', label: 'Happy Customers', icon: 'user' },
  { value: 98, suffix: '%', label: 'Repair Success Rate', icon: 'chart' },
  { value: 10, suffix: '+ Yrs', label: 'Years of Experience', icon: 'award' },
  { value: 30, suffix: ' Min', label: 'Free Diagnostics', icon: 'clock' },
];

export default function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-deep-blue py-14">
      <div className="absolute inset-0 bg-grid bg-grid opacity-40" aria-hidden="true" />
      <div className="container-x relative grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="glass glass-hover h-full rounded-2xl p-5 text-center">
              <Icon name={stat.icon} className="mx-auto h-6 w-6 text-repair-red" />
              <p className="mt-3 text-3xl font-black tracking-tight text-white lg:text-4xl">
                <Counter value={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
