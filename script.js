function revealOnScroll() {
  const revealItems = document.querySelectorAll(".reveal");

  revealItems.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 120) {
      el.classList.add("active");
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
  document.getElementById("overlayTitle").innerText = p.title;
  document.getElementById("overlayDesc").innerText = p.desc;
  document.getElementById("overlayTools").innerText = p.tools;
  document.getElementById("overlayImage").src = p.image;

  document.getElementById("projectOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  document.getElementById("projectOverlay").classList.remove("active");
  document.body.style.overflow = "auto";
}

function checkIfCentered() {
  const rect = textElement.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Calculate the vertical center of the viewport
  const viewportCenter = viewportHeight / 2;

  // Calculate the vertical center of the element
  const elementCenter = rect.top + rect.height / 2;

  // Check if element center is within a certain range of viewport center
  const offset = 50; // tolerance in pixels

  if (
    elementCenter >= viewportCenter - offset &&
    elementCenter <= viewportCenter + offset
  ) {
    console.log("Text is at the center of the screen!");
    textElement.style.color = "orange"; // example effect
  } else {
    textElement.style.color = "black"; // reset
  }
  if (
    elementCenter >= viewportCenter - offset &&
    elementCenter <= viewportCenter + offset
  ) {
    element.classList.add("highlight");
  } else {
    element.classList.remove("highlight");
  }
}

const cards = document.querySelectorAll(".project-card");
const mainBtn = document.getElementById("mainBtn");
const languageIcon = document.getElementById("languageIcon");
const languageOptionBox = document.getElementById("languageOptionBox");
const optionBox = document.getElementById("optionsBox");
const textElement = document.querySelector("#myText");

cards.forEach((card) => {
  card.addEventListener("mousemove", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProject();
});

//set default language
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("jp");
});



mainBtn.addEventListener("click", () => {
  optionBox.classList.toggle("show");
  if(languageOptionBox.classList.contains("show")) languageOptionBox.classList.toggle("show");
});
languageIcon.addEventListener("click", () => {
  languageOptionBox.classList.toggle("show");
  if(optionBox.classList.contains("show")) optionBox.classList.toggle("show");
});



window.addEventListener("scroll", revealOnScroll);
window.addEventListener("scroll", checkIfCentered);
window.addEventListener("load", revealOnScroll);

// window.addEventListener("click", (event) => {
//   // If click is outside both the optionBox and its toggle button
//   if (!optionBox.contains(event.target) && 
//       optionBox.classList.contains("show")) {
//     optionBox.classList.remove("show");
//   }
  
//   // If click is outside both the languageOptionBox and its toggle button
//   if (!languageOptionBox.contains(event.target) && 
//       languageOptionBox.classList.contains("show")) {
//     languageOptionBox.classList.remove("show");
//   }
// });


window.addEventListener("scroll", () => {
  if(optionBox.classList.contains("show")) optionBox.classList.toggle("show");
  if(languageOptionBox.classList.contains("show")) languageOptionBox.classList.toggle("show");

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
