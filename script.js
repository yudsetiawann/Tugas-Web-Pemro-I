document.addEventListener("DOMContentLoaded", () => {
  // 1. Logika Menu Mobile
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // 2. Logika Animasi Scroll Reveal
  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Saat elemen terlihat, tambahkan kelas 'revealed'
            entry.target.classList.add("revealed");
          } else {
            // Saat elemen keluar dari pandangan, hapus kelas 'revealed'
            entry.target.classList.remove("revealed");
          }
        });
      },
      {
        threshold: 0.1, // Picu saat 10% elemen terlihat
      }
    );

    // Amati setiap elemen dengan kelas .reveal
    revealElements.forEach((el) => {
      const delay = el.style.animationDelay || "0s";
      el.style.setProperty("--delay", delay);
      el.style.transitionDelay = "var(--delay)";

      observer.observe(el);
    });
  }

  // --- 3. Logika Form Kontak WhatsApp (TETAP SAMA) ---
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      // Mencegah form mengirim data secara normal
      event.preventDefault();

      const nomorWhatsApp = "6285185072004";

      // Ambil data dari form
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Buat template pesan
      const templatePesan = `
Halo, saya ${name}.
Email: ${email}

Pesan:
${message}
      `;

      // Format pesan untuk URL (encode)
      const pesanWhatsApp = encodeURIComponent(templatePesan.trim());

      // Buat URL WhatsApp
      const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${pesanWhatsApp}`;

      // Buka WhatsApp di tab baru
      window.open(urlWhatsApp, "_blank");
    });
  }
});
