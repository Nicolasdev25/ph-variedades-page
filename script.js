const THEME = "padrao"; // use "padrao" para voltar ao visual original
if (THEME === "natal") {
  document.documentElement.classList.add("natal");
  [...document.querySelectorAll(".hero-art .media")].forEach((m, i) => {
    const e = m.querySelector(".emo");
    if (e) e.textContent = ["🎄", "🎅", "🎁", "⭐"][i];
  });
  const x = new Date(new Date().getFullYear(), 11, 25),
    d = Math.ceil((x - new Date()) / 864e5),
    c = document.getElementById("count");
  c.textContent =
    d > 0
      ? `🎅 Faltam ${d} dias para o Natal`
      : d === 0
        ? "🎄 Hoje é Natal!"
        : "🎄 Feliz Natal!";
  if (!matchMedia("(prefers-reduced-motion:reduce)").matches) {
    for (let i = 0; i < 34; i++) {
      const s = document.createElement("span");
      s.className = "snow";
      s.textContent = "❄";
      s.style.cssText = `left:${Math.random() * 100}%;font-size:${10 + Math.random() * 14}px;animation-duration:${9 + Math.random() * 10}s;animation-delay:-${Math.random() * 14}s;--dx:${Math.random() * 80 - 40}px;opacity:${0.5 + Math.random() * 0.5}`;
      document.body.appendChild(s);
    }
  }
}
// Link do crédito (Instagram/site da NASC).
const NASC_URL = "";
const nl = document.getElementById("nascLink");
if (NASC_URL) {
  nl.href = NASC_URL;
  nl.target = "_blank";
  nl.rel = "noopener";
} else {
  nl.removeAttribute("href");
  nl.style.cursor = "default";
}
// Troque pelos números reais das lojas (DDI+DDD+número, só dígitos). E
const STORES = [
  {
    id: "centro",
    name: "Unidade Centro",
    addr: "Rua do Comércio, 416 – Centro",
    hours: "08:00 às 18:00",
    phone: "5582000000000",
    q: "Rua do Comércio, 416, Centro, Maceió - AL",
  },
  {
    id: "shopping",
    name: "Unidade Maceió Shopping",
    addr: "Maceió Shopping",
    hours: "09:00 às 22:00",
    phone: "5582000000001",
    q: "Maceió Shopping, Maceió - AL",
  },
];
const WA_SVG =
  '<svg class="wa-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.innerHTML =
    WA_SVG +
    (a.classList.contains("fab") ? "" : a.innerHTML.replace("💬", "").trim());
});
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = "#";
  a.setAttribute("role", "button");
  a.addEventListener("click", (e) => {
    e.preventDefault();
    openChooser(a.dataset.wa);
  });
});
const menu = document.getElementById("menu"),
  burger = document.getElementById("burger");
burger.addEventListener("click", () => menu.classList.toggle("open"));
menu
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => menu.classList.remove("open")),
  );
document.getElementById("y").textContent = new Date().getFullYear();
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

(function () {
  const c = document.getElementById("car");
  if (!c) return;
  const s = [...c.querySelectorAll(".media")],
    d = c.querySelector(".car-dots");
  let i = 0,
    t;
  s.forEach((_, n) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Foto " + (n + 1));
    b.onclick = () => {
      go(n);
      play();
    };
    d.appendChild(b);
  });
  const dots = [...d.children];
  function go(n) {
    i = (n + s.length) % s.length;
    s.forEach((e, k) => e.classList.toggle("on", k === i));
    dots.forEach((e, k) => e.classList.toggle("on", k === i));
  }
  function play() {
    clearInterval(t);
    if (!matchMedia("(prefers-reduced-motion:reduce)").matches)
      t = setInterval(() => go(i + 1), 4500);
  }
  c.querySelector(".prev").onclick = () => {
    go(i - 1);
    play();
  };
  c.querySelector(".next").onclick = () => {
    go(i + 1);
    play();
  };
  c.addEventListener("mouseenter", () => clearInterval(t));
  c.addEventListener("mouseleave", play);
  let x = null;
  c.addEventListener(
    "touchstart",
    (e) => {
      x = e.touches[0].clientX;
    },
    { passive: true },
  );
  c.addEventListener("touchend", (e) => {
    if (x === null) return;
    const dx = e.changedTouches[0].clientX - x;
    if (Math.abs(dx) > 40) {
      go(i + (dx < 0 ? 1 : -1));
      play();
    }
    x = null;
  });
  go(0);
  play();
})();

