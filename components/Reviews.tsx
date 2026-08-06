import { Section, SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import Icon from './ui/Icons';

const reviews = [
  {
    name: 'Ananya Rao',
    initials: 'AR',
    device: 'iPhone 14 Pro',
    service: 'Screen Replacement',
    location: 'Indiranagar',
    rating: 5,
    text: 'Quoted ₹2,000 less than the authorised centre and finished in under an hour. They showed me the old display and the new service-pack box before fitting it. Genuinely the most transparent repair experience I have had.',
  },
  {
    name: 'Rahul Mehta',
    initials: 'RM',
    device: 'MacBook Pro 16"',
    service: 'Liquid Damage Recovery',
    location: 'Koramangala',
    rating: 5,
    text: 'Two other shops said the logic board was dead and quoted a full replacement. These guys cleaned and repaired the board in 36 hours. Every file intact. They saved me close to a lakh.',
  },
  {
    name: 'Priya Nair',
    initials: 'PN',
    device: 'Samsung Galaxy S23',
    service: 'Battery Replacement',
    location: 'Whitefield',
    rating: 5,
    text: 'Free health check first, then a clear recommendation instead of an instant upsell. Battery swapped in 25 minutes and the phone lasts a full day again. Warranty was printed on the bill.',
  },
  {
    name: 'Imran Sheikh',
    initials: 'IS',
    device: 'Dell XPS 15',
    service: 'Motherboard Repair',
    location: 'HSR Layout',
    rating: 5,
    text: 'Chip-level work done properly. They sent photos of the board under the microscope at each stage and explained which IC had failed. My laptop has been stable for six months since.',
  },
  {
    name: 'Sneha Kulkarni',
    initials: 'SK',
    device: 'iPad Air',
    service: 'Glass & Digitiser',
    location: 'Jayanagar',
    rating: 5,
    text: 'Booked over WhatsApp, they arranged free pickup and drop, and kept me updated the whole day. The screen is indistinguishable from the original. Zero hassle.',
  },
  {
    name: 'Vikram Desai',
    initials: 'VD',
    device: 'OnePlus 12',
    service: 'Charging Port Repair',
    location: 'Marathahalli',
    rating: 5,
    text: 'Walked in at 7 pm with a phone that would not charge and walked out at 8 pm with it fixed. Fair price, no drama, and they refused to charge for the diagnosis.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          name="star"
          className={`h-4 w-4 ${i < count ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <Section id="reviews" tone="deep">
      <div className="container-x">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="4.9 stars across 1,284 verified repairs"
          subtitle="Every review below comes from a customer with a job card in our system — device, service and location included."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 0.08}>
              <figure className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-red-fade text-sm font-black text-white">
                    {review.initials}
                  </span>
                  <div className="min-w-0">
                    <figcaption className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-white">{review.name}</span>
                      <span className="flex items-center gap-1 rounded-full bg-success-green/15 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-success-green">
                        <Icon name="check" className="h-3 w-3" /> Verified
                      </span>
                    </figcaption>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-400">
                      <Icon name="pin" className="h-3.5 w-3.5" /> {review.location}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <Stars count={review.rating} />
                </div>

                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                  “{review.text}”
                </blockquote>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4 text-[11px] font-bold uppercase tracking-wider">
                  <span className="rounded-md bg-white/5 px-2.5 py-1 text-slate-300">{review.device}</span>
                  <span className="rounded-md bg-repair-red/15 px-2.5 py-1 text-red-300">{review.service}</span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
