import { useState } from 'react';
import {
  ArrowRight, Check, ChevronDown, Gem, MapPin, Menu,
  MessageCircle, Phone, Sparkles, Star, X
} from 'lucide-react';

const WHATSAPP =
  'https://wa.me/918112191408?text=Hello%20Sangram%20Resin%20Art%2C%20I%20want%20a%20custom%20quote.';

const nav = ['Home', 'Resin Art', 'Printing', 'Gallery', 'About', 'Contact'];

const services = [
  'Custom Resin Art', 'Resin Name Plates', 'Photo Frames',
  'Resin Clocks', 'Keychains & Gifts', 'Wedding & Event Designs',
  'Flex Banner Printing', 'Poster & Invitation Printing'
];

const gallery = [
  ['Resin Wall Art', 'Premium handmade resin artwork.'],
  ['Custom Name Plates', 'Personalized name plates.'],
  ['Photo Frames', 'Memories preserved in resin.'],
  ['Resin Clocks', 'Elegant handmade clocks.'],
  ['Keychains & Gifts', 'Unique customized gifts.'],
  ['Printing Services', 'Banners, posters and cards.']
];

const faqs = [
  ['Can I order a completely custom resin design?', 'Yes. Send your reference photo, size, colors and requirements on WhatsApp.'],
  ['Do you provide printing services?', 'Yes. We provide custom banners, posters, invitations and promotional printing.'],
  ['How do I get a quotation?', 'Send your requirements on WhatsApp and we will discuss the design, size and price.']
];

function App() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(null);
  const [quote, setQuote] = useState(false);

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenu(false);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container nav-wrap">
          <button className="brand" onClick={() => scroll('home')}>
            <span className="brand-icon"><Gem size={22} /></span>
            <span><b>SANGRAM</b><small>RESIN ART</small></span>
          </button>

          <nav className={menu ? 'nav open' : 'nav'}>
            {nav.map(item => (
              <button key={item} onClick={() => scroll(item === 'Home' ? 'home' : item.toLowerCase().replace(' ', '-'))}>
                {item}
              </button>
            ))}
            <button className="nav-cta" onClick={() => setQuote(true)}>
              Get Quote <ArrowRight size={16} />
            </button>
          </nav>

          <button className="menu-btn" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={16} /> HANDMADE • CUSTOM • UNIQUE</div>
              <h1>Turn Your Ideas Into <span>Beautiful Resin Art.</span></h1>
              <p>Premium custom resin art and complete printing services. Handmade with care for homes, gifts, events and businesses.</p>
              <div className="hero-actions">
                <a className="gold-btn" href={WHATSAPP} target="_blank" rel="noreferrer">
                  <MessageCircle size={19} /> Order on WhatsApp
                </a>
                <button className="ghost-btn" onClick={() => scroll('gallery')}>
                  Explore Work <ArrowRight size={18} />
                </button>
              </div>
              <div className="trust">
                <span><Check size={16} /> Custom Designs</span>
                <span><Check size={16} /> Handmade</span>
                <span><Check size={16} /> Premium Finish</span>
              </div>
            </div>

            <div className="hero-card">
              <Gem size={72} strokeWidth={1.2} />
              <span>COMING SOON</span>
              <strong>SANGRAM<br />RESIN ART</strong>
              <small>All Types of Resin Designs Available</small>
            </div>
          </div>
        </section>

        <section id="resin-art" className="section">
          <div className="container">
            <div className="section-head">
              <div><div className="eyebrow">OUR SERVICES</div><h2>Resin Art Made For You</h2></div>
              <p>Custom sizes, colors and designs available.</p>
            </div>
            <div className="service-grid">
              {services.map((service, i) => (
                <article className="service-card" key={service}>
                  <div className="service-number">0{i + 1}</div>
                  <Sparkles size={22} />
                  <h3>{service}</h3>
                  <p>Made to your requirements.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="printing" className="dark-section">
          <div className="container split">
            <div>
              <div className="eyebrow">PRINTING STUDIO</div>
              <h2>One Studio For Resin + Printing</h2>
              <p>Need a banner, poster, invitation card or promotional design? We can create your design and prepare it for professional printing.</p>
              <button className="gold-btn" onClick={() => setQuote(true)}>
                Request Custom Quote <ArrowRight size={18} />
              </button>
            </div>
            <div className="print-list">
              {['Flex Banners','Posters & Flyers','Wedding Invitations','Birthday Banners','Business Cards','Custom Event Designs'].map(x => (
                <div key={x}><Check size={17} /> {x}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="container">
            <div className="section-head">
              <div><div className="eyebrow">PORTFOLIO</div><h2>Selected Work</h2></div>
              <span className="section-note">Your real product photos can be added later.</span>
            </div>
            <div className="gallery-grid">
              {gallery.map(([title, text], i) => (
                <article className="gallery-card" key={title}>
                  <div className={'art art-' + (i + 1)}><Gem size={42} /></div>
                  <div className="gallery-info"><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container split">
            <div className="about-badge"><Star size={34} /><b>HANDMADE</b><span>WITH INTENTION</span></div>
            <div>
              <div className="eyebrow">ABOUT SANGRAM</div>
              <h2>Creative Work. Personal Touch.</h2>
              <p>Sangram Resin Art focuses on customized handmade resin products and creative printing solutions. Share your idea and we will help turn it into a finished piece.</p>
              <div className="contact-points">
                <span><MapPin size={18} /> Odisha, India</span>
                <a href="tel:+918112191408"><Phone size={18} /> 81121 91408</a>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container faq-wrap">
            <div>
              <div className="eyebrow">FAQ</div>
              <h2>Questions?</h2>
              <p>Send your requirements directly if you need a custom answer.</p>
              <a className="gold-btn" href={WHATSAPP} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a], i) => (
                <div className="faq" key={q}>
                  <button onClick={() => setFaq(faq === i ? null : i)}>
                    <span>{q}</span><ChevronDown className={faq === i ? 'rotate' : ''} size={19} />
                  </button>
                  {faq === i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="footer">
          <div className="container footer-grid">
            <div>
              <div className="footer-brand">SANGRAM RESIN ART</div>
              <p>Custom Resin Art & Full Printing Services</p>
              <div className="footer-location"><MapPin size={17} /> Odisha, India</div>
            </div>
            <div>
              <b>Explore</b>
              <button onClick={() => scroll('resin-art')}>Resin Art</button>
              <button onClick={() => scroll('printing')}>Printing</button>
              <button onClick={() => scroll('gallery')}>Gallery</button>
            </div>
            <div>
              <b>Contact</b>
              <a href="tel:+918112191408"><Phone size={16} /> 81121 91408</a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
            </div>
          </div>
          <div className="copyright">© 2026 Sangram Resin Art • Handmade with intention.</div>
        </footer>
      </main>

      <button className="floating-wa" onClick={() => setQuote(true)} aria-label="WhatsApp">
        <MessageCircle size={24} />
      </button>

      {quote && (
        <div className="modal" onClick={() => setQuote(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setQuote(false)}><X /></button>
            <span className="eyebrow">CUSTOM ORDER</span>
            <h2>Let's create your piece.</h2>
            <p>Send your requirements, photo or reference on WhatsApp and we'll discuss the design, size and price.</p>
            <a className="gold-btn full" href={WHATSAPP} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Continue on WhatsApp
            </a>
            <a className="ghost-btn full" href="tel:+918112191408">
              <Phone size={18} /> Call the studio
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