/* Natal: segure (mouse ou dedo) para criar uma bola de neve; solte para jogá-la */
if (THEME === "natal")
  (function () {
    const MAX = 150;
    let ball = null,
      raf,
      start,
      x = 0,
      y = 0,
      sx = 0,
      sy = 0,
      timer = null,
      active = false;
    const skip = (e) => e.target.closest("a,button,summary,input,textarea");
    const draw = (b, s) => {
      b.dataset.s = s;
      b.style.width = b.style.height = s + "px";
      b.style.transform = `translate(${x - s / 2}px,${y - s / 2}px)`;
    };
    function grow(t) {
      if (!active) return;
      draw(ball, Math.min(MAX, 12 + (t - start) / 18));
      raf = requestAnimationFrame(grow);
    }
    function hideHint() {
      const h = document.querySelector(".snow-hint");
      if (h) h.remove();
    }
    document.addEventListener("pointerdown", (e) => {
      if (e.button > 0 || skip(e)) return;
      sx = x = e.clientX;
      sy = y = e.clientY;
      timer = setTimeout(() => {
        hideHint();
        active = true;
        document.body.style.userSelect = "none";
        ball = document.createElement("div");
        ball.className = "snowball";
        document.body.appendChild(ball);
        start = performance.now();
        draw(ball, 12);
        raf = requestAnimationFrame(grow);
        if (navigator.vibrate) navigator.vibrate(10);
      }, 180);
    });
    document.addEventListener("pointermove", (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!active && timer && Math.hypot(x - sx, y - sy) > 12) {
        clearTimeout(timer);
        timer = null;
      } else if (active) draw(ball, parseFloat(ball.dataset.s));
    });
    function release() {
      clearTimeout(timer);
      timer = null;
      if (!active) return;
      active = false;
      document.body.style.userSelect = "";
      cancelAnimationFrame(raf);
      throwBall(ball, parseFloat(ball.dataset.s));
      ball = null;
    }
    document.addEventListener("pointerup", release);
    document.addEventListener("pointercancel", release);
    document.addEventListener("contextmenu", (e) => {
      if (timer || active) e.preventDefault();
    });
    function throwBall(b, s) {
      let px = x,
        py = y,
        vy = -3,
        last = performance.now();
      (function step(t) {
        const dt = Math.min(32, t - last) / 16;
        last = t;
        vy += 0.8 * dt;
        py += vy * dt;
        b.style.transform = `translate(${px - s / 2}px,${py - s / 2}px)`;
        if (py + s / 2 >= innerHeight - 6) {
          splash(px, innerHeight - 6, s);
          b.remove();
        } else requestAnimationFrame(step);
      })(last);
    }
    function splash(px, py, s) {
      const n = Math.round(10 + s / 5);
      for (let i = 0; i < n; i++) {
        const d = document.createElement("div"),
          r = 3 + Math.random() * (4 + s / 25);
        d.className = "snowdot";
        d.style.cssText = `left:${px - r / 2}px;top:${py - r / 2}px;width:${r}px;height:${r}px`;
        document.body.appendChild(d);
        const a = -Math.PI * Math.random(),
          v = 40 + Math.random() * (60 + s);
        d.animate(
          [
            { transform: "translate(0,0)", opacity: 1 },
            {
              transform: `translate(${Math.cos(a) * v}px,${Math.sin(a) * v * 0.8 + 30}px)`,
              opacity: 0,
            },
          ],
          { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" },
        ).onfinish = () => d.remove();
      }
    }
    setTimeout(() => {
      const h = document.createElement("div");
      h.className = "snow-hint";
      h.textContent = "❄️ Segure em qualquer lugar para fazer uma bola de neve";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 7200);
    }, 2500);
  })();

