import React, { useState } from "react";

const WA = "91917873024955";

const collections = [
  ["Resin Wall Art", "Luxury statement art for premium interiors", "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85"],
  ["Custom Name Plates", "Personalized entrance pieces made for you", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"],
  ["Resin Photo Frames", "Turn special memories into lasting art", "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85"],
  ["Resin Clocks", "Functional décor with handcrafted character", "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=85"],
  ["Keychains & Gifts", "Small personalized gifts with big meaning", "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=85"],
  ["Resin Tables", "One-of-a-kind centrepieces made to order", "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1200&q=85"],
];

const gallery = [
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
];

function App() {
  const [open, setOpen] = useState(false);

  const whatsapp = (text = "Hello Sangram Resin Art, I want a customized resin product.") => {
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="app">
      <style>{`
        :root{--bg:#070706;--panel:#11100e;--gold:#d9b76a;--cream:#f6efe1;--muted:#a49c90;--line:rgba(255,255,255,.09)}
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--cream);font-family:Inter,Arial,sans-serif}
        button,a{font:inherit}a{text-decoration:none;color:inherit}button{cursor:pointer}
        .app{overflow:hidden;background:
          radial-gradient(circle at 8% 8%,rgba(211,169,77,.11),transparent 25%),
          radial-gradient(circle at 92% 18%,rgba(107,61,157,.10),transparent 23%),var(--bg)}
        .top{height:35px;border-bottom:1px solid var(--line);display:flex;justify-content:center;align-items:center;color:#a99b7b;font-size:10px;letter-spacing:4px;text-transform:uppercase}
        header{position:sticky;top:0;z-index:99;background:rgba(7,7,6,.88);backdrop-filter:blur(18px);border-bottom:1px solid var(--line)}
        .nav{max-width:1240px;margin:auto;height:76px;padding:0 24px;display:flex;align-items:center;justify-content:space-between}
        .logo{font-family:Georgia,serif;font-size:21px;letter-spacing:2px}.logo em{display:block;color:var(--gold);font:9px Inter,sans-serif;letter-spacing:5px;font-style:normal;margin-top:5px}
        .links{display:flex;gap:30px;color:#c1baae;font-size:13px}.links a:hover{color:white}
        .quote{padding:11px 20px;border:1px solid #8d6c35;border-radius:3px;background:transparent;color:#e3c477}
        .hamb{display:none;background:none;border:0;color:white;font-size:25px}
        .hero{max-width:1240px;margin:auto;min-height:770px;padding:80px 24px 110px;display:grid;grid-template-columns:1fr 1fr;gap:65px;align-items:center}
        .tag{color:var(--gold);font-size:10px;letter-spacing:5px;text-transform:uppercase}
        h1{font:500 clamp(58px,7vw,104px)/.86 Georgia,serif;margin:23px 0 28px;letter-spacing:-3px}
        h1 .gold{color:var(--gold)}
        .hero p{color:var(--muted);font-size:16px;line-height:1.85;max-width:600px}
        .buttons{display:flex;gap:12px;margin-top:34px}.primary{border:0;background:linear-gradient(135deg,#ebcb7e,#a47b35);padding:15px 24px;border-radius:3px;color:#171208;font-weight:800}.secondary{border:1px solid #39352e;background:transparent;color:white;padding:14px 23px;border-radius:3px}
        .visual{height:580px;border-radius:4px;position:relative;overflow:hidden;border:1px solid rgba(217,183,106,.25);background:
          radial-gradient(ellipse at 65% 30%,rgba(217,183,106,.7),transparent 5%),
          radial-gradient(ellipse at 55% 42%,rgba(124,71,192,.65),transparent 17%),
          radial-gradient(ellipse at 38% 64%,rgba(27,112,129,.7),transparent 22%),
          linear-gradient(145deg,#211a12,#050505 62%);
          box-shadow:inset 0 0 100px rgba(0,0,0,.5),0 30px 80px rgba(0,0,0,.4)}
        .visual:before{content:"";position:absolute;width:65%;aspect-ratio:1;border:1px solid rgba(232,199,124,.24);border-radius:50%;left:18%;top:17%;box-shadow:0 0 100px rgba(210,169,74,.12)}
        .visual .stamp{position:absolute;bottom:30px;right:32px;text-align:right;color:#a99059;font-size:9px;letter-spacing:4px;line-height:2}
        .side{position:absolute;left:25px;bottom:30px;writing-mode:vertical-rl;color:#746b5b;font-size:9px;letter-spacing:5px}
        section{max-width:1240px;margin:auto;padding:105px 24px}
        .intro{display:flex;justify-content:space-between;gap:50px;align-items:end;margin-bottom:45px}.intro h2{font:500 55px/1 Georgia,serif;margin:10px 0 0}.intro p{max-width:430px;color:var(--muted);line-height:1.7;font-size:14px}
        .eyebrow{font-size:10px;letter-spacing:4px;color:var(--gold);text-transform:uppercase}
        .collections{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.product{position:relative;background:#100f0d;border:1px solid var(--line);overflow:hidden;min-height:420px}.product img{width:100%;height:275px;object-fit:cover;display:block;filter:saturate(.85)}.product:hover img{filter:saturate(1.15)}.product .info{padding:23px}.product h3{font:500 26px Georgia,serif;margin:0 0 8px}.product p{margin:0;color:#918b81;font-size:13px;line-height:1.6}.number{position:absolute;top:15px;right:15px;background:rgba(7,7,6,.75);border:1px solid rgba(255,255,255,.14);padding:7px 9px;font-size:9px;color:#d7c18e}
        .statement{max-width:1240px;margin:30px auto 80px;padding:0 24px}.statementBox{min-height:360px;display:grid;place-items:center;text-align:center;border:1px solid rgba(217,183,106,.22);background:radial-gradient(circle,rgba(217,183,106,.12),transparent 48%),#0e0d0b;padding:50px}.statement h2{font:500 clamp(42px,6vw,72px)/.95 Georgia,serif;margin:15px 0}.statement p{color:var(--muted);max-width:600px;line-height:1.8;margin:0 auto 27px}
        .story{display:grid;grid-template-columns:.8fr 1.2fr;gap:90px;align-items:center}.story h2{font:500 57px/1 Georgia,serif;margin:14px 0 25px}.story p{color:var(--muted);line-height:1.9}.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:25px}.stat{border:1px solid var(--line);padding:20px}.stat b{font:500 30px Georgia,serif;color:var(--gold);display:block}.stat span{color:#827b72;font-size:11px}
        .gallery{display:grid;grid-template-columns:1.4fr .8fr .8fr;grid-template-rows:230px 230px;gap:10px}.gallery img{width:100%;height:100%;object-fit:cover}.gallery img:first-child{grid-row:span 2}.gallery img:hover{filter:brightness(1.1)}
        .contact{max-width:1240px;margin:0 auto 100px;padding:0 24px}.contactBox{padding:65px 30px;text-align:center;border-top:1px solid #302b22;border-bottom:1px solid #302b22}.contact h2{font:500 58px Georgia,serif;margin:12px 0}.contact p{color:var(--muted);line-height:1.7;max-width:550px;margin:0 auto 25px}
        footer{border-top:1px solid var(--line);padding:35px 24px}.footerIn{max-width:1240px;margin:auto;display:flex;justify-content:space-between;gap:20px;color:#79736b;font-size:12px}.float{position:fixed;z-index:100;right:23px;bottom:23px;border:0;background:#25d366;color:#061008;padding:14px 19px;border-radius:30px;font-weight:800;box-shadow:0 12px 35px #0008}
        @media(max-width:850px){.links,.quote{display:none}.hamb{display:block}.hero{grid-template-columns:1fr;padding-top:60px}.visual{height:400px}.collections{grid-template-columns:1fr 1fr}.story{grid-template-columns:1fr;gap:35px}.gallery{grid-template-columns:1fr 1fr;grid-template-rows:210px 210px 210px}.gallery img:first-child{grid-row:span 1}.intro{display:block}.intro p{margin-top:15px}}
        @media(max-width:560px){.top{font-size:8px;letter-spacing:2px}.nav{height:68px}.hero{min-height:auto;padding:65px 18px 80px}.hero h1{font-size:58px}.buttons{flex-direction:column}.visual{height:350px}.collections{grid-template-columns:1fr}section{padding:75px 18px}.intro h2,.story h2,.contact h2{font-size:42px}.gallery{grid-template-columns:1fr;grid-template-rows:250px 180px 180px 180px 180px}.stats{grid-template-columns:1fr}.statement{padding:0 18px}.statementBox{padding:35px 20px}}
      `}</style>

      <div className="top">Handcrafted in Odisha • Customized • Premium Resin Art</div>

      <header>
        <div className="nav">
          <a className="logo" href="#home">SANGRAM RESIN ART<em>CRAFTED FOR YOUR STORY</em></a>
          <nav className="links">
            <a href="#home">Home</a><a href="#collections">Collections</a><a href="#story">Our Story</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a>
          </nav>
          <button className="quote" onClick={() => whatsapp("Hello Sangram Resin Art, I want a quotation.")}>Get a Quote</button>
          <button className="hamb" onClick={() => setOpen(!open)}>☰</button>
        </div>
        {open && <div style={{background:"#0c0b09",padding:"20px 24px",display:"grid",gap:18,borderTop:"1px solid #25221d"}}>
          {["home","collections","story","gallery","contact"].map(x=><a key={x} href={"#"+x} onClick={()=>setOpen(false)} style={{color:"#ddd",textTransform:"capitalize"}}>{x}</a>)}
        </div>}
      </header>

      <main>
        <section className="hero" id="home">
          <div>
            <div className="tag">Premium Resin Crafts • Odisha</div>
            <h1>Where <span className="gold">art</span><br/>becomes a<br/><span className="gold">memory.</span></h1>
            <p>Unique resin creations, personalized gifts and statement décor — designed around your imagination and handcrafted with a premium finish.</p>
            <div className="buttons">
              <button className="primary" onClick={() => whatsapp("Hello Sangram Resin Art, I want to create a custom resin piece.")}>Start a Custom Order →</button>
              <a className="secondary" href="#collections">View Collections</a>
            </div>
          </div>
          <div className="visual"><div className="side">SANGRAM • RESIN • ART</div><div className="stamp">HANDMADE<br/>CUSTOMIZED<br/>UNIQUE</div></div>
        </section>

        <section id="collections">
          <div className="intro"><div><div className="eyebrow">The Collection</div><h2>Made for your space.</h2></div><p>Every piece begins with an idea. Choose a category now; your own product photos can be added later as the collection grows.</p></div>
          <div className="collections">{collections.map((c,i)=><article className="product" key={c[0]}><span className="number">0{i+1}</span><img src={c[2]} alt={c[0]}/><div className="info"><h3>{c[0]}</h3><p>{c[1]}</p></div></article>)}</div>
        </section>

        <div className="statement">
          <div className="statementBox">
            <div><div className="eyebrow">Not mass produced</div><h2>Your idea.<br/><span style={{color:"var(--gold)"}}>Your resin.</span></h2><p>From a name plate for your new home to a wedding keepsake or a dramatic resin table, we create pieces that feel personal.</p><button className="primary" onClick={() => whatsapp()}>Discuss Your Idea</button></div>
          </div>
        </div>

        <section id="story">
          <div className="story">
            <div><div className="eyebrow">Sangram Resin Art</div><h2>Crafted slowly.<br/>Made to last.</h2><p>We believe handmade art should feel different. Our focus is customization, clean finishing and designs that carry a story.</p><p>Send your reference, size, colour ideas and requirements on WhatsApp. We will discuss the design before your order is made.</p></div>
            <div className="stats"><div className="stat"><b>100%</b><span>Customized approach</span></div><div className="stat"><b>01</b><span>Design made around you</span></div><div className="stat"><b>∞</b><span>Ideas & possibilities</span></div><div className="stat"><b>Premium</b><span>Handcrafted finish</span></div></div>
          </div>
        </section>

        <section id="gallery">
          <div className="intro"><div><div className="eyebrow">Visual Journal</div><h2>Inspiration.</h2></div><p>These are temporary visuals. Replace them later with your own resin artwork photos without changing the website structure.</p></div>
          <div className="gallery">{gallery.map((g,i)=><img key={g} src={g} alt={"Resin art inspiration "+(i+1)}/>)}</div>
        </section>

        <div className="contact" id="contact"><div className="contactBox"><div className="eyebrow">Let's Create</div><h2>Have an idea?</h2><p>Tell us what you want to create. We will discuss the design, size, colours and quotation directly on WhatsApp.</p><button className="primary" onClick={()=>whatsapp("Hello Sangram Resin Art, I have an idea for a customized resin product.")}>WhatsApp Us →</button></div></div>
      </main>

      <footer><div className="footerIn"><span>© {new Date().getFullYear()} SANGRAM RESIN ART</span><span>CUSTOMIZED • HANDMADE • UNIQUE</span></div></footer>
      <button className="float" onClick={()=>whatsapp()}>💬 WhatsApp</button>
    </div>
  );
}

export default App;
