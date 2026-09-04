import { useEffect, useRef, useState } from 'react';
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
} from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/7184629/pexels-photo-7184629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/31734268/pexels-photo-31734268.png?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Relaxing tropical beach with palm trees in Dominican Republic',
    label: 'Punta Cana Shore',
  },
  {
    url: 'https://images.pexels.com/photos/3675435/pexels-photo-3675435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Aerial view of tropical beach with turquoise waters',
    label: 'Natural Pool',
  },
  {
    url: 'https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Snorkeling among vibrant marine life',
    label: 'Coral Reef',
  },
  {
    url: 'https://images.pexels.com/photos/4599685/pexels-photo-4599685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Catamaran anchored along a tropical beach',
    label: 'Catamaran Cruise',
  },
  {
    url: 'https://images.pexels.com/photos/31794420/pexels-photo-31794420.png?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Woman lounging on a leaning palm tree',
    label: 'Beach Bliss',
  },
  {
    url: 'https://images.pexels.com/photos/10816914/pexels-photo-10816914.png?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Boats docked on a sunny beach in Dominican Republic',
    label: 'Bay Harbor',
  },
];

const experiences = [
  {
    icon: Sailboat,
    title: 'Catamaran Cruise',
    description:
      'Sail across the Caribbean Sea on a spacious catamaran with unlimited drinks, music, and panoramic ocean views.',
    duration: 'Full day',
    price: '$89',
  },
  {
    icon: Fish,
    title: 'Snorkeling Adventure',
    description:
      'Dive into crystal-clear waters and swim alongside tropical fish in one of the most vibrant coral reefs in the Caribbean.',
    duration: '2 hours',
    price: '$45',
  },
  {
    icon: Palmtree,
    title: 'Beach Relaxation',
    description:
      'Unwind on powdery white sands beneath swaying palm trees with a fresh coconut in hand and the sound of gentle waves.',
    duration: 'Unlimited',
    price: 'Included',
  },
  {
    icon: Waves,
    title: 'Natural Pool',
    description:
      'Wade into a shallow sandbar in the middle of the ocean — a giant natural swimming pool with starfish and warm turquoise water.',
    duration: '1.5 hours',
    price: '$35',
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
    name: 'James O\'Connor',
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

const navLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book Now', href: '#booking' },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-900/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <Palmtree className="w-7 h-7 text-brand-300" />
          <span className="text-lg font-semibold tracking-wide">
            Saona Bliss
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.label === 'Book Now'
                  ? 'bg-coral-500 text-white px-5 py-2.5 rounded-full hover:bg-coral-600 shadow-md'
                  : 'text-white/90 hover:text-brand-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-brand-900/98 backdrop-blur-md mt-3 mx-4 rounded-2xl py-4 px-6 flex flex-col gap-4 animate-slideDown">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors ${
                link.label === 'Book Now'
                  ? 'bg-coral-500 text-white px-5 py-2.5 rounded-full text-center hover:bg-coral-600'
                  : 'text-white/90 hover:text-brand-300'
              }`}
            >
              {link.label}
            </a>
          ))}
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
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-brand-100 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
            <MapPin className="w-4 h-4" />
            Dominican Republic
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-shadow-lg leading-tight mb-6">
            Escape to Saona Island
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg sm:text-xl text-brand-100 text-shadow-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Pristine white sands, turquoise waters, and swaying palms await.
            Book your unforgettable Caribbean adventure today.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="bg-coral-500 hover:bg-coral-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              Book Your Tour
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#gallery"
              className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-full border border-white/30 transition-all"
            >
              View Gallery
            </a>
          </div>
        </Reveal>
      </div>

      <a
        href="#experiences"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
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
    <section className="bg-brand-900 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100}>
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
    <section id="experiences" className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-coral-500 font-semibold text-sm uppercase tracking-wider">
              What You'll Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mt-2 mb-4">
              Unforgettable Island Adventures
            </h2>
            <p className="text-brand-700 max-w-2xl mx-auto leading-relaxed">
              From catamaran cruises to snorkeling in vibrant coral reefs, every
              moment on Saona Island is designed to take your breath away.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 120}>
              <div className="glass-card rounded-2xl p-6 card-hover h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-5">
                  <exp.icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-brand-800 mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm text-brand-700 leading-relaxed mb-5 flex-grow">
                  {exp.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-brand-100">
                  <span className="flex items-center gap-1.5 text-xs text-brand-600">
                    <Clock className="w-4 h-4" />
                    {exp.duration}
                  </span>
                  <span className="text-coral-600 font-semibold">
                    {exp.price}
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

function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-coral-500 font-semibold text-sm uppercase tracking-wider">
              Photo Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mt-2 mb-4">
              Moments Worth Capturing
            </h2>
            <p className="text-brand-700 max-w-2xl mx-auto leading-relaxed">
              A glimpse of the paradise that awaits you on Saona Island.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((img, i) => (
            <Reveal key={img.url} delay={i * 80}>
              <div className="relative group rounded-2xl overflow-hidden shadow-md card-hover aspect-[4/3]">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
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

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-brand-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-700/30 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-coral-400 font-semibold text-sm uppercase tracking-wider">
              Traveler Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              What Our Guests Say
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-7 border border-white/10 h-full flex flex-col">
                <Quote className="w-8 h-8 text-brand-300 mb-4" />
                <p className="text-brand-50 leading-relaxed mb-6 flex-grow">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-11 h-11 rounded-full bg-brand-600 flex items-center justify-center text-white font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{t.name}</div>
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
    <section id="faq" className="py-20 bg-sand-50">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-coral-500 font-semibold text-sm uppercase tracking-wider">
              Questions & Answers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 80}>
              <div className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-brand-800 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-500 shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-60' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-brand-700 leading-relaxed text-sm">
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
    experience: 'Catamaran Cruise',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-coral-500 font-semibold text-sm uppercase tracking-wider">
              Reserve Your Spot
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mt-2 mb-4">
              Book Your Saona Island Tour
            </h2>
            <p className="text-brand-700 max-w-2xl mx-auto leading-relaxed">
              Secure your adventure in just a few clicks. All tours are
              all-inclusive with hotel pickup included.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="glass-card rounded-3xl p-8 md:p-10 shadow-xl max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-5 animate-pulseRing">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-800 mb-3">
                  Booking Request Sent!
                </h3>
                <p className="text-brand-700 leading-relaxed">
                  Thank you, {form.name || 'traveler'}! We've received your
                  request for the {form.experience} on {form.date || 'your chosen date'}{' '}
                  for {form.guests} guest(s). Our team will confirm your
                  reservation via email within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-coral-500 font-medium hover:text-coral-600 transition-colors"
                >
                  Make another booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-brand-100 bg-white text-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-brand-100 bg-white text-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-1.5">
                      Tour Date
                    </label>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-brand-100 bg-white text-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-1.5">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-400" />
                      <select
                        value={form.guests}
                        onChange={(e) => update('guests', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-100 bg-white text-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all appearance-none"
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
                  <label className="block text-sm font-medium text-brand-700 mb-1.5">
                    Experience
                  </label>
                  <select
                    value={form.experience}
                    onChange={(e) => update('experience', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-brand-100 bg-white text-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all appearance-none"
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
                  className="w-full bg-coral-500 hover:bg-coral-600 text-white font-semibold py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Confirm Booking Request
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-xs text-brand-500">
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
            <div className="flex items-center gap-2 text-white mb-4">
              <Palmtree className="w-7 h-7 text-brand-300" />
              <span className="text-lg font-semibold tracking-wide">
                Saona Bliss
              </span>
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
            <h4 className="text-white font-semibold mb-4 text-sm">Explore</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-brand-200 hover:text-brand-300 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-brand-200">
                <Phone className="w-4 h-4 text-brand-300" />
                +1 (809) 555-0199
              </li>
              <li className="flex items-center gap-2 text-brand-200">
                <Mail className="w-4 h-4 text-brand-300" />
                hello@saonabliss.com
              </li>
              <li className="flex items-center gap-2 text-brand-200">
                <MapPin className="w-4 h-4 text-brand-300" />
                Bayahibe, La Altagracia
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-800 text-center">
          <p className="text-brand-300 text-sm">
            © {new Date().getFullYear()} Saona Bliss. All rights reserved.
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
      <Stats />
      <Experiences />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Booking />
      <Footer />
    </div>
  );
}