/* Escolha da loja: todo botão de WhatsApp abre este seletor */
function openChooser(msg) {
  let m = document.getElementById("waModal");
  if (!m) {
    m = document.createElement("div");
    m.id = "waModal";
    m.className = "wa-modal";
    m.setAttribute("role", "dialog");
    m.setAttribute("aria-modal", "true");
    m.setAttribute("aria-labelledby", "waTitle");
    m.innerHTML =
      '<div class="wa-box"><button class="wa-close" aria-label="Fechar">×</button><h3 id="waTitle">Com qual loja você quer falar?</h3><p>Escolha a unidade mais perto de você.</p>' +
      STORES.map(
        (s) =>
          `<a class="wa-opt" data-store="${s.id}" target="_blank" rel="noopener">${WA_SVG}<span><b>${s.name}</b><small>${s.addr} · ${s.hours}</small></span></a>`,
      ).join("") +
      "</div>";
    document.body.appendChild(m);
    m.addEventListener("click", (e) => {
      if (e.target === m || e.target.closest(".wa-close")) closeChooser();
      else if (e.target.closest(".wa-opt")) setTimeout(closeChooser, 200);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeChooser();
    });
  }
  STORES.forEach((s) => {
    m.querySelector(`[data-store="${s.id}"]`).href =
      `https://wa.me/${s.phone}?text=${encodeURIComponent(msg)}`;
  });
  m.dataset.opener = "";
  window._waLast = document.activeElement;
  m.classList.add("open");
  document.body.style.overflow = "hidden";
  m.querySelector(".wa-opt").focus();
}
function closeChooser() {
  const m = document.getElementById("waModal");
  if (!m || !m.classList.contains("open")) return;
  m.classList.remove("open");
  document.body.style.overflow = "";
  if (window._waLast && window._waLast.focus) window._waLast.focus();
}

/* Localização: abas por loja + mapa do Google */
(function () {
  const sec = document.getElementById("localizacao");
  if (!sec) return;
  const $ = (id) => document.getElementById(id),
    tabs = [...sec.querySelectorAll(".loc-tab")];
  $("locWa").innerHTML = WA_SVG + "WhatsApp desta loja";
  // Se o ambiente bloquear o mapa incorporado, mostra o cartão com o botão "Abrir no Google Maps"
  document.addEventListener("securitypolicyviolation", (e) => {
    if (String(e.blockedURI).includes("google.com"))
      $("locMap").style.display = "none";
  });

  function show(id) {
    const s = STORES.find((x) => x.id === id),
      q = encodeURIComponent(s.q);
    tabs.forEach((t) => {
      const on = t.dataset.store === id;
      t.classList.toggle("on", on);
      t.setAttribute("aria-selected", on);
    });
    $("locName").textContent = s.name;
    $("locAddr").textContent = s.addr;
    $("locHours").textContent = "🕗 " + s.hours;
    $("locMap").src = `https://www.google.com/maps?q=${q}&output=embed`;
    $("locFbName").textContent = s.name;
    $("locFbAddr").textContent = s.addr;
    $("locOpen").href = `https://www.google.com/maps/search/?api=1&query=${q}`;
    $("locRoute").href =
      `https://www.google.com/maps/dir/?api=1&destination=${q}`;
    $("locWa").href =
      `https://wa.me/${s.phone}?text=${encodeURIComponent("Olá! Vi a " + s.name + " no site e quero falar com vocês.")}`;
  }
  tabs.forEach((t) => t.addEventListener("click", () => show(t.dataset.store)));
  show("centro");
})();
