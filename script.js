window.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.slider-img');
  const dots = document.querySelectorAll('.slider-dots .dot');
  let current = 0;

  function showSlide(idx) {
    imgs.forEach((img, i) => img.classList.toggle('active', i === idx));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
    current = idx;
  }

  if (document.querySelector('.slider-btn.prev') && imgs.length) {
    document.querySelector('.slider-btn.prev').onclick = () => {
      showSlide((current - 1 + imgs.length) % imgs.length);
    };
    document.querySelector('.slider-btn.next').onclick = () => {
      showSlide((current + 1) % imgs.length);
    };
    dots.forEach((dot, i) => {
      dot.onclick = () => showSlide(i);
    });

    setInterval(() => {
      showSlide((current + 1) % imgs.length);
    }, 5000);
  }

  const services = [
    {
      title: "Acesso Remoto Profissional para Empresas Modernas",
      desc: `Conecte-se aos seus computadores, servidores e sistemas de qualquer lugar do mundo, com máxima segurança, velocidade e simplicidade.<br>
             Gerencie equipes, preste suporte e mantenha sua operação ativa 24h, sem limites.`,
      btn: "Quero acesso remoto agora",
      btnClass: "cta",
      extra: `<div class="sistemas-suportadas">
                <span>Compatível com:</span>
                <ul>
                  <li title="Windows"><img src="assets/icons/windows.svg" alt="Windows" /></li>
                  <li title="macOS"><img src="assets/icons/macos.svg" alt="macOS" /></li>
                  <li title="Linux"><img src="assets/icons/linux.svg" alt="Linux" /></li>
                  <li title="Android"><img src="assets/icons/android.svg" alt="Android" /></li>
                  <li title="iOS"><img src="assets/icons/ios.svg" alt="iOS" /></li>
                  <li title="Raspberry Pi"><img src="assets/icons/raspberry.svg" alt="Raspberry Pi" /></li>
                </ul>
              </div>`
    },
    {
      title: "Gestão de TI Inteligente",
      desc: "Monitoramento, suporte e consultoria para manter sua TI eficiente e segura.",
      btn: "Quero otimizar minha TI",
      btnClass: "cta small",
      extra: ""
    },
    {
      title: "Chatbot Inteligente",
      desc: "Automatize o atendimento com IA, integrando WhatsApp, site e redes sociais.",
      btn: "Quero um chatbot",
      btnClass: "cta small",
      extra: ""
    },
    {
      title: "Backup em Nuvem",
      desc: "Backups automáticos e criptografados para sua tranquilidade.",
      btn: "Quero backup seguro",
      btnClass: "cta small",
      extra: ""
    }
  ];

  let centerIdx = 0;

  function renderCarousel() {
    const leftIdx = (centerIdx - 1 + services.length) % services.length;
    const rightIdx = (centerIdx + 1) % services.length;

    // Card central
    document.getElementById('center-card').innerHTML = `
      <h1>${services[centerIdx].title}</h1>
      <p class="hero-lead">${services[centerIdx].desc}</p>
      <a class="${services[centerIdx].btnClass}" href="contato.html">${services[centerIdx].btn}</a>
      ${services[centerIdx].extra}
    `;
    // Card esquerdo
    document.getElementById('left-card').innerHTML = `
      <h2>${services[leftIdx].title}</h2>
      <p>${services[leftIdx].desc}</p>
      <a class="${services[leftIdx].btnClass}" href="contato.html">${services[leftIdx].btn}</a>
      ${services[leftIdx].extra}
    `;
    // Card direito
    document.getElementById('right-card').innerHTML = `
      <h2>${services[rightIdx].title}</h2>
      <p>${services[rightIdx].desc}</p>
      <a class="${services[rightIdx].btnClass}" href="contato.html">${services[rightIdx].btn}</a>
      ${services[rightIdx].extra}
    `;
  }

  if (
    document.getElementById('center-card') &&
    document.getElementById('left-card') &&
    document.getElementById('right-card')
  ) {
    document.querySelector('.carousel-btn.prev').onclick = () => {
      centerIdx = (centerIdx - 1 + services.length) % services.length;
      renderCarousel();
    };
    document.querySelector('.carousel-btn.next').onclick = () => {
      centerIdx = (centerIdx + 1) % services.length;
      renderCarousel();
    };

    renderCarousel();
  }
});