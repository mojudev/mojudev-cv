/* ============================================
   MOJUDEV - Ivan Moya Personal Website
   JavaScript – Interactions, Animations & i18n
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ========== i18n TRANSLATIONS ========== */
  const translations = {
    es: {
      // Nav
      nav_about: '¿Quién Soy?',
      nav_tools: 'Herramientas',
      nav_experience: 'Experiencia',

      // Hero
      hero_desc: 'Transformando datos en decisiones accionables en entornos digitales y de marketing.',
      hero_core_tools: 'Core Expertise',
      hero_integrations: 'Integraciones',
      hero_experience: 'Experiencia',
      hero_companies_intl: 'Internacionales',
      hero_companies_nat: 'Nacionales',
      hero_companies_local: 'Locales',
      company_cepi: 'Cepi-Base (Academia)',

      // About
      about_title: 'Perfil híbrido<br>técnico-analítico',
      about_subtitle: 'Evolución desde desarrollo y sistemas hacia Digital Analytics & Data, con foco en calidad del dato y decisiones accionables.',
      timeline_1_title: 'Inicio Técnico',
      timeline_1_desc: 'Desarrollo web, administración de sistemas y soporte IT. Base sólida en infraestructura y código.',
      timeline_2_title: 'Evolución hacia la Analítica',
      timeline_2_desc: 'Transición natural desde el desarrollo hacia la analítica digital, descubriendo el poder de los datos para tomar decisiones.',
      timeline_3_title: 'Especialización Enterprise',
      timeline_3_desc: 'Dominio de herramientas enterprise como GA4, Adobe Analytics, Tealium y Segment en entornos de gran escala.',
      timeline_4_title: 'Rol Estratégico Transversal',
      timeline_4_desc: 'Punto de conexión entre Marketing, Tech y Data en compañías digitales líderes. Visión estratégica con base técnica.',
      axis_1_title: 'GA4 & Adobe Analytics',
      axis_1_desc: 'Especialización en implementación, gobernanza y análisis en las principales plataformas de analítica digital.',
      axis_2_title: 'Gobernanza de Datos',
      axis_2_desc: 'Definición de estándares, tracking y aseguramiento de la calidad y coherencia del dato analítico.',
      axis_3_title: 'Marketing × Tech × Data',
      axis_3_desc: 'Perfil puente entre tres mundos: comprensión técnica, visión de marketing y mentalidad data-driven.',
      axis_4_title: 'Migraciones & Centralización',
      axis_4_desc: 'Experiencia en migraciones de analítica y centralización de medición en entornos multi-marca.',
      axis_5_title: 'Background Técnico',
      axis_5_desc: 'Base sólida en Web Dev, SysAdmin y QA que potencia la comprensión de implementaciones complejas.',
      axis_6_title: 'Calidad del Dato',
      axis_6_desc: 'Foco en la coherencia analítica y la fiabilidad de los datos como base para decisiones de negocio.',

      // Tools
      tools_title: 'Stack Profesional',
      tools_subtitle: 'Las herramientas y tecnologías con las que trabajo día a día para transformar datos en valor.',

      // Experience
      exp_title: 'Experiencia & Proyectos',
      exp_subtitle: 'Trayectoria profesional en entornos enterprise y compañías digitales líderes.',
      exp_fc_1: 'Definición y análisis de métricas digitales',
      exp_fc_2: 'Implementación y gobernanza de GA4 y Adobe Analytics',
      exp_fc_3: 'Integración con herramientas de adquisición',
      exp_fc_4: 'Soporte transversal a Marketing, Tech y Data',
      exp_fc_5: 'Asegurar calidad y coherencia del dato',
      exp_fc_6: 'Análisis accionable para toma de decisiones',
      exp_ad_1: 'Gobernanza de GTM y Twilio Segment',
      exp_ad_2: 'Coordinación técnica con equipos de desarrollo',
      exp_ad_3: 'Modelos de medición cross-team',
      exp_ad_4: 'Activación correcta de Google Ads y Meta',
      exp_ad_5: 'Mejora de autonomía analítica del equipo',
      exp_sc_role: 'Migración & Centralización Analítica',
      exp_sc_1: 'Migración y centralización de analítica digital',
      exp_sc_2: 'Resolución de fragmentación analítica',
      exp_sc_3: 'Definición de estándares cross-site',
      exp_sc_4: 'Metodologías comunes de medición',
      exp_kc_1: 'Administración de infraestructura IT',
      exp_kc_2: 'Gestión de servidores Windows y Linux',
      exp_kc_3: 'Gestión de dominios y DNS',
      exp_kc_4: 'Desarrollo web WordPress',
      exp_kc_5: 'Implementación y análisis de Google Analytics',
      exp_zu_1: 'Técnico de Calidad Web (HP Quality Center)',
      exp_zu_2: 'Desarrollo Cobol (AS400)',
      exp_ce_role: 'Profesor de Informática',
      exp_ce_1: 'Formación en Microsoft Office',
      exp_ce_2: 'Formación en PHP, HTML, CSS, JS',
      exp_ce_3: 'WordPress y Adobe Suite',

      // Footer
      footer_home: 'Inicio',
    },
    en: {
      // Nav
      nav_about: 'About Me',
      nav_tools: 'Tools',
      nav_experience: 'Experience',

      // Hero
      hero_desc: 'Transforming data into actionable decisions in digital and marketing environments.',
      hero_core_tools: 'Core Expertise',
      hero_integrations: 'Integrations',
      hero_experience: 'Experience',
      hero_companies_intl: 'International',
      hero_companies_nat: 'National',
      hero_companies_local: 'Local',
      company_cepi: 'Cepi-Base (Academy)',

      // About
      about_title: 'Hybrid profile<br>technical-analytical',
      about_subtitle: 'Evolution from development and systems toward Digital Analytics & Data, focused on data quality and actionable decisions.',
      timeline_1_title: 'Technical Start',
      timeline_1_desc: 'Web development, systems administration and IT support. Solid foundation in infrastructure and code.',
      timeline_2_title: 'Evolution into Analytics',
      timeline_2_desc: 'Natural transition from development to digital analytics, discovering the power of data for decision making.',
      timeline_3_title: 'Enterprise Specialization',
      timeline_3_desc: 'Mastery of enterprise tools like GA4, Adobe Analytics, Tealium and Segment in large-scale environments.',
      timeline_4_title: 'Strategic Cross-functional Role',
      timeline_4_desc: 'Bridging Marketing, Tech and Data in leading digital companies. Strategic vision with technical foundation.',
      axis_1_title: 'GA4 & Adobe Analytics',
      axis_1_desc: 'Specialization in implementation, governance and analysis on the leading digital analytics platforms.',
      axis_2_title: 'Data Governance',
      axis_2_desc: 'Definition of standards, tracking, and ensuring quality and consistency of analytics data.',
      axis_3_title: 'Marketing × Tech × Data',
      axis_3_desc: 'Bridge profile across three worlds: technical understanding, marketing vision and data-driven mindset.',
      axis_4_title: 'Migrations & Centralization',
      axis_4_desc: 'Experience in analytics migrations and measurement centralization in multi-brand environments.',
      axis_5_title: 'Technical Background',
      axis_5_desc: 'Solid foundation in Web Dev, SysAdmin and QA that enhances the understanding of complex implementations.',
      axis_6_title: 'Data Quality',
      axis_6_desc: 'Focus on analytical consistency and data reliability as a foundation for business decisions.',

      // Tools
      tools_title: 'Professional Stack',
      tools_subtitle: 'The tools and technologies I work with every day to transform data into value.',

      // Experience
      exp_title: 'Experience & Projects',
      exp_subtitle: 'Professional career in enterprise environments and leading digital companies.',
      exp_fc_1: 'Definition and analysis of digital metrics',
      exp_fc_2: 'Implementation and governance of GA4 and Adobe Analytics',
      exp_fc_3: 'Integration with acquisition tools',
      exp_fc_4: 'Cross-functional support to Marketing, Tech and Data',
      exp_fc_5: 'Ensuring data quality and consistency',
      exp_fc_6: 'Actionable analysis for decision making',
      exp_ad_1: 'GTM and Twilio Segment governance',
      exp_ad_2: 'Technical coordination with development teams',
      exp_ad_3: 'Cross-team measurement models',
      exp_ad_4: 'Correct activation of Google Ads and Meta',
      exp_ad_5: 'Improving analytical autonomy of the team',
      exp_sc_role: 'Migration & Analytics Centralization',
      exp_sc_1: 'Migration and centralization of digital analytics',
      exp_sc_2: 'Resolution of analytics fragmentation',
      exp_sc_3: 'Definition of cross-site standards',
      exp_sc_4: 'Common measurement methodologies',
      exp_kc_1: 'IT infrastructure administration',
      exp_kc_2: 'Windows and Linux server management',
      exp_kc_3: 'Domain and DNS management',
      exp_kc_4: 'WordPress web development',
      exp_kc_5: 'Google Analytics implementation and analysis',
      exp_zu_1: 'Web Quality Technician (HP Quality Center)',
      exp_zu_2: 'Cobol Development (AS400)',
      exp_ce_role: 'IT Instructor',
      exp_ce_1: 'Training in Microsoft Office',
      exp_ce_2: 'Training in PHP, HTML, CSS, JS',
      exp_ce_3: 'WordPress and Adobe Suite',

      // Footer
      footer_home: 'Home',
    }
  };

  let currentLang = 'es';

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });
    // Update the switch button to show the OTHER language
    const btn = document.getElementById('langSwitch');
    if (btn) {
      const flag = btn.querySelector('.lang-flag');
      const text = btn.querySelector('.lang-text');
      if (lang === 'es') {
        flag.textContent = '🇬🇧';
        text.textContent = 'EN';
      } else {
        flag.textContent = '🇪🇸';
        text.textContent = 'ES';
      }
    }
    localStorage.setItem('mojudev-lang', lang);
  }

  // Language switch button
  const langBtn = document.getElementById('langSwitch');
  if (langBtn) {
    langBtn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  // Initialize from localStorage
  const savedLang = localStorage.getItem('mojudev-lang');
  if (savedLang && savedLang !== 'es') {
    setLanguage(savedLang);
  }

  /* ========== SCROLL REVEAL ========== */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  /* ========== STICKY NAVBAR ========== */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* ========== MOBILE MENU ========== */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ========== SMOOTH SCROLL ========== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        const offset = navbar.offsetHeight + 20;
        const pos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    });
  });

  /* ========== ACTIVE NAV TRACKING ========== */
  const sections = document.querySelectorAll('.section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => sectionObserver.observe(sec));

  /* ========== PROFILE IMAGE FALLBACK ========== */
  const heroPhoto = document.getElementById('heroPhoto');
  if (heroPhoto) {
    heroPhoto.addEventListener('error', () => {
      heroPhoto.style.display = 'none';
      heroPhoto.parentElement.querySelector('.hero-photo-bg').style.borderRadius = 'var(--radius-xl)';
    });
  }

  /* ========== SUBTLE PARALLAX ON HERO ========== */
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.08}px)`;
      }
    }, { passive: true });
  }
});
