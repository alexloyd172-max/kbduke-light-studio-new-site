/* -------------------------------------------------------------------------- */
/* Конфигурация кейсов: исходные слайды и подписи, которые разворачиваем       */
/* в отдельные карточки для каждого артиста/проекта.                           */
/* -------------------------------------------------------------------------- */
const portfolioGroups = [
  {
    slide: "13",
    category: "tour",
    categoryLabel: "Тур",
    cases: ["N-tour ВТБ Арена", "L’One Live Арена"],
    tags: ["арена", "гастрольная логика"],
    description: "Роль: световой дизайн и программирование. Решение: туровый сетап, который масштабируется под арену и площадку."
  },
  {
    slide: "14",
    category: "concerts",
    categoryLabel: "Концерты",
    cases: ["Высоцкий. Высота", "TYGA", "GONE.Fludd", "Сироткин 2025"],
    tags: ["концерт", "драматургия света"],
    description: "Роль: визуальная среда для концертных выступлений. Решение: плотная связка сценографии, света и шоу-программирования."
  },
  {
    slide: "15",
    category: "festivals",
    categoryLabel: "Фесты",
    cases: ["Парк Света", "Элли на маковом поле", "Lil Pump", "Озон Come.On", "XOLIDAYBOY"],
    tags: ["фестиваль", "open-air"],
    description: "Роль: свет и визуальная интеграция под смешанные форматы. Решение: работа с фестивальным темпом и разными типами сцен."
  },
  {
    slide: "16",
    category: "concerts",
    categoryLabel: "Концерты",
    cases: ["OFFSET", "XOLIDAYBOY", "TYGA", "Сергей Лазарев"],
    tags: ["артисты", "live show"],
    description: "Роль: световая драматургия для live-выступлений. Решение: выразительный концертный язык без перегруза интерфейса."
  },
  {
    slide: "17",
    category: "festivals",
    categoryLabel: "Фесты",
    cases: ["Summersound x Билайн", "Дикая Мята", "Мемориальный комплекс “Курская битва”", "Дикая Мята"],
    tags: ["фестиваль", "массовый формат"],
    description: "Роль: визуальная координация фестивальных сценариев. Решение: адаптация света и видео под насыщенный событийный график."
  },
  {
    slide: "18",
    category: "concerts",
    categoryLabel: "Концерты",
    cases: ["Сироткин", "Стас Михайлов", "GONE.Fludd", "MTC True tech day"],
    tags: ["концерт", "брендовый event"],
    description: "Роль: постановочная часть и программирование. Решение: единый визуальный каркас для артистических и брендовых задач."
  },
  {
    slide: "19",
    category: "tv",
    categoryLabel: "ТВ / спецпроекты",
    cases: ["MTC True tech champ", "Транспортная неделя 2025", "Cheppik", "Матрёшка"],
    tags: ["спецпроект", "бренд"],
    description: "Роль: техпродакшн и визуальная структура. Решение: работа с событийным форматом, где важны сроки, точность и понятная сборка."
  },
  {
    slide: "20",
    category: "concerts",
    categoryLabel: "Концерты",
    cases: ["Мари Краймбрери", "Сергей Лазарев", "Сироткин", "XOLIDAYBOY"],
    tags: ["live", "артист-менеджмент"],
    description: "Роль: комплексная visual-часть концертных номеров. Решение: чистая интеграция света, видеоповерхностей и cue-логики."
  },
  {
    slide: "21",
    category: "tour",
    categoryLabel: "Тур",
    cases: ["TYGA", "Сироткин", "The Hatters", "Высоцкий. Высота"],
    tags: ["тур", "концертный сетап"],
    description: "Роль: подготовка решений под повторяемый гастрольный формат. Решение: рабочая схема для быстрой сборки и стабильного результата."
  },
  {
    slide: "22",
    category: "festivals",
    categoryLabel: "Фесты",
    cases: ["Москва 2030 Зарядье", "Москва 2030 Гостиный двор", "L’One", "Дикая Мята"],
    tags: ["городской проект", "фестиваль"],
    description: "Роль: адаптация визуального языка под смешанный event-контекст. Решение: объединение разных сценариев в одной системе подачи."
  },
  {
    slide: "23",
    category: "tv",
    categoryLabel: "ТВ / спецпроекты",
    cases: ["День Победы", "Мемориальный комплекс “Курская битва”", "МТС Платформа", "Имандра"],
    tags: ["спецпроект", "официальный формат"],
    description: "Роль: техническая и визуальная координация. Решение: строгая сборка под события с повышенными организационными требованиями."
  },
  {
    slide: "24",
    category: "tour",
    categoryLabel: "Тур",
    cases: ["МОТ", "L’One", "Премия Лихачёва", "Кирилл Рихтер"],
    tags: ["тур", "премия"],
    description: "Роль: работа с концертной и церемониальной драматургией. Решение: гибкая схема, которую можно быстро адаптировать под контекст."
  },
  {
    slide: "25",
    category: "festivals",
    categoryLabel: "Фесты",
    cases: ["День Победы МГУ", "Матрёшка", "Лето.Музыка.Музей", "День Победы Ново-Екатерининская больница"],
    tags: ["open-air", "городская сцена"],
    description: "Роль: интеграция света и контента в публичные события. Решение: надежная конфигурация под фестивальные и городские площадки."
  }
];

