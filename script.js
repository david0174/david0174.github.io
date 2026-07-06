document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const contactForm = document.getElementById("contact-form");
  const statusMessage = document.getElementById("form-status");
  const languageButtons = document.querySelectorAll(".lang-btn");
  const translatableNodes = document.querySelectorAll("[data-i18n]");
  const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
  const storageKey = "siteLanguage";
  const defaultLanguage = "en";
  const translations = {
    en: {
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        goals: "Goals",
        quotes: "Quotes",
        hobbies: "Hobbies",
        experience: "Experience",
        contact: "Contact",
      },
      hero: {
        eyebrow: "Hello, I'm",
        copy: "I am an enthusiastic and hardworking professional who enjoys helping others and finding practical solutions to challenges.",
        workWithMe: "Work with me",
        viewSkills: "View skills",
        resume: "Download Resume",
        cardTitle: "Featured",
        cardText: "Responsive design, clean UI, and fast performance across devices.",
      },
      about: {
        title: "About Me",
        p1: "I am a motivated, adaptable, and dependable professional who enjoys learning new skills and taking on new challenges. I work well both independently and as part of a team, and I pride myself on being organized, solution-oriented, and committed to delivering high-quality work. With experience in customer service, administration, hospitality, and operations, I have developed strong communication, organizational, and problem-solving skills. I enjoy working with people, improving processes, and contributing to a positive work environment. I am always eager to grow professionally and bring a strong work ethic and positive attitude to every role.",
        p2: "My work focuses on strong design, reliable code, and thoughtful content that makes it easy for visitors to understand what matters most.",
        cardTitle: "What I bring",
        feature1: "Creative web design and branding",
        feature2: "Strong front-end development",
        feature3: "Clear communication and responsive layouts",
      },
      skills: {
        title: "Skills",
        webDevTitle: "Web Development",
        webDevText: "HTML, CSS, JavaScript, responsive layout, performance optimization.",
        designTitle: "Design",
        designText: "Visual hierarchy, typography, branding, user experience.",
        workflowTitle: "Workflow",
        workflowText: "Project planning, version control, client collaboration, fast iterations.",
      },
      experience: {
        title: "Experience",
        webProjectsTitle: "Web Projects",
        webProjectsText: "Built polished portfolio sites, landing pages, and small business web experiences.",
        designSystemsTitle: "Design Systems",
        designSystemsText: "Developed consistent UI patterns for approachable, scalable front-end work.",
      },
      contact: {
        title: "Contact",
        description: "Ready to bring your ideas to life? Send a message and let's start the conversation.",
        emailLabel: "Email",
        emailHelp: "If you'd rather email directly, click the address above to open your mail app.",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailFieldLabel: "Email",
        emailFieldPlaceholder: "you@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project",
        button: "Send message",
        connectLabel: "Connect",
        linkedin: "LinkedIn",
      },
      goals: {
        title: "Goals",
        p1: "Short- and long-term goals that guide my work and growth.",
        item1: "Build accessible, high-quality websites",
        item2: "Grow as a front-end developer and designer",
        item3: "Collaborate with clients to deliver effective solutions",
        item4: "Expand language skills and international experience",
      },
      projects: {
        title: "Completed Projects",
        p1: {
          title: "Portfolio Website",
          text: "Personal portfolio built with HTML, CSS, and JavaScript.",
          link: "View",
        },
        p2: {
          title: "Small Business Site",
          text: "Landing page for a local business with responsive layout.",
          link: "View",
        },
      },
      quotes: {
        title: "Favorite Quotes",
        item1: "Keep it simple and useful.",
        item2: "The best way to predict the future is to create it.",
        item3: "Small improvements add up to big results.",
      },
      hobbies: {
        title: "Hobbies",
        hobby1: {
          title: "Music",
          text: "Writing and performing freestyle rap.",
        },
        hobby2: {
          title: "Travel",
          text: "Exploring new cities and local cultures.",
        },
        hobby3: {
          title: "Learning",
          text: "Studying languages, design, and web development.",
        },
      },
      footer: {
        text: "© 2026 David Nawee. Built with simple web technologies.",
      },
      messages: {
        loading: "Sending your message…",
        success: "Thanks! Your message has been sent. I’ll get back to you soon.",
        error: "Oops, something went wrong. Please try again or email davidnawee@gmail.com directly.",
      },
    },
    de: {
      nav: {
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        goals: "Ziele",
        quotes: "Zitate",
        hobbies: "Hobbys",
        experience: "Erfahrung",
        contact: "Kontakt",
      },
      hero: {
        eyebrow: "Hallo, ich bin",
        copy: "Ich bin ein engagierter und fleißiger Profi, der gerne anderen hilft und praktische Lösungen für Herausforderungen findet.",
        workWithMe: "Arbeite mit mir",
        viewSkills: "Fähigkeiten anzeigen",
        resume: "Lebenslauf herunterladen",
        cardTitle: "Besonders",
        cardText: "Responsives Design, saubere Oberfläche und schnelle Leistung auf allen Geräten.",
      },
      about: {
        title: "Über mich",
        p1: "Ich bin eine motivierte, anpassungsfähige und zuverlässige Fachkraft, die gerne neue Fähigkeiten erlernt und neue Herausforderungen annimmt. Ich arbeite sowohl eigenständig als auch im Team gut und lege Wert auf Organisation, Lösungsorientierung und die Lieferung qualitativ hochwertiger Arbeit. Durch Erfahrungen im Kundenservice, in der Verwaltung, Gastgewerbe und im operativen Bereich habe ich starke Kommunikations-, Organisations- und Problemlösungsfähigkeiten entwickelt. Ich arbeite gerne mit Menschen, optimiere Prozesse und trage zu einem positiven Arbeitsumfeld bei. Ich bin stets bestrebt, mich beruflich weiterzuentwickeln und bringe in jeder Rolle eine starke Arbeitsmoral und positive Einstellung mit.",
        p2: "Meine Arbeit konzentriert sich auf starkes Design, zuverlässigen Code und durchdachte Inhalte, die es Besuchern leicht machen, das Wesentliche zu verstehen.",
        cardTitle: "Was ich mitbringe",
        feature1: "Kreatives Webdesign und Markenbildung",
        feature2: "Starke Front-End-Entwicklung",
        feature3: "Klare Kommunikation und responsive Layouts",
      },
      skills: {
        title: "Fähigkeiten",
        webDevTitle: "Webentwicklung",
        webDevText: "HTML, CSS, JavaScript, responsives Layout, Leistungsoptimierung.",
        designTitle: "Design",
        designText: "Visuelle Hierarchie, Typografie, Markenbildung, Benutzererfahrung.",
        workflowTitle: "Arbeitsweise",
        workflowText: "Projektplanung, Versionskontrolle, Kunden­zusammenarbeit, schnelle Iterationen.",
      },
      experience: {
        title: "Erfahrung",
        webProjectsTitle: "Webprojekte",
        webProjectsText: "Erstellt hochwertige Portfolio-Websites, Landingpages und Webauftritte für kleine Unternehmen.",
        designSystemsTitle: "Designsysteme",
        designSystemsText: "Entwickelte konsistente UI-Muster für zugängliche, skalierbare Front-End-Arbeit.",
      },
      contact: {
        title: "Kontakt",
        description: "Bereit, Ihre Ideen zum Leben zu erwecken? Senden Sie eine Nachricht und lassen Sie uns das Gespräch beginnen.",
        emailLabel: "E-Mail",
        emailHelp: "Wenn Sie lieber direkt mailen möchten, klicken Sie auf die Adresse oben, um Ihr Mailprogramm zu öffnen.",
        nameLabel: "Name",
        namePlaceholder: "Ihr Name",
        emailFieldLabel: "E-Mail",
        emailFieldPlaceholder: "sie@beispiel.de",
        messageLabel: "Nachricht",
        messagePlaceholder: "Erzählen Sie mir von Ihrem Projekt",
        button: "Nachricht senden",
        connectLabel: "Vernetzen",
        linkedin: "LinkedIn",
      },
      goals: {
        title: "Ziele",
        p1: "Kurz- und langfristige Ziele, die meine Arbeit und Entwicklung leiten.",
        item1: "Zugängliche, hochwertige Websites erstellen",
        item2: "Mich als Front-End-Entwickler und Designer weiterentwickeln",
        item3: "Mit Kunden zusammenarbeiten, um effektive Lösungen zu liefern",
        item4: "Sprachkenntnisse erweitern und internationale Erfahrungen sammeln",
      },
      projects: {
        title: "Abgeschlossene Projekte",
        p1: {
          title: "Portfolio-Website",
          text: "Persönliches Portfolio erstellt mit HTML, CSS und JavaScript.",
          link: "Ansehen",
        },
        p2: {
          title: "Kleinunternehmer-Website",
          text: "Landingpage für ein lokales Unternehmen mit responsive Layout.",
          link: "Ansehen",
        },
      },
      quotes: {
        title: "Lieblingszitate",
        item1: "Halte es einfach und nützlich.",
        item2: "Die beste Möglichkeit, die Zukunft vorherzusagen, ist, sie zu gestalten.",
        item3: "Kleine Verbesserungen summieren sich zu großen Ergebnissen.",
      },
      hobbies: {
        title: "Hobbys",
        hobby1: {
          title: "Musik",
          text: "Schreiben und Aufführen von Freestyle-Rap.",
        },
        hobby2: {
          title: "Reisen",
          text: "Neue Städte und lokale Kulturen erkunden.",
        },
        hobby3: {
          title: "Lernen",
          text: "Sprachen, Design und Webentwicklung studieren.",
        },
      },
      footer: {
        text: "© 2026 David Nawee. Entwickelt mit einfachen Webtechnologien.",
      },
      messages: {
        loading: "Sende Ihre Nachricht…",
        success: "Danke! Ihre Nachricht wurde gesendet. Ich melde mich bald bei Ihnen.",
        error: "Hoppla, etwas ist schiefgegangen. Bitte versuchen Sie es erneut oder senden Sie eine E-Mail direkt an davidnawee@gmail.com.",
      },
    },
  };

  function getTranslation(lang, key) {
    return key.split(".").reduce(function (obj, segment) {
      return obj && obj[segment] ? obj[segment] : null;
    }, translations[lang]);
  }

  function applyLanguage(lang) {
    const validLang = translations[lang] ? lang : defaultLanguage;

    translatableNodes.forEach(function (element) {
      const translationKey = element.dataset.i18n;
      const translation = getTranslation(validLang, translationKey);

      if (validLang === defaultLanguage) {
        return;
      }

      if (translation) {
        element.textContent = translation;
      }
    });

    placeholderNodes.forEach(function (element) {
      const placeholderKey = element.dataset.i18nPlaceholder;
      const translation = getTranslation(validLang, placeholderKey);

      if (validLang === defaultLanguage) {
        return;
      }

      if (translation) {
        element.placeholder = translation;
      }
    });

    document.documentElement.lang = validLang;
    localStorage.setItem(storageKey, validLang);
    updateLanguageButtons(validLang);
  }

  function updateLanguageButtons(activeLang) {
    languageButtons.forEach(function (button) {
      button.classList.toggle("active", button.dataset.lang === activeLang);
    });
  }

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.dataset.lang);
    });
  });

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      siteNav.classList.toggle("open");
    });
  }

  applyLanguage(localStorage.getItem(storageKey) || defaultLanguage);

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const currentLang = document.documentElement.lang || defaultLanguage;
      const messages = translations[currentLang].messages;

      statusMessage.textContent = messages.loading;
      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then(function (response) {
          if (response.ok) {
            statusMessage.textContent = messages.success;
            contactForm.reset();
          } else {
            return response.json().then(function (data) {
              throw new Error(data.error || "Submission failed");
            });
          }
        })
        .catch(function () {
          statusMessage.textContent = messages.error;
        });
    });
  }
});
