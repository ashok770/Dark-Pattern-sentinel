setTimeout(() => {
  const elements = document.querySelectorAll("p, span, div, h1, h2, h3");

  let found = false;

  elements.forEach((el) => {
    const text = el.innerText.toLowerCase();

    if (
      text.includes("only") ||
      text.includes("left") ||
      text.includes("hurry") ||
      text.includes("offer") ||
      text.includes("limited")
    ) {
      found = true;

      // 🔥 Highlight element
      el.style.border = "3px solid red";
      el.style.backgroundColor = "#ffe6e6";
    }
  });

  if (found) {
    alert("⚠️ Dark Pattern Detected & Highlighted!");
  }
}, 3000);
setTimeout(() => {
  const elements = document.querySelectorAll("p, span, div, h1, h2, h3");

  let found = false;

  elements.forEach((el) => {
    const text = el.innerText.toLowerCase();

    if (
      text.includes("only") ||
      text.includes("left") ||
      text.includes("hurry") ||
      text.includes("offer") ||
      text.includes("limited")
    ) {
      found = true;

      // 🔥 Highlight element
      el.style.border = "3px solid red";
      el.style.backgroundColor = "#ffe6e6";
    }
  });

  if (found) {
    alert("⚠️ Dark Pattern Detected & Highlighted!");
  }
}, 3000);