function normalizeCaseTitle(title) {
  const aliases = {
    "Сироткин 2025": "Сироткин",
    "L’One Live Арена": "L’One"
  };

  return aliases[title] || title;
}

/* -------------------------------------------------------------------------- */
/* Разворачиваем каждый подписанный элемент в отдельную карточку.             */
/* Для визуала каждая карточка получает свой кроп из исходного слайда.        */
/* -------------------------------------------------------------------------- */
const portfolioEntries = portfolioGroups.flatMap((group) => {
  const sourceTitle = group.cases.join(" / ");

  return group.cases.map((caseTitle, caseIndex) => ({
    id: `${group.slide}-${caseIndex}`,
    imageId: `${group.slide}-${caseIndex}`,
    slide: group.slide,
    category: group.category,
    categoryLabel: group.categoryLabel,
    title: normalizeCaseTitle(caseTitle),
    sourceTitle,
    tags: [...group.tags],
    cardText: group.description,
    description: group.description
  }));
});

const portfolioGalleryMap = new Map();

portfolioEntries.forEach((item) => {
  const gallery = portfolioGalleryMap.get(item.title) || [];

  if (!gallery.includes(item.imageId)) {
    gallery.push(item.imageId);
  }

  portfolioGalleryMap.set(item.title, gallery);
});

const portfolioOverrides = {
  "Сироткин": {
    description: "дизайн сцены, световой дизайн, видео контент, IMAG",
    removeGalleryIndex: 1
  }
};

const portfolioItems = [];
const seenPortfolioTitles = new Set();

portfolioEntries.forEach((item) => {
  if (seenPortfolioTitles.has(item.title)) {
    return;
  }

  seenPortfolioTitles.add(item.title);
  const override = portfolioOverrides[item.title];
  const galleryImageIds = [...(portfolioGalleryMap.get(item.title) || [item.imageId])];

  if (override?.removeGalleryIndex != null && galleryImageIds[override.removeGalleryIndex]) {
    galleryImageIds.splice(override.removeGalleryIndex, 1);
  }

  portfolioItems.push({
    ...item,
    description: override?.description || item.description,
    cardText: override?.description || item.cardText,
    galleryImageIds
  });
});

const externalPortfolioItems = Array.isArray(window.KBDUKE_PORTFOLIO_ITEMS) && window.KBDUKE_PORTFOLIO_ITEMS.length
  ? window.KBDUKE_PORTFOLIO_ITEMS
  : null;

/* -------------------------------------------------------------------------- */
/* Сортировка карточек теперь идет по отдельным названиям кейсов.             */
/* -------------------------------------------------------------------------- */
const portfolioCollator = new Intl.Collator("ru", {
  sensitivity: "base",
  numeric: true
});

