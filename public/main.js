(function() {
  'use strict';
  
  if (window.__mainScriptLoaded) return;
  window.__mainScriptLoaded = true;

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.contact-method').forEach(method => {
      method.addEventListener('mouseenter', () => {
        method.style.transform = 'translateY(-2px)';
      });
      method.addEventListener('mouseleave', () => {
        method.style.transform = 'translateY(0)';
      });
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          mobileMenu?.classList.add('hidden');
        }
      });
    });

    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header?.classList.add('bg-black/95');
      } else {
        header?.classList.remove('bg-black/95');
      }
    });

    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear().toString();
    }

    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTopBtn.classList.remove('opacity-0');
          backToTopBtn.classList.add('opacity-100');
        } else {
          backToTopBtn.classList.remove('opacity-100');
          backToTopBtn.classList.add('opacity-0');
        }
      });
    }

    const whatsappWidget = document.getElementById('whatsapp-widget');
    const whatsappToggle = document.getElementById('whatsapp-toggle');
    const whatsappChat = document.getElementById('whatsapp-chat');
    const closeChat = document.getElementById('close-chat');
    const whatsappForm = document.getElementById('whatsapp-form');
    const whatsappMessage = document.getElementById('whatsapp-message');

    function toggleChat() {
      whatsappChat?.classList.toggle('hidden');
      const badge = whatsappToggle?.querySelector('span');
      if (badge && !whatsappChat?.classList.contains('hidden')) {
        badge.style.display = 'none';
      }
    }

    if (whatsappToggle) whatsappToggle.addEventListener('click', toggleChat);
    if (closeChat) closeChat.addEventListener('click', toggleChat);

    if (whatsappForm) {
      whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = whatsappMessage?.value.trim();
        if (message) {
          const encodedMessage = encodeURIComponent(message);
          const whatsappURL = `https://wa.me/543764287394?text=${encodedMessage}`;
          window.open(whatsappURL, '_blank');
          if (whatsappMessage) whatsappMessage.value = '';
          whatsappChat?.classList.add('hidden');
        }
      });
    }

    document.addEventListener('click', (e) => {
      if (!whatsappWidget?.contains(e.target) && !whatsappChat?.classList.contains('hidden')) {
        whatsappChat?.classList.add('hidden');
      }
    });
  });
})();
