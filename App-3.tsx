import { useState } from "react";

const products = [
  { name: "Resin Wall Art", text: "Luxury handcrafted wall décor", icon: "✦" },
  { name: "Customized Name Plate", text: "Made specially for your home", icon: "⌂" },
  { name: "Photo Frame", text: "Preserve your favourite memories", icon: "▣" },
  { name: "Resin Clock", text: "Elegant art for modern interiors", icon: "◷" },
  { name: "Keychains & Gifts", text: "Personalized handmade gifts", icon: "◇" },
  { name: "Resin Tables", text: "Statement pieces made to order", icon: "▤" },
];

export default function App() {
  const [menu, setMenu] = useState(false);

  const whatsapp = () => {
    window.open(
      "https://wa.me/917873024955?text=Hello%20Sangram%20Resin%20Art%2C%20I%20want%20to%20order%20a%20customized%20resin%20product.",
      "_blank"
    );
  };

  return (
    <div className="site">
      <style>{`
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#080808;color:#f7f1e6}
        a{text-decoration:none;color:inherit}
        button{font:inherit}
        .site{min-height:100vh;background:
          radial-gradient(circle at 80% 10%,rgba(190,145,58,.16),transparent 28%),
          radial-gradient(circle at 10% 35%,rgba(119,82,30,.11),transparent 30%),#080808}
        .nav{position:sticky;top:0;z-index:20;background:rgba(8,8,8,.82);backdrop-filter:blur(16px);border-bottom:1px solid rgba(213,171,82,.18)}
        .navin{max-width:1180px;margin:auto;padding:18px 22px;display:flex;align-items:center;justify-content:space-between}
        .brand{font-family:Georgia,serif;letter-spacing:2.5px;font-size:18px;font-weight:700}
        .brand span{display:block;font-family:Inter,sans-serif;font-size:8px;letter-spacing:4px;color:#c9a45b;margin-top:4px}
        .links{display:flex;gap:28px;font-size:13px;color:#cfc7ba}
        .links a:hover{color:#d9b66d}
        .menu{display:none;background:none;border:1px solid #4c3a1e;color:#fff;padding:8px 11px;border-radius:9px}
        .hero{max-width:1180px;margin:auto;min-height:680px;padding:90px 22px 70px;display:grid;grid-template-columns:1.05fr .95fr;gap:55px;align-items:center}
        .eyebrow{color:#d5b26a;letter-spacing:4px;font-size:11px;font-weight:700;margin-bottom:20px}
        h1{font-family:Georgia,serif;font-size:clamp(48px,7vw,86px);line-height:.98;margin:0 0 22px;font-weight:500}
        h1 em{font-style:normal;color:#d4ae61}
        .hero p{max-width:570px;color:#aaa39a;line-height:1.8;font-size:16px}
        .actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}
        .gold{border:0;background:linear-gradient(135deg,#e0bd70,#9a6b25);color:#090909;padding:14px 22px;border-radius:4px;font-weight:800;cursor:pointer;box-shadow:0 10px 35px rgba(177,126,38,.18)}
        .outline{border:1px solid #5b4929;background:transparent;color:#e5d5b7;padding:13px 22px;border-radius:4px;cursor:pointer}
        .heroart{min-height:470px;border:1px solid rgba(210,169,81,.22);border-radius:24px;position:relative;overflow:hidden;background:
          linear-gradient(145deg,rgba(255,255,255,.04),rgba(255,255,255,0)),
          radial-gradient(circle at 30% 25%,rgba(207,166,73,.7),transparent 15%),
          radial-gradient(circle at 70% 65%,rgba(76,137,135,.55),transparent 27%),
          radial-gradient(circle at 48% 45%,rgba(104,57,129,.55),transparent 35%),#12100d}
        .heroart:before{content:"";position:absolute;inset:10%;border-radius:50%;border:1px solid rgba(240,205,123,.28);box-shadow:0 0 100px rgba(201,157,65,.18),inset 0 0 70px rgba(255,255,255,.05)}
        .heroart:after{content:"HANDCRAFTED";position:absolute;bottom:25px;right:28px;font-size:9px;letter-spacing:4px;color:#d9bd80}
        .section{max-width:1180px;margin:auto;padding:80px 22px}
        .head{text-align:center;max-width:680px;margin:0 auto 42px}
        .head small{color:#cda85c;letter-spacing:3px;font-weight:700}
        .head h2{font-family:Georgia,serif;font-size:42px;font-weight:500;margin:12px 0}
        .head p{color:#918d86;line-height:1.7}
        .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .card{padding:28px;min-height:210px;border:1px solid #29251f;background:linear-gradient(145deg,#11100e,#0c0c0b);border-radius:14px;transition:.25s}
        .card:hover{transform:translateY(-5px);border-color:#71572b}
        .icon{width:50px;height:50px;border-radius:50%;display:grid;place-items:center;border:1px solid #72592c;color:#d5af60;font-size:22px;margin-bottom:24px}
        .card h3{margin:0 0 8px;font-family:Georgia,serif;font-size:23px;font-weight:500}
        .card p{color:#85817a;font-size:14px;line-height:1.6}
        .about{display:grid;grid-template-columns:1fr 1fr;gap:55px;align-items:center}
        .aboutbox{min-height:380px;border-radius:18px;border:1px solid #2d271c;background:linear-gradient(135deg,#18140e,#0d0d0c);display:grid;place-items:center;position:relative;overflow:hidden}
        .aboutbox div{font-family:Georgia,serif;text-align:center;font-size:42px;color:#cba75c}
        .aboutbox span{display:block;font-family:Inter,sans-serif;font-size:9px;letter-spacing:5px;color:#777;margin-top:10px}
        .about h2{font:500 43px Georgia,serif;margin:10px 0 18px}
        .about p{color:#99938a;line-height:1.8}
        .features{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:28px}
        .feature{border-left:2px solid #9b712c;padding-left:12px;font-size:13px;color:#d5cbbd}
        .cta{margin-top:30px;border:1px solid #4a3a22;border-radius:20px;padding:55px 30px;text-align:center;background:radial-gradient(circle at center,rgba(179,133,50,.14),transparent 60%),#0e0e0d}
        .cta h2{font:500 42px Georgia,serif;margin:8px 0 12px}
        .cta p{color:#8f8b83}
        footer{border-top:1px solid #211e19;padding:28px 22px;color:#6f6b64;font-size:12px;text-align:center}
        .mobile{display:none}
        @media(max-width:800px){
          .links{display:none}.menu{display:block}.mobile{display:${menu ? "flex" : "none"};position:absolute;top:69px;left:0;right:0;background:#0b0b0a;border-bottom:1px solid #292319;flex-direction:column;padding:20px 22px;gap:18px}
          .hero{grid-template-columns:1fr;padding-top:65px;min-height:auto}.heroart{min-height:330px}
          .grid{grid-template-columns:1fr 1fr}.about{grid-template-columns:1fr}.features{grid-template-columns:1fr}
        }
        @media(max-width:520px){.grid{grid-template-columns:1fr}.section{padding:65px 18px}.hero{padding-left:18px;padding-right:18px}h1{font-size:52px}.head h2,.about h2,.cta h2{font-size:34px}}
      `}</style>

      <nav className="nav">
        <div className="navin">
          <a className="brand" href="#home">
            SANGRAM RESIN ART
            <span>CUSTOMIZED • HANDMADE • UNIQUE</span>
          </a>
          <div className="links">
            <a href="#home">Home</a><a href="#products">Collections</a><a href="#about">About</a><a href="#contact">Contact</a>
          </div>
          <button className="menu" onClick={() => setMenu(!menu)}>☰</button>
          <div className="mobile">
            <a href="#home" onClick={() => setMenu(false)}>Home</a>
            <a href="#products" onClick={() => setMenu(false)}>Collections</a>
            <a href="#about" onClick={() => setMenu(false)}>About</a>
            <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div>
            <div className="eyebrow">PREMIUM RESIN CRAFTS</div>
            <h1>Art that makes<br/><em>memories shine.</em></h1>
            <p>Beautiful handcrafted resin art made specially for you. From elegant home décor to personalized gifts, every piece is designed with patience, creativity and premium finishing.</p>
            <div className="actions">
              <button className="gold" onClick={whatsapp}>Order on WhatsApp ↗</button>
              <a className="outline" href="#products">Explore Collection</a>
            </div>
          </div>
          <div className="heroart" aria-label="Premium resin art showcase"></div>
        </section>

        <section className="section" id="products">
          <div className="head">
            <small>OUR COLLECTION</small>
            <h2>Made to be remembered.</h2>
            <p>Choose a design or ask us to create something completely personal for your home, family, business or special occasion.</p>
          </div>
          <div className="grid">
            {products.map((p) => (
              <article className="card" key={p.name}>
                <div className="icon">{p.icon}</div>
                <h3>{p.name}</h3>
                <p>{p.text}. Customized colours, names, photos and sizes available on request.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="about">
            <div className="aboutbox"><div>SANGRAM<span>RESIN ART STUDIO</span></div></div>
            <div>
              <small className="eyebrow">WHY SANGRAM RESIN ART</small>
              <h2>Your idea. Our craft.</h2>
              <p>We create resin products that feel personal, premium and different. Tell us your idea, preferred colours and size — we turn it into a handmade piece made especially for you.</p>
              <div className="features">
                <div className="feature">Premium Finish</div>
                <div className="feature">Custom Designs</div>
                <div className="feature">Handmade With Care</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="cta">
            <small className="eyebrow">START YOUR CUSTOM ORDER</small>
            <h2>Have an idea in mind?</h2>
            <p>Send your design, photo or idea and let's create something unique.</p>
            <button className="gold" onClick={whatsapp}>Chat on WhatsApp →</button>
          </div>
        </section>
      </main>

      <footer>© 2026 Sangram Resin Art · Customized • Handmade • Unique</footer>
    </div>
  );
}
