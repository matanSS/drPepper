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

        <div className="hero__can-wrapper">
          <div className="hero__can">
            <div className="hero__can-label">DR PEPPER</div>
          </div>
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