const featuredPortfolioOrder = [
  "Сироткин",
  "TYGA",
  "Сергей Лазарев",
  "XOLIDAYBOY",
  "L’One",
  "Мари Краймбрери",
  "GONE.Fludd",
  "Lil Pump",
  "МОТ",
  "Высоцкий. Высота"
];

const sortedPortfolioItems = externalPortfolioItems
  ? [...externalPortfolioItems].sort((a, b) => (a.sortIndex ?? 0) - (b.sortIndex ?? 0))
  : [...portfolioItems].sort((a, b) => {
  const aFeatured = featuredPortfolioOrder.indexOf(a.title);
  const bFeatured = featuredPortfolioOrder.indexOf(b.title);

  if (aFeatured !== -1 || bFeatured !== -1) {
    if (aFeatured === -1) {
      return 1;
    }

    if (bFeatured === -1) {
      return -1;
    }

    if (aFeatured !== bFeatured) {
      return aFeatured - bFeatured;
    }
  }

  const primary = portfolioCollator.compare(a.title, b.title);

  if (primary !== 0) {
    return primary;
  }

  const secondary = portfolioCollator.compare(a.sourceTitle, b.sourceTitle);

  if (secondary !== 0) {
    return secondary;
  }

  return Number(a.slide) - Number(b.slide);
});

/* -------------------------------------------------------------------------- */
/* Утилита формирования путей к отдельным изображениям кейсов.                */
/* -------------------------------------------------------------------------- */
const assetBase = window.location.pathname.includes("/pages/") ? "../assets" : "./assets";
const assetVersion = "20260413-newcases-2";

const imagePath = {
  thumb: (imageId) => `${assetBase}/cases/thumb/${imageId}.webp?v=${assetVersion}`,
  full: (imageId) => `${assetBase}/cases/full/${imageId}.webp?v=${assetVersion}`,
  hero: (imageId) => `${assetBase}/hero/${imageId}.webp?v=${assetVersion}`
};

const heroSlideItems = [
  { title: "Akmal' (Акмаль)", imageId: "home-11" },
  { title: "«Мисс БРИКС — 2026»", imageId: "home-12" },
  { title: "80-летие Победы", imageId: "home-01" },
  { title: "GONE.Fludd", imageId: "home-02" },
  { title: "Tyga", imageId: "home-03" },
  { title: "XOLIDAYBOY", imageId: "home-04" },
  { title: "Надежда и Григорий Кадышевы", imageId: "home-05" },
  { title: "Сергей Лазарев", imageId: "home-06" },
  { title: "Сироткин", imageId: "home-07" },
  { title: "Мари Краймбрери", imageId: "home-08" },
  { title: "Элли на Маковом Поле", imageId: "home-09" },
  { title: "Человек года — 2024", imageId: "home-10" }
];

const heroSlideIntervalMs = 4000;

function getPortfolioLayoutClass() {
  return "";
}

function createPortfolioPreview(item) {
  const image = document.createElement("img");
  image.className = "portfolio-item__image";
  image.src = imagePath.thumb(item.imageId);
  image.alt = "";
  image.loading = "lazy";
  image.setAttribute("aria-hidden", "true");
  return image;
}

/* -------------------------------------------------------------------------- */
/* Рендерим карточки в DOM по конфигурации выше.                              */
/* -------------------------------------------------------------------------- */
function renderPortfolio() {
  const grid = document.getElementById("portfolioGrid");

  if (!grid) {
    return;
  }

  sortedPortfolioItems.forEach((item, index) => {
    const figure = document.createElement("figure");
    figure.className = "portfolio-item";
    const layoutClass = getPortfolioLayoutClass(index);

    if (layoutClass) {
      figure.classList.add(layoutClass);
    }

    const button = document.createElement("button");
    button.className = "portfolio-item__button";
    button.type = "button";
    button.setAttribute("aria-label", `Открыть кейс: ${item.title}`);

    const preview = createPortfolioPreview(item);

    const body = document.createElement("figcaption");
    body.className = "portfolio-item__body";

    const title = document.createElement("p");
    title.className = "portfolio-item__title";
    title.textContent = item.title;

    body.append(title);

    if (item.cardText) {
      const summary = document.createElement("p");
      summary.className = "portfolio-item__summary";
      summary.textContent = `(${item.cardText})`;
      body.append(summary);
    }

    button.append(preview);
    figure.append(button, body);
    grid.append(figure);

    button.addEventListener("click", () => openLightbox(item));
  });
}

