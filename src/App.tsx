import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type FormEvent,
} from 'react';
import {
  Palmtree,
  Waves,
  Fish,
  Sailboat,
  Star,
  MapPin,
  Clock,
  Users,
  Check,
  Menu,
  X,
  ChevronDown,
  Quote,
  Instagram,
  Facebook,
  Mail,
  Phone,
  ArrowRight,
  Shield,
  Award,
  Sparkles,
  Calendar,
  Languages,
  ThumbsUp,
} from 'lucide-react';

const heroImage = '/images/cards/WhatsApp_Image_2026-09-03_at_4.17.12_PM.jpeg';
const ctaImage = '/images/cards/WhatsApp_Image_2026-09-03_at_4.18.16_PM.jpeg';

const galleryImages = [
  { url: '/images/cards/1.jpeg', alt: 'Jungle buggy group tour', label: 'Jungle Buggy Group Tour', span: 'lg:row-span-2' },
  { url: '/images/cards/2.jpeg', alt: 'Quad bike adventure', label: 'Quad Bike Adventure', span: '' },
  { url: '/images/cards/3.jpeg', alt: 'Jungle buggy expedition', label: 'Jungle Buggy Expedition', span: '' },
  { url: '/images/cards/4.jpeg', alt: 'Private buggy ride', label: 'Private Buggy Ride', span: 'lg:row-span-2' },
  { url: '/images/cards/e.jpeg', alt: 'Snorkeling with tropical fish', label: 'Snorkeling Experience', span: '' },
  { url: '/images/cards/q.jpeg', alt: 'Adventure tour', label: 'Adventure Tour', span: '' },
  { url: '/images/cards/r.jpeg', alt: 'Island exploration', label: 'Island Exploration', span: '' },
  { url: '/images/cards/w.jpeg', alt: 'Caribbean experience', label: 'Caribbean Experience', span: '' },
];

const experiences = [
  {
    icon: Users,
    image: '/images/cards/1.jpeg',
    title: 'Jungle Buggy Group Tour',
    description: 'Share an unforgettable off-road adventure with your group, splashing through tropical trails and discovering the island beyond the beach.',
    duration: 'Half day',
    price: '$75',
    badge: 'Most Popular',
  },
  {
    icon: Waves,
    image: '/images/cards/2.jpeg',
    title: 'Quad Bike Adventure',
    description: 'Take control of a powerful quad and ride through wild Dominican paths, muddy crossings, and lush green scenery.',
    duration: '3 hours',
    price: '$65',
    badge: '',
  },
  {
    icon: Sailboat,
    image: '/images/cards/3.jpeg',
    title: 'Jungle Buggy Expedition',
    description: 'Ride through rainforest trails in a buggy convoy and experience the thrill of the island with friends and family.',
    duration: 'Half day',
    price: '$79',
    badge: '',
  },
  {
    icon: Palmtree,
    image: '/images/cards/4.jpeg',
    title: 'Private Buggy Ride',
    description: 'Enjoy a flexible buggy outing for two with sunny roads, tropical views, and plenty of stops for photos along the way.',
    duration: '2.5 hours',
    price: '$85',
    badge: 'Premium',
  },
  {
    icon: Fish,
    image: '/images/cards/e.jpeg',
    title: 'Snorkeling with Tropical Fish',
    description: 'Swim in clear Caribbean water surrounded by colorful fish for a calm, memorable underwater experience.',
    duration: '2 hours',
    price: '$45',
    badge: '',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'Absolutely the most beautiful beach I have ever seen. The catamaran tour was worth every penny — crystal clear water, friendly crew, and a perfect day from start to finish.',
  },
  {
    name: "James O'Connor",
    location: 'Dublin, Ireland',
    rating: 5,
    text: 'Saona Island is paradise on earth. The natural pool with starfish was surreal, and the snorkeling was incredible. Our guide made the whole experience effortless.',
  },
  {
    name: 'Maria Santos',
    location: 'Madrid, Spain',
    rating: 5,
    text: 'A dream come true. From the boat ride to the beach BBQ, everything was organized perfectly. The white sand and turquoise water look even better than the photos.',
  },
];

const faqs = [
  {
    q: 'How do I get to Saona Island?',
    a: 'All tours include round-trip transportation from your hotel in Punta Cana or Bayahibe to the departure port, followed by a catamaran or speedboat ride to the island.',
  },
  {
    q: 'What is included in the tour?',
    a: 'Every tour includes hotel pickup, boat transfer, a guided island tour, a Dominican-style buffet lunch, and unlimited national drinks. Snorkeling gear is provided at no extra cost.',
  },
  {
    q: 'Is the tour suitable for families with children?',
    a: 'Yes! Saona Island tours are family-friendly. The waters are calm and shallow near the natural pool, making it safe and fun for children of all ages.',
  },
  {
    q: 'What should I bring?',
    a: 'We recommend swimwear, sunscreen, a hat, sunglasses, a towel, and a waterproof bag for your phone and valuables. Water shoes are optional but helpful near the reef.',
  },
];

