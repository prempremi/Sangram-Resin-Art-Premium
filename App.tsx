import React, { useState } from "react";

const WHATSAPP = "91917873024955";

const products = [
  {
    title: "Resin Wall Art",
    text: "Luxury handcrafted statement pieces for modern interiors.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Customized Name Plates",
    text: "Personalized resin name plates made for your home.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Resin Photo Frames",
    text: "Preserve your favourite memories in premium resin.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Resin Clocks",
    text: "Elegant handmade clocks designed for premium spaces.",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Keychains & Gifts",
    text: "Unique customized gifts for birthdays, weddings and events.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Resin Tables",
    text: "Statement furniture crafted to order with artistic details.",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1200&q=85",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85",
];

function App() {
  const [menu, setMenu] = useState(false);

  const whatsapp = (message = "Hello Sangram Resin Art, I want to discuss a customized resin product.") => {
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="site">
      <style>{`
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#080706;color:#f8f3e8}
        a{text-decoration:none;color:inherit}
        button{font:inherit}
        .site{min-height:100vh;background:
          radial-gradient(circle at 12% 5%,rgba(211,164,74,.13),transparent 28%),
          radial-gradient(circle at 88% 16%,rgba(117,69,170,.12),transparent 25%),
          #080706;overflow:hidden}
        .nav{position:sticky;top:0;z-index:50;background:rgba(8,7,6,.82);backdrop-filter:blur(18px);border-bottom:1px solid rgba(255,255,255,.08)}
        .navin{max-width:1180px;margin:auto;padding:18px 24px;display:flex;align-items:center;justify-content:space-between}
        .brand{font-family:Georgia,serif;font-size:19px;letter-spacing:2px}
        .brand small{display:block;color:#caa75b;font:10px Inter,sans-serif;letter-spacing:4px;margin-top:4px}
        .links{display:flex;gap:26px;color:#c9c1b3;font-size:13px}
        .links a:hover{color:#fff}
        .navbtn{border:1px solid #8f6b31;background:transparent;color:#e8c778;padding:10px 16px;border-radius:30px;cursor:pointer}
        .menubtn{display:none;background:none;border:0;color:#fff;font-size:26px}
        .hero{max-width:1180px;margin:auto;min-height:720px;padding:110px 24px 90px;display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:70px}
        .eyebrow{font-size:11px;letter-spacing:5px;color:#d1ad5f;text-transform:uppercase}
        h1{font:500 clamp(54px,7vw,92px)/.92 Georgia,serif;margin:22px 0}
        h1 span{color:#cba45a}
        .lead{font-size:17px;line-height:1.8;color:#aaa298;max-width:610px}
        .actions{display:flex;gap:14px;margin-top:34px;flex-wrap:wrap}
        .gold{background:linear-gradient(135deg,#e4c275,#a8792d);color:#100d08;border:0;padding:15px 23px;border-radius:5px;font-weight:800;cursor:pointer}
        .outline{background:transparent;color:#eee5d7;border:1px solid rgba(255,255,255,.2);padding:14px 23px;border-radius:5px;cursor:pointer}
        .heroart{height:530px;border-radius:28px;position:relative;overflow:hidden;border:1px solid rgba(218,177,88,.25);background:
          radial-gradient(circle at 40% 35%,rgba(240,190,76,.8),transparent 8%),
          radial-gradient(circle at 65% 45%,rgba(126,73,197,.72),transparent 17%),
          radial-gradient(circle at 45% 70%,rgba(33,104,125,.75),transparent 23%),
          linear-gradient(145deg,#17130f,#050505 70%);box-shadow:0 35px 100px rgba(0,0,0,.55)}
        .heroart:before{content:"";position:absolute;inset:14%;border:1px solid rgba(229,195,117,.18);border-radius:50%;box-shadow:0 0 90px rgba(190,145,57,.18)}
        .heroart:after{content:"SANGRAM\\A RESIN ART";white-space:pre;position:absolute;right:28px;bottom:28px;color:rgba(255,255,255,.45);font:11px/1.7 Inter,sans-serif;letter-spacing:4px;text-align:right}
        section{max-width:1180px;margin:auto;padding:105px 24px}
        .sectionhead{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:38px}
        .kicker{color:#caa75b;font-size:11px;letter-spacing:4px;text-transform:uppercase}
        h2{font:500 clamp(38px,5vw,62px)/1 Georgia,serif;margin:12px 0 0}
        .muted{color:#928c83;max-width:500px;line-height:1.7}
        .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .card{background:linear-gradient(180deg,#171410,#0d0c0a);border:1px solid rgba(255,255,255,.08);border-radius:18px;overflow:hidden;transition:.35s}
        .card:hover{transform:translateY(-7px);border-color:rgba(202,167,91,.45)}
        .card img{width:100%;height:230px;object-fit:cover;display:block}
        .cardbody{padding:23px}
        .card h3{font:500 25px Georgia,serif;margin:0 0 9px}
        .card p{color:#918c84;line-height:1.6;font-size:14px;margin:0}
        .about{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:center}
        .aboutbox{padding:38px;border:1px solid rgba(202,167,91,.2);border-radius:24px;background:linear-gradient(145deg,rgba(202,167,91,.07),rgba(255,255,255,.02))}
        .aboutbox strong{font:500 54px Georgia,serif;color:#d6b66e}
        .aboutbox p{color:#9e978e;line-height:1.8}
        .features{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:25px}
        .feature{padding:18px;border:1px solid rgba(255,255,255,.07);border-radius:12px;color:#c8c0b5}
        .feature b{display:block;color:#eee8dd;margin-bottom:5px}
        .gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
        .gallery img{width:100%;height:270px;object-fit:cover;border-radius:14px;opacity:.9;transition:.3s}
        .gallery img:hover{opacity:1;transform:scale(1.015)}
        .cta{margin:30px auto 90px;max-width:1132px;padding:70px 40px;text-align:center;border:1px solid rgba(202,167,91,.25);border-radius:26px;background:radial-gradient(circle at 50% 0,rgba(202,167,91,.14),transparent 55%),#100e0b}
        .cta h2{margin-bottom:15px}
        .cta p{color:#9e978e;margin:0 auto 28px;max-width:600px;line-height:1.7}
        footer{border-top:1px solid rgba(255,255,255,.08);padding:35px 24px;color:#817b73}
        .footin{max-width:1180px;margin:auto;display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;font-size:13px}
        .float{position:fixed;right:22px;bottom:22px;z-index:60;border:0;border-radius:50px;padding:15px 20px;background:#25d366;color:#071108;font-weight:800;box-shadow:0 10px 35px rgba(0,0,0,.4);cursor:pointer}
        @media(max-width:800px){
          .links,.navbtn{display:none}.menubtn{display:block}
          .mobile{display:flex;position:absolute;top:70px;left:0;right:0;background:#0c0b09;border-bottom:1px solid #25221d;flex-direction:column;padding:18px 24px;gap:18px}
          .hero{grid-template-columns:1fr;padding-top:75px;gap:45px}.heroart{height:390px}
          .cards{grid-template-columns:1fr}.about{grid-template-columns:1fr;gap:30px}.gallery{grid-template-columns:1fr 1fr}.gallery img{height:210px}
          .sectionhead{display:block}.muted{margin-top:15px}.features{grid-template-columns:1fr}
        }
        @media(min-width:801px){.mobile{display:none}}
      `}</style>

      <header className="nav">
        <div className="navin">
          <a href="#home" className="brand">
            SANGRAM RESIN ART
            <small>CUSTOMIZED • HANDMADE • UNIQUE</small>
          </a>
          <nav className="links">
            <a href="#home">Home</a>
            <a href="#collections">Collections</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="navbtn" onClick={() => whatsapp()}>Get a Quote</button>
          <button className="menubtn" onClick={() => setMenu(!menu)}>☰</button>
        </div>
        {menu && (
          <div className="mobile">
            <a href="#home" onClick={() => setMenu(false)}>Home</a>
            <a href="#collections" onClick={() => setMenu(false)}>Collections</a>
            <a href="#about" onClick={() => setMenu(false)}>About</a>
            <a href="#gallery" onClick={() => setMenu(false)}>Gallery</a>
            <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
          </div>
        )}
      </header>

      <main>
        <section className="hero" id="home">
          <div>
            <div className="eyebrow">Premium Resin Crafts • Odisha</div>
            <h1>Art that makes<br/><span>memories shine.</span></h1>
            <p className="lead">
              Bespoke handcrafted resin art created for homes, weddings, gifts,
              celebrations and premium interiors. Designed around your story,
              colours and imagination.
            </p>
            <div className="actions">
              <button className="gold" onClick={() => whatsapp("Hello Sangram Resin Art, I want a custom resin design.")}>Order on WhatsApp</button>
              <a className="outline" href="#collections">Explore Collection</a>
            </div>
          </div>
          <div className="heroart" aria-label="Premium resin artwork visual" />
        </section>

        <section id="collections">
          <div className="sectionhead">
            <div>
              <div className="kicker">Our Collection</div>
              <h2>Made to be remembered.</h2>
            </div>
            <p className="muted">From elegant home décor to personalized gifts, every piece is made with patience, detail and a premium finish.</p>
          </div>
          <div className="cards">
            {products.map((p) => (
              <article className="card" key={p.title}>
                <img src={p.image} alt={p.title}/>
                <div className="cardbody">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about">
          <div className="about">
            <div className="aboutbox">
              <strong>01</strong>
              <h2>Crafted with intention.</h2>
              <p>
                Sangram Resin Art creates customized handmade pieces with a focus
                on clean finishing, rich colours and personal storytelling.
              </p>
            </div>
            <div>
              <div className="kicker">Why Sangram Resin Art</div>
              <h2>Luxury handmade.<br/>Personal to you.</h2>
              <div className="features">
                <div className="feature"><b>Customized Designs</b>Every order can be created around your idea.</div>
                <div className="feature"><b>Premium Finish</b>Careful detailing for a polished result.</div>
                <div className="feature"><b>Made for Gifting</b>Perfect for weddings, birthdays and special moments.</div>
                <div className="feature"><b>Made to Order</b>We discuss size, colours and requirements before production.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="sectionhead">
            <div>
              <div className="kicker">Visual Stories</div>
              <h2>Our inspiration.</h2>
            </div>
            <p className="muted">Replace these sample images with your own resin artwork photos anytime.</p>
          </div>
          <div className="gallery">
            {gallery.map((src, i) => <img key={src} src={src} alt={`Resin art inspiration ${i + 1}`} />)}
          </div>
        </section>

        <div className="cta" id="contact">
          <div className="kicker">Start Your Custom Order</div>
          <h2>Have an idea?<br/>Let's make it real.</h2>
          <p>
            Send your reference photo, product type, size, colours and requirements
            on WhatsApp. We will discuss the design and quotation with you.
          </p>
          <button className="gold" onClick={() => whatsapp("Hello Sangram Resin Art, I want to get a quotation for a customized resin product.")}>
            WhatsApp for a Quote
          </button>
        </div>
      </main>

      <footer>
        <div className="footin">
          <div>© {new Date().getFullYear()} Sangram Resin Art. All rights reserved.</div>
          <div>Customized • Handmade • Unique</div>
        </div>
      </footer>

      <button className="float" onClick={() => whatsapp()}>💬 WhatsApp</button>
    </div>
  );
}

export default App;
