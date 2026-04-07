import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Flame, Droplet, Zap } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  
  const [zipCode, setZipCode] = useState('');
  const [showStores, setShowStores] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
    }
  };

  const handleZipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.trim().length >= 5) {
      setShowStores(true);
    }
  };

  const testimonials = [
    { handle: "@pepperhead99", quote: "I've been drinking Dr Pepper since before it was acceptable. Still not sorry." },
    { handle: "@flavormaxxed", quote: "Cherry Dr Pepper is scientifically the perfect beverage. I will die on this hill." },
    { handle: "@22flavorsisntenough", quote: "I convinced my entire office to switch. I feel no guilt." },
    { handle: "@southernsips", quote: "There is no substitute. There has never been a substitute. There will never be." },
    { handle: "@drinkbold", quote: "My doctor told me to drink more water. I heard 'Dr.' and grabbed a Dr Pepper." },
    { handle: "@texastaste", quote: "Born in Texas. Raised on this. Period." },
  ];

  return (
    <div className="min-h-screen bg-drp-black text-drp-cream selection:bg-drp-red selection:text-drp-cream relative overflow-hidden bg-grain">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <div className="font-bebas text-3xl tracking-widest text-drp-red">DR PEPPER</div>
        <div className="hidden md:flex gap-8 font-sans font-bold text-sm tracking-widest uppercase">
          <a href="#flavors" className="hover:text-drp-red transition-colors">23 Flavors</a>
          <a href="#attitude" className="hover:text-drp-red transition-colors">Attitude</a>
          <a href="#culture" className="hover:text-drp-red transition-colors">Culture</a>
        </div>
        <button className="bg-drp-red text-drp-cream px-6 py-2 font-bebas text-xl tracking-wider hover:bg-white hover:text-drp-red transition-all">
          Get It Now
        </button>
      </nav>

      {/* Hero Section - BEM */}
      <section className="hero">
        <div className="hero__grain"></div>
        
        <div className="hero__content">
          <h1 className="hero__title">BORN DIFFERENT.</h1>
          <p className="hero__subtitle">23 flavors. Zero apologies.</p>
          
          <div className="hero__actions">
            <button className="hero__cta-primary">TASTE THE LEGEND</button>
            <a href="#flavors" className="hero__cta-secondary">FIND YOUR FLAVOR &rarr;</a>
          </div>
        </div>

        <div className="hero__poster-wrapper">
          <svg viewBox="0 0 280 420" xmlns="http://www.w3.org/2000/svg" aria-label="Dr Pepper vintage poster">
            <defs>
              <filter id="posterGrain" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0" in="noise"/>
              </filter>
              <pattern id="posterDots" x="0" y="0" width="7" height="7" patternUnits="userSpaceOnUse">
                <circle cx="3.5" cy="3.5" r="0.95" fill="#1C0A08" opacity="0.13"/>
              </pattern>
              <pattern id="posterDotsLight" x="0" y="0" width="7" height="7" patternUnits="userSpaceOnUse">
                <circle cx="3.5" cy="3.5" r="0.85" fill="#EADA8A" opacity="0.09"/>
              </pattern>
            </defs>

            {/* Aged cream base */}
            <rect width="280" height="420" fill="#EADA8A" rx="2"/>
            {/* Halftone texture */}
            <rect width="280" height="420" fill="url(#posterDots)" opacity="0.9"/>

            {/* Double border */}
            <rect x="7" y="7" width="266" height="406" fill="none" stroke="#1C0A08" strokeWidth="2.5" rx="1"/>
            <rect x="12" y="12" width="256" height="396" fill="none" stroke="#1C0A08" strokeWidth="0.75" rx="1"/>

            {/* Dark header block */}
            <rect x="7" y="7" width="266" height="173" fill="#1C0A08" rx="1"/>
            <rect x="7" y="7" width="266" height="173" fill="url(#posterDotsLight)"/>

            {/* Corner ornaments inside inner border */}
            <text x="19" y="25" fontFamily="serif" fontSize="9" fill="#EADA8A" opacity="0.5">✦</text>
            <text x="253" y="25" fontFamily="serif" fontSize="9" fill="#EADA8A" opacity="0.5" textAnchor="end">✦</text>

            {/* "DR" */}
            <text x="140" y="84"
              fontFamily="'Bebas Neue', Impact, sans-serif"
              fontSize="74"
              fill="#EADA8A"
              textAnchor="middle"
              letterSpacing="14">DR</text>

            {/* Red rules */}
            <rect x="22" y="93" width="236" height="3" fill="#8B1A18"/>
            <rect x="32" y="99" width="216" height="1" fill="#8B1A18" opacity="0.55"/>

            {/* "PEPPER" in vintage amber */}
            <text x="140" y="162"
              fontFamily="'Bebas Neue', Impact, sans-serif"
              fontSize="76"
              fill="#C4923A"
              textAnchor="middle"
              letterSpacing="3">PEPPER</text>

            {/* Red transition band */}
            <rect x="7" y="180" width="266" height="10" fill="#8B1A18"/>

            {/* Italic tagline */}
            <text x="140" y="218"
              fontFamily="'DM Serif Display', Georgia, serif"
              fontStyle="italic"
              fontSize="13"
              fill="#2C0F0B"
              textAnchor="middle"
              letterSpacing="0.5">The Original American Classic</text>

            {/* EST. with flanking rules */}
            <line x1="20" y1="231" x2="98" y2="231" stroke="#2C0F0B" strokeWidth="0.75" opacity="0.4"/>
            <text x="140" y="236"
              fontFamily="'Bebas Neue', Impact, sans-serif"
              fontSize="11"
              fill="#8B1A18"
              textAnchor="middle"
              letterSpacing="6">EST.</text>
            <line x1="182" y1="231" x2="260" y2="231" stroke="#2C0F0B" strokeWidth="0.75" opacity="0.4"/>

            {/* Year */}
            <text x="140" y="284"
              fontFamily="'Bebas Neue', Impact, sans-serif"
              fontSize="58"
              fill="#1C0A08"
              textAnchor="middle"
              letterSpacing="4">1885</text>

            {/* Star ornaments */}
            <text x="140" y="303"
              fontFamily="serif"
              fontSize="10"
              fill="#8B1A18"
              textAnchor="middle"
              letterSpacing="14">✦  ✦  ✦</text>

            {/* 23 Flavors badge */}
            <rect x="54" y="312" width="172" height="30" fill="#8B1A18"/>
            <text x="140" y="332"
              fontFamily="'Bebas Neue', Impact, sans-serif"
              fontSize="18"
              fill="#EADA8A"
              textAnchor="middle"
              letterSpacing="5">23 FLAVORS</text>

            {/* Location */}
            <text x="140" y="358"
              fontFamily="'DM Serif Display', Georgia, serif"
              fontStyle="italic"
              fontSize="9.5"
              fill="#2C0F0B"
              textAnchor="middle"
              opacity="0.6"
              letterSpacing="0.5">Waco, Texas  ·  Since 1885</text>

            {/* Footer band */}
            <rect x="7" y="367" width="266" height="46" fill="#8B1A18"/>
            <text x="140" y="387"
              fontFamily="'Bebas Neue', Impact, sans-serif"
              fontSize="12"
              fill="#EADA8A"
              textAnchor="middle"
              letterSpacing="7">BORN DIFFERENT</text>
            <line x1="30" y1="392" x2="250" y2="392" stroke="#EADA8A" strokeWidth="0.5" opacity="0.35"/>
            <text x="140" y="405"
              fontFamily="'DM Serif Display', Georgia, serif"
              fontStyle="italic"
              fontSize="9"
              fill="#EADA8A"
              textAnchor="middle"
              opacity="0.8">Never Imitated. Never Forgotten.</text>

            {/* Paper grain overlay */}
            <rect width="280" height="420" filter="url(#posterGrain)" rx="2"/>
          </svg>
        </div>

        <div className="hero__scroll">
          <svg className="hero__scroll-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Social Proof Bar - BEM */}
      <div className="social-proof">
        <div className="social-proof__marquee">
          {[...Array(2)].map((_, trackIndex) => (
            <div key={trackIndex} className="social-proof__track">
              <span className="social-proof__item">🏆 #1 Pepper-Style Soda in America</span>
              <span className="social-proof__separator">◆</span>
              <span className="social-proof__item">⭐⭐⭐⭐⭐ 'Nothing hits like Dr Pepper' — @flavorgod</span>
              <span className="social-proof__separator">◆</span>
              <span className="social-proof__item">🔥 Over 1 BILLION cans sold annually</span>
              <span className="social-proof__separator">◆</span>
              <span className="social-proof__item">❤️ 'My entire personality' — millions of fans</span>
              <span className="social-proof__separator">◆</span>
              <span className="social-proof__item">🎵 Official drink of doing things your way</span>
              <span className="social-proof__separator">◆</span>
              <span className="social-proof__item">📍 Available in 50+ countries</span>
              <span className="social-proof__separator">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Story - BEM */}
      <section className="brand-story">
        {/* Panel 1 */}
        <div className="story-panel story-panel--dark">
          <div className="story-panel__visual">
            <div className="shape-origin"></div>
          </div>
          <div className="story-panel__content">
            <h2 className="story-panel__headline">1885. One Pharmacist. One Legend.</h2>
            <p className="story-panel__body">Before energy drinks existed. Before 'craft' was a word. A pharmacist in Waco, Texas blended 23 flavors into something the world had never tasted. Dr Pepper wasn't a trend. It was a reckoning.</p>
            <a href="#" className="story-panel__cta">Learn More &rarr;</a>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="story-panel story-panel--light story-panel--reverse">
          <div className="story-panel__visual">
            <div className="shape-flavor">
              <div className="shape-flavor-inner"></div>
              <div className="shape-flavor-outer"></div>
            </div>
          </div>
          <div className="story-panel__content">
            <h2 className="story-panel__headline">23 Flavors. Still Classified.</h2>
            <p className="story-panel__body">The exact formula has never been revealed. Not to scientists. Not to competitors. Not to the internet. Some things are worth keeping secret.</p>
            <a href="#" className="story-panel__cta">Learn More &rarr;</a>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="story-panel story-panel--dark">
          <div className="story-panel__visual">
            <div className="shape-culture"></div>
          </div>
          <div className="story-panel__content">
            <h2 className="story-panel__headline">Not a Soda. A Stance.</h2>
            <p className="story-panel__body">Dr Pepper drinkers don't follow trends. They start them. From Texas to Tokyo, one taste is all it takes to understand.</p>
            <a href="#" className="story-panel__cta">Learn More &rarr;</a>
          </div>
        </div>
      </section>

      {/* Testimonials - BEM */}
      <section className="testimonials">
        <div className="testimonials__header">
          <span className="testimonials__label">TESTIMONIALS</span>
          <h2 className="testimonials__title">THE CULT SPEAKS</h2>
        </div>
        
        <div className="testimonials__scroll">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-card__header">
                <div className="testimonial-card__avatar">
                  {t.handle.substring(1, 2).toUpperCase()}
                </div>
                <div className="testimonial-card__meta">
                  <span className="testimonial-card__handle">{t.handle}</span>
                  <span className="testimonial-card__stars">★★★★★</span>
                </div>
              </div>
              <p className="testimonial-card__quote">"{t.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="testimonials__footer">
          <a href="#" className="testimonials__cta">FOLLOW THE OBSESSION &rarr;</a>
        </div>
      </section>

      {/* Where to Buy - BEM */}
      <section className="wtb">
        <div className="wtb-left">
          <h2 className="wtb__heading">FIND YOUR CAN.</h2>
          <p className="wtb__subtext">In stores, online, or delivered cold to your door. Pick your poison.</p>
          
          <ul className="wtb__list">
            <li className="wtb__list-item">
              <div className="wtb__icon">🏪</div>
              Grocery & Convenience Stores
            </li>
            <li className="wtb__list-item">
              <div className="wtb__icon">🛒</div>
              Amazon, Walmart & Online
            </li>
            <li className="wtb__list-item">
              <div className="wtb__icon">🚗</div>
              DoorDash, Instacart & More
            </li>
          </ul>
          
          <button className="wtb__cta-btn">FIND A STORE NEAR YOU</button>
        </div>
        
        <div className="wtb-right">
          <form className="wtb__form" onSubmit={handleZipSubmit}>
            <input 
              type="text" 
              className="wtb__input" 
              placeholder="Enter your zip code" 
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
            <button type="submit" className="wtb__submit">LOCATE &rarr;</button>
          </form>
          
          {showStores && (
            <div className="wtb__results">
              <div className="wtb-store">
                <div className="wtb-store__info">
                  <span className="wtb-store__name">7-Eleven</span>
                  <span className="wtb-store__distance">0.4 miles away</span>
                </div>
                <a href="#" className="wtb-store__link">Get Directions &rarr;</a>
              </div>
              <div className="wtb-store">
                <div className="wtb-store__info">
                  <span className="wtb-store__name">Target Supercenter</span>
                  <span className="wtb-store__distance">1.2 miles away</span>
                </div>
                <a href="#" className="wtb-store__link">Get Directions &rarr;</a>
              </div>
              <div className="wtb-store">
                <div className="wtb-store__info">
                  <span className="wtb-store__name">Kroger</span>
                  <span className="wtb-store__distance">2.5 miles away</span>
                </div>
                <a href="#" className="wtb-store__link">Get Directions &rarr;</a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Email Capture - BEM */}
      <section className="capture">
        <div className="capture__grain"></div>
        <div className="capture__content">
          <span className="capture__eyebrow">JOIN THE INNER CIRCLE</span>
          <h2 className="capture__headline">BE FIRST. ALWAYS.</h2>
          <p className="capture__subtext">Exclusive drops. Limited editions. Offers that disappear fast. Enter your email before someone else does.</p>
          
          {!isSubmitted ? (
            <form className="capture__form" onSubmit={handleEmailSubmit}>
              <input 
                type="email" 
                className="capture__input" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="capture__submit">I'M IN &rarr;</button>
            </form>
          ) : (
            <div className="capture__success">
              🔥 You're in. Stay dangerous.
            </div>
          )}
          
          {!isSubmitted && <p className="capture__fine-print">No spam. No nonsense. Unsubscribe whenever.</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-drp-black border-t border-drp-red/20 pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <div className="font-bebas text-6xl text-drp-red mb-6">DR PEPPER</div>
            <p className="font-sans text-drp-cream/60 max-w-md">
              The oldest major soft drink in America. Still the most misunderstood. Still the best.
            </p>
          </div>
          <div>
            <h4 className="font-bebas text-2xl mb-6 text-drp-gold">Explore</h4>
            <ul className="space-y-4 font-sans text-sm text-drp-cream/70 uppercase tracking-widest">
              <li><a href="#" className="hover:text-drp-red transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-drp-red transition-colors">Merch</a></li>
              <li><a href="#" className="hover:text-drp-red transition-colors">Pepper Perks</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bebas text-2xl mb-6 text-drp-gold">Connect</h4>
            <ul className="space-y-4 font-sans text-sm text-drp-cream/70 uppercase tracking-widest">
              <li><a href="#" className="hover:text-drp-red transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-drp-red transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-drp-red transition-colors">Spotify</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-drp-cream/10 relative z-10">
          <p className="font-sans text-xs text-drp-cream/40 mb-4 md:mb-0">
            © {new Date().getFullYear()} Dr Pepper/Seven Up, Inc. All Rights Reserved.
          </p>
          <div className="flex gap-6 font-sans text-xs text-drp-cream/40">
            <a href="#" className="hover:text-drp-cream">Privacy Policy</a>
            <a href="#" className="hover:text-drp-cream">Terms of Use</a>
          </div>
        </div>
        
        {/* Giant background text */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none">
          <div className="font-bebas text-[25vw] leading-none text-drp-cream whitespace-nowrap translate-y-1/4">
            EST 1885
          </div>
        </div>
      </footer>
    </div>
  );
}
