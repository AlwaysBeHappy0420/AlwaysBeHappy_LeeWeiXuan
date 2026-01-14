function handleScrollReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  revealItems.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const elementTop = rect.top;
    const elementBottom = rect.bottom;

    // reveal
    if (elementTop < windowHeight - 120 && elementBottom > 0) {
      el.classList.add("active");
    }
    // remove when fully out of screen
    else {
      el.classList.remove("active");
    }
  });
}

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    el.innerHTML = translations[lang][key];
  });

  localStorage.setItem("language", lang);
  savedLang = lang;
}

function openProject(key) {
  let p = projectLanguage[savedLang][key];

  let title = document.getElementById("overlayTitle");
  title.innerHTML = p.title;

  const overlayContent = document.getElementById("overlay-content");
  overlayContent.querySelectorAll("*").forEach((el) => el.remove());
  let btm = document.createElement("div");
  btm.classList.add("bottom-bar");
  let btn = document.createElement("button");
  btn.onclick = closeProject;
  btn.innerHTML = "Close";
  btm.appendChild(btn);
  overlayContent.appendChild(btm);

  let projectDesc = document.createElement("p");
  projectDesc.innerHTML = p.projectDesc;
  overlayContent.insertBefore(
    projectDesc,
    overlayContent.querySelector(".bottom-bar")
  );

  let br1 = document.createElement("br");
  overlayContent.insertBefore(br1, overlayContent.querySelector(".bottom-bar"));
  let br2 = document.createElement("br");
  overlayContent.insertBefore(br2, overlayContent.querySelector(".bottom-bar"));

  for (let i = 0; i < p.image.length; i++) {
    if (p.image[i].includes(".mp4")) {
      let vid = document.createElement("video");
      vid.controls = true; // show play/pause buttons
      vid.autoplay = true; // start automatically
      vid.loop = true; // repeat
      vid.muted = true; // required for autoplay in most browsers 
      vid.src = p.image[i];
      overlayContent.insertBefore(vid, overlayContent.querySelector(".bottom-bar"));
    } 
    else {
      let img = document.createElement("img");
      img.src = p.image[i];
      overlayContent.insertBefore(img, overlayContent.querySelector(".bottom-bar"));
    }

    let desc = document.createElement("div");
    desc.innerHTML = p.desc[i];
    desc.classList.add("overlay-content-p");
    overlayContent.insertBefore(
      desc,
      overlayContent.querySelector(".bottom-bar")
    );

    let br1 = document.createElement("br");
    overlayContent.insertBefore(
      br1,
      overlayContent.querySelector(".bottom-bar")
    );

    let br2 = document.createElement("br");
    overlayContent.insertBefore(
      br2,
      overlayContent.querySelector(".bottom-bar")
    );

    let br3 = document.createElement("br");
    overlayContent.insertBefore(
      br3,
      overlayContent.querySelector(".bottom-bar")
    );
  }


  document.getElementById("projectOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  document.getElementById("projectOverlay").classList.remove("active");
  document.body.style.overflow = "auto";
}

const cards = document.querySelectorAll(".project-card");
const mainBtn = document.getElementById("mainBtn");
const languageIcon = document.getElementById("languageIcon");
const languageOptionBox = document.getElementById("languageOptionBox");
const optionBox = document.getElementById("optionsBox");

cards.forEach((card) => {
  card.addEventListener("mousemove", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProject();
});

//set default language
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");
  openProject("AXERAS");
});

mainBtn.addEventListener("click", () => {
  optionBox.classList.toggle("show");
  if (languageOptionBox.classList.contains("show"))
    languageOptionBox.classList.toggle("show");
});
languageIcon.addEventListener("click", () => {
  languageOptionBox.classList.toggle("show");
  if (optionBox.classList.contains("show")) optionBox.classList.toggle("show");
});

window.addEventListener("scroll", handleScrollReveal);
window.addEventListener("load", handleScrollReveal);

window.addEventListener("scroll", () => {
  if (optionBox.classList.contains("show")) optionBox.classList.toggle("show");
  if (languageOptionBox.classList.contains("show"))
    languageOptionBox.classList.toggle("show");

  // Text highlight effect
  const elements = document.querySelectorAll(".section h2"); // All section headings
  const secondElements = document.querySelectorAll(".section p");
  const viewportCenter = window.innerHeight / 2.5;

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const offset = 80; // tolerance in px

    if (
      elementCenter >= viewportCenter - offset &&
      elementCenter <= viewportCenter + offset
    ) {
      el.classList.add("highlight");
    } else {
      el.classList.remove("highlight");
    }
  });

  secondElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const offset = 80; // tolerance in px

    if (
      elementCenter >= viewportCenter - offset &&
      elementCenter <= viewportCenter + offset
    ) {
      el.classList.add("Wordshighlight");
    } else {
      el.classList.remove("Wordshighlight");
    }
  });
});

window.addEventListener("load", () => {
  const heroElements = document.querySelectorAll(
    ".hero h2, .hero p, .hero .btn"
  );

  heroElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.8s ease";
    el.style.transitionDelay = `${index * 0.2}s`;

    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 50);
  });
});