/* -------------------------------------------------------------------------- */
/* Логика модального окна для увеличенного просмотра кейсов.                  */
/* -------------------------------------------------------------------------- */
const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox?.querySelector(".lightbox__image");
const lightboxCaption = lightbox?.querySelector(".lightbox__caption");
const lightboxCategory = document.getElementById("lightboxCategory");
const lightboxDescription = document.getElementById("lightboxDescription");
const lightboxClose = lightbox?.querySelector(".lightbox__close");
const lightboxThumbs = document.getElementById("lightboxThumbs");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let activeLightboxItem = null;
let activeGalleryIndex = 0;

function updateLightboxFrame() {
  if (!activeLightboxItem || !lightboxImage || !lightboxThumbs || !lightboxPrev || !lightboxNext) {
    return;
  }

  const gallery = activeLightboxItem.galleryImageIds;
  const activeImageId = gallery[activeGalleryIndex];

  lightboxImage.src = imagePath.full(activeImageId);
  lightboxImage.alt = `${activeLightboxItem.title} — фото ${activeGalleryIndex + 1}`;
  lightboxCaption.textContent = activeLightboxItem.title;

  lightboxThumbs.replaceChildren();

  if (gallery.length <= 1) {
    lightboxThumbs.hidden = true;
    lightboxPrev.hidden = true;
    lightboxNext.hidden = true;
    return;
  }

  lightboxThumbs.hidden = false;
  lightboxPrev.hidden = false;
  lightboxNext.hidden = false;

  gallery.forEach((imageId, index) => {
    const thumbButton = document.createElement("button");
    thumbButton.className = "lightbox__thumb";
    thumbButton.type = "button";
    thumbButton.setAttribute("aria-label", `Открыть фото ${index + 1}`);
    thumbButton.classList.toggle("is-active", index === activeGalleryIndex);

    const thumbImage = document.createElement("img");
    thumbImage.src = imagePath.thumb(imageId);
    thumbImage.alt = "";
    thumbImage.loading = "lazy";

    thumbButton.append(thumbImage);
    thumbButton.addEventListener("click", () => {
      activeGalleryIndex = index;
      updateLightboxFrame();
    });

    lightboxThumbs.append(thumbButton);
  });
}

function stepLightbox(delta) {
  if (!activeLightboxItem) {
    return;
  }

  const gallery = activeLightboxItem.galleryImageIds;

  if (gallery.length <= 1) {
    return;
  }

  activeGalleryIndex = (activeGalleryIndex + delta + gallery.length) % gallery.length;
  updateLightboxFrame();
}

function openLightbox(item) {
  if (
    !lightbox ||
    !lightboxImage ||
    !lightboxCaption ||
    !lightboxCategory ||
    !lightboxDescription ||
    !lightboxThumbs
  ) {
    return;
  }

  // На больших экранах даем картинке больше воздуха, на мобильных остаемся компактными.
  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  lightbox.style.width = isMobile ? "min(96vw, 760px)" : "min(98vw, 1600px)";
  lightbox.style.maxHeight = isMobile ? "88vh" : "92vh";
  lightbox.style.overflow = "auto";
  lightboxImage.style.maxHeight = isMobile ? "62vh" : "72vh";

  activeLightboxItem = item;
  activeGalleryIndex = 0;
  lightboxCategory.textContent = item.categoryLabel;
  lightboxDescription.textContent = item.description;
  updateLightboxFrame();
  lightbox.showModal();
}

