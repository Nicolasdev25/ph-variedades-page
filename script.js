const THEME = "padrao"; // use "natal" para ativar o tema de Natal
if (THEME === "natal") {
  document.documentElement.classList.add("natal");
  [...document.querySelectorAll(".hero-art .media")].forEach(
    (m, i) => (m.textContent = ["🎄", "🎅", "🎁", "⭐"][i]),
  );
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
// Link do crédito (Instagram/site da NASC). Deixe "" para não ser clicável.

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
// Trocar pelo número real (DDI+DDD+número, só dígitos)
const WHATSAPP = "5582000000000";
const WA_SVG =
  '<svg class="wa-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.innerHTML =
    WA_SVG +
    (a.classList.contains("fab") ? "" : a.innerHTML.replace("💬", "").trim());
});
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(a.dataset.wa)}`;
  a.target = "_blank";
  a.rel = "noopener";
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