const trustBadges = [
  { icon: Shield, label: 'Safe & Insured', sub: 'All tours covered' },
  { icon: Award, label: 'Top Rated', sub: '4.9/5 from 2,000+ reviews' },
  { icon: Languages, label: 'Bilingual Guides', sub: 'English & Spanish' },
  { icon: ThumbsUp, label: 'Free Cancellation', sub: 'Up to 24 hours before' },
];

const navLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let observer: IntersectionObserver | null = null;
    const fallback = window.setTimeout(() => setVisible(true), 2000);
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer?.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => {
      observer?.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`section-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-14">
      <span
        className={`text-sm font-semibold uppercase tracking-[0.2em] ${
          light ? 'text-coral-400' : 'text-coral-500'
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-3xl md:text-5xl font-bold mt-3 mb-4 ${
          light ? 'text-white' : 'text-brand-800'
        }`}
      >
        {title}
      </h2>
      <div className="divider-line mx-auto mb-5" />
      {subtitle && (
        <p
          className={`max-w-2xl mx-auto leading-relaxed ${
            light ? 'text-brand-100' : 'text-brand-700'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-900/95 backdrop-blur-xl shadow-2xl py-3'
          : 'bg-gradient-to-b from-brand-900/50 to-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 text-white group">
          <div className="w-10 h-10 rounded-xl bg-brand-500/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-brand-500/30 transition-colors">
            <Palmtree className="w-6 h-6 text-brand-300" />
          </div>
          <div>
            <span className="block text-lg font-bold tracking-wide leading-none">
              Saona Bliss
            </span>
            <span className="block text-[10px] text-brand-300 tracking-[0.2em] uppercase mt-0.5">
              Dominican Republic
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 hover:text-brand-300 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#booking"
            className="btn-primary text-sm px-6 py-2.5 flex items-center gap-2"
          >
            Book Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden glass-dark mt-3 mx-4 rounded-2xl py-4 px-6 flex flex-col gap-4 animate-slideDown">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-white/85 hover:text-brand-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="btn-primary text-sm px-6 py-2.5 text-center"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Saona Island tropical beach"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-brand-100 text-sm font-medium px-5 py-2.5 rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-coral-400" />
            Rated #1 Island Tour in the Dominican Republic
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white text-shadow-hero leading-[1.1] mb-6">
            Escape to{' '}
            <span className="shimmer-text">Saona Island</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg sm:text-xl text-brand-50 text-shadow-hero mb-10 max-w-2xl mx-auto leading-relaxed">
            Pristine white sands, turquoise waters, and swaying palms await.
            Book your unforgettable Caribbean adventure today.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#booking"
              className="btn-primary px-8 py-4 text-base flex items-center gap-2"
            >
              Book Your Tour
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#gallery" className="btn-ghost px-8 py-4 text-base">
              View Gallery
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-300" /> Free hotel pickup
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-300" /> All-inclusive packages
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-300" /> Daily departures
            </span>
          </div>
        </Reveal>
      </div>

      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}

function TrustBadges() {
  return (
    <section id="trust" className="bg-brand-900 py-14 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, i) => (
            <Reveal key={badge.label} delay={i * 100}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-brand-800 group-hover:bg-brand-700 flex items-center justify-center mb-3 transition-colors">
                  <badge.icon className="w-7 h-7 text-brand-300" />
                </div>
                <div className="text-white font-semibold text-sm">
                  {badge.label}
                </div>
                <div className="text-brand-300 text-xs mt-1">{badge.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: '15K+', label: 'Happy Travelers' },
    { value: '4.9', label: 'Average Rating' },
    { value: '100%', label: 'All-Inclusive' },
    { value: 'Daily', label: 'Departures' },
  ];

  return (
    <section className="bg-brand-800 py-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-300">
                {stat.value}
              </div>
              <div className="text-sm text-brand-100 mt-1">{stat.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <section id="experiences" className="py-24 bg-sand-50 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-coral-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="What You'll Experience"
            title="Unforgettable Island Adventures"
            subtitle="From catamaran cruises to snorkeling in vibrant coral reefs, every moment on Saona Island is designed to take your breath away."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {experiences.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 100}>
              <div className="glass-card rounded-3xl overflow-hidden card-lift h-full flex flex-col group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
                  {exp.badge && (
                    <span className="absolute top-4 right-4 bg-coral-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                      <exp.icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-800">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-sm text-brand-600 leading-relaxed mb-6 flex-grow">
                    {exp.description}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-brand-50">
                    <span className="flex items-center gap-1.5 text-xs text-brand-500">
                      <Clock className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="text-2xl font-bold text-coral-600">
                      {exp.price}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Moments Worth Capturing"
            subtitle="A glimpse of the paradise that awaits you on Saona Island."
          />
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.url + i}
              delay={i * 60}
              className={img.span}
            >
              <div className="relative group rounded-2xl overflow-hidden shadow-md card-lift h-full">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-white font-medium text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-300" />
                    {img.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <img
        src={ctaImage}
        alt="Saona Island aerial view"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-900/80" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <Sparkles className="w-10 h-10 text-coral-400 mx-auto mb-6 animate-float" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Ready for the Adventure of a Lifetime?
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Join thousands of travelers who've experienced the magic of Saona
            Island. Limited spots available daily.
          </p>
          <a
            href="#booking"
            className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2"
          >
            Reserve Your Spot
            <ArrowRight className="w-5 h-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-brand-800 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-700/30 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Traveler Stories"
            title="What Our Guests Say"
            light
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className="glass-dark rounded-3xl p-8 h-full flex flex-col">
                <Quote className="w-9 h-9 text-brand-300 mb-5" />
                <p className="text-brand-50 leading-relaxed mb-6 flex-grow text-sm">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-brand-200 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-sand-50">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Questions & Answers"
            title="Frequently Asked Questions"
          />
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 80}>
              <div className="glass-card rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-brand-800 pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openIndex === i
                        ? 'bg-coral-500 text-white rotate-180'
                        : 'bg-brand-50 text-brand-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    openIndex === i ? 'max-h-60' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-brand-600 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    guests: '2',
    experience: 'Jungle Buggy Group Tour',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Reserve Your Spot"
            title="Book Your Saona Island Tour"
            subtitle="Secure your adventure in just a few clicks. All tours are all-inclusive with hotel pickup included."
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6 animate-pulseRing">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-800 mb-4">
                  Booking Request Sent!
                </h3>
                <p className="text-brand-600 leading-relaxed max-w-md mx-auto">
                  Thank you, {form.name || 'traveler'}! We've received your
                  request for the {form.experience} on{' '}
                  {form.date || 'your chosen date'} for {form.guests} guest(s).
                  Our team will confirm your reservation via email within 24
                  hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-coral-500 font-medium hover:text-coral-600 transition-colors"
                >
                  Make another booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="input-field"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="input-field"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-2">
                      Tour Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-400 pointer-events-none" />
                      <input
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => update('date', e.target.value)}
                        className="input-field pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-2">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-400 pointer-events-none" />
                      <select
                        value={form.guests}
                        onChange={(e) => update('guests', e.target.value)}
                        className="input-field pl-10 appearance-none"
                      >
                        {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === '1' ? 'guest' : 'guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-700 mb-2">
                    Experience
                  </label>
                  <select
                    value={form.experience}
                    onChange={(e) => update('experience', e.target.value)}
                    className="input-field appearance-none"
                  >
                    {experiences.map((exp) => (
                      <option key={exp.title} value={exp.title}>
                        {exp.title} — {exp.price}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-base flex items-center justify-center gap-2"
                >
                  Confirm Booking Request
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-xs text-brand-400">
                  No payment required now. We'll confirm availability and send a
                  secure payment link.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 text-white mb-5">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center">
                <Palmtree className="w-6 h-6 text-brand-300" />
              </div>
              <div>
                <span className="block text-lg font-bold tracking-wide leading-none">
                  Saona Bliss
                </span>
                <span className="block text-[10px] text-brand-300 tracking-[0.2em] uppercase mt-0.5">
                  Dominican Republic
                </span>
              </div>
            </div>
            <p className="text-brand-200 leading-relaxed max-w-md text-sm">
              Your trusted partner for unforgettable Saona Island experiences.
              We offer all-inclusive tours with daily departures from Punta Cana
              and Bayahibe, Dominican Republic.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-800 hover:bg-brand-700 flex items-center justify-center text-brand-200 hover:text-white transition-all"
                  aria-label="Social link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3">
              {[...navLinks, { label: 'Book Now', href: '#booking' }].map(
                (link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-brand-200 hover:text-brand-300 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5 text-brand-200">
                <Phone className="w-4 h-4 text-brand-300" />
                +1 (809) 555-0199
              </li>
              <li className="flex items-center gap-2.5 text-brand-200">
                <Mail className="w-4 h-4 text-brand-300" />
                hello@saonabliss.com
              </li>
              <li className="flex items-center gap-2.5 text-brand-200">
                <MapPin className="w-4 h-4 text-brand-300" />
                Bayahibe, La Altagracia
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-800 text-center">
          <p className="text-brand-300 text-sm">
            &copy; {new Date().getFullYear()} Saona Bliss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBadges />
      <Stats />
      <Experiences />
      <Gallery />
      <CTA />
      <Testimonials />
      <FAQ />
      <Booking />
      <Footer />
    </div>
  );
}