function closeLightbox() {
  if (lightbox?.open) {
    lightbox.close();
  }

  activeLightboxItem = null;
  activeGalleryIndex = 0;
}

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", () => stepLightbox(-1));
lightboxNext?.addEventListener("click", () => stepLightbox(1));

lightbox?.addEventListener("click", (event) => {
  const rect = lightbox.getBoundingClientRect();
  const isOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (isOutside) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (!lightbox?.open) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
    return;
  }

  if (event.key === "ArrowLeft") {
    stepLightbox(-1);
    return;
  }

  if (event.key === "ArrowRight") {
    stepLightbox(1);
  }
});

/* -------------------------------------------------------------------------- */
/* Компактное мобильное меню.                                                 */
/* -------------------------------------------------------------------------- */
function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open", !expanded);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Reveal-анимация включается только если пользователь не просил reduce.      */
/* -------------------------------------------------------------------------- */
function setupRevealAnimation(isReducedMotion) {
  const elements = document.querySelectorAll(".reveal");
  const isMobileViewport = window.matchMedia("(max-width: 760px)").matches;

  if (isReducedMotion || isMobileViewport || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  elements.forEach((element) => observer.observe(element));
}

function setupHomeTopbar() {
  if (!document.body.classList.contains("page-home")) {
    return;
  }

  const updateState = () => {
    document.body.classList.toggle("is-scrolled", window.scrollY > 32);
  };

  updateState();
  window.addEventListener("scroll", updateState, {
    passive: true
  });
}

function setupHeroSlideshow(mediaQuery) {
  const heroSlides = document.getElementById("heroSlides");

  if (!heroSlides || !heroSlideItems.length) {
    return;
  }

  const firstLayer = document.createElement("img");
  const secondLayer = document.createElement("img");

  [firstLayer, secondLayer].forEach((layer) => {
    layer.className = "hero__image";
    layer.alt = "";
    layer.decoding = "async";
    layer.loading = "eager";
    heroSlides.append(layer);
  });

  let activeLayer = firstLayer;
  let idleLayer = secondLayer;
  let activeIndex = 0;
  let timerId = null;

  const applySlide = (layer, slideIndex) => {
    const slide = heroSlideItems[slideIndex];
    layer.src = imagePath.hero(slide.imageId);
    layer.dataset.project = slide.title;
  };

  const preloadUpcoming = (startIndex) => {
    const preloadCount = Math.min(6, heroSlideItems.length);

    for (let offset = 1; offset <= preloadCount; offset += 1) {
      const slide = heroSlideItems[(startIndex + offset) % heroSlideItems.length];
      const image = new Image();
      image.src = imagePath.hero(slide.imageId);
    }
  };

  const stopSlideshow = () => {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
    }
  };

  const startSlideshow = () => {
    stopSlideshow();

    if (mediaQuery.matches || heroSlideItems.length <= 1) {
      return;
    }

    timerId = window.setInterval(() => {
      activeIndex = (activeIndex + 1) % heroSlideItems.length;
      applySlide(idleLayer, activeIndex);
      idleLayer.classList.add("is-active");
      activeLayer.classList.remove("is-active");
      [activeLayer, idleLayer] = [idleLayer, activeLayer];
      preloadUpcoming(activeIndex);
    }, heroSlideIntervalMs);
  };

  applySlide(activeLayer, activeIndex);
  activeLayer.classList.add("is-active");
  preloadUpcoming(activeIndex);
  startSlideshow();

  if ("addEventListener" in mediaQuery) {
    mediaQuery.addEventListener("change", startSlideshow);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopSlideshow();
      return;
    }

    startSlideshow();
  });
}

/* -------------------------------------------------------------------------- */
/* Hero-video учитывает prefers-reduced-motion.                               */
/* -------------------------------------------------------------------------- */
function applyMotionPreferences(mediaQuery) {
  const heroVideo = document.getElementById("heroVideo");

  if (!heroVideo) {
    return;
  }

  const setHeroVideoStart = () => {
    if (heroVideo.dataset.offsetApplied === "true") {
      return;
    }

    if (Number.isFinite(heroVideo.duration) && heroVideo.duration > 8) {
      heroVideo.currentTime = 6;
      heroVideo.dataset.offsetApplied = "true";
    }
  };

  if (heroVideo.readyState >= 1) {
    setHeroVideoStart();
  } else {
    heroVideo.addEventListener("loadedmetadata", setHeroVideoStart, {
      once: true
    });
  }

  if (mediaQuery.matches) {
    heroVideo.pause();
    heroVideo.removeAttribute("autoplay");
    heroVideo.setAttribute("controls", "controls");
  } else {
    heroVideo.removeAttribute("controls");
    heroVideo.setAttribute("autoplay", "autoplay");
    heroVideo.play().catch(() => {
      /* Автовоспроизведение может быть заблокировано браузером; это не критично. */
    });
  }
}

/* -------------------------------------------------------------------------- */
/* Сбор короткого брифа в email и в буфер обмена.                             */
/* -------------------------------------------------------------------------- */
function getBriefText(form) {
  const services = Array.from(form.querySelectorAll('input[name="services"]:checked')).map((item) => item.value);
  const formData = new FormData(form);

  const lines = [
    "KBDUKE brief",
    "",
    `Тип проекта: ${formData.get("projectType") || "Не указано"}`,
    `Даты: ${formData.get("projectDates") || "Не указано"}`,
    `Город / площадка: ${formData.get("projectVenue") || "Не указано"}`,
    `Аудитория / вместимость: ${formData.get("projectScale") || "Не указано"}`,
    `Что нужно: ${services.length ? services.join(", ") : "Не указано"}`,
    `Срок подготовки: ${formData.get("projectDeadline") || "Не указано"}`,
    `Имя и роль: ${formData.get("contactName") || "Не указано"}`,
    `Контакт: ${formData.get("contactInfo") || "Не указано"}`,
    `Файл или ссылка: ${formData.get("referenceLink") || "Не указано"}`,
    "",
    "Комментарий:",
    formData.get("projectNotes") || "Не указано"
  ];

  return lines.join("\n");
}

async function copyBriefToClipboard(briefText, statusNode) {
  if (!navigator.clipboard) {
    statusNode.textContent = "Буфер обмена недоступен в этом браузере. Откройте email и отправьте бриф оттуда.";
    return;
  }

  try {
    await navigator.clipboard.writeText(briefText);
    statusNode.textContent = "Бриф скопирован в буфер обмена.";
  } catch (error) {
    statusNode.textContent = "Не удалось скопировать бриф. Откройте письмо и отправьте его вручную.";
  }
}

function setupBriefForm() {
  const form = document.getElementById("briefForm");
  const statusNode = document.getElementById("formStatus");
  const copyButton = document.getElementById("copyBriefButton");

  if (!form || !statusNode || !copyButton) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const briefText = getBriefText(form);
    const subject = encodeURIComponent("Новый проект для KBDUKE");
    const body = encodeURIComponent(briefText);

    await copyBriefToClipboard(briefText, statusNode);
    window.location.href = `mailto:info@kbduke.ru?subject=${subject}&body=${body}`;
  });

  copyButton.addEventListener("click", async () => {
    if (!form.reportValidity()) {
      return;
    }

    const briefText = getBriefText(form);
    await copyBriefToClipboard(briefText, statusNode);
  });
}

/* -------------------------------------------------------------------------- */
/* Точка входа: рендерим кейсы и запускаем интерактивные сценарии.            */
/* -------------------------------------------------------------------------- */
window.addEventListener("DOMContentLoaded", () => {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  renderPortfolio();
  setupHomeTopbar();
  setupHeroSlideshow(motionQuery);
  setupMobileMenu();
  applyMotionPreferences(motionQuery);
  setupRevealAnimation(motionQuery.matches);
  setupBriefForm();

  if ("addEventListener" in motionQuery) {
    motionQuery.addEventListener("change", () => applyMotionPreferences(motionQuery));
  }
});
