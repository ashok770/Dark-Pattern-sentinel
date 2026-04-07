setTimeout(() => {
  const elements = document.querySelectorAll("p, span, button, a, li");

  let found = false;

  elements.forEach((el) => {
    const text = el.innerText.toLowerCase();

    if (!text || text.length < 20) return;

    if (
      (text.includes("only") && text.includes("left")) ||
      text.includes("limited time") ||
      text.includes("offer ends") ||
      text.includes("hurry") ||
      text.includes("in stock") ||
      text.includes("people are viewing")
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
  const elements = document.querySelectorAll("p, span, button, a, li");

  let found = false;

  elements.forEach((el) => {
    const text = el.innerText.toLowerCase();

    if (!text || text.length < 20) return;

    if (
      (text.includes("only") && text.includes("left")) ||
      text.includes("limited time") ||
      text.includes("offer ends") ||
      text.includes("hurry") ||
      text.includes("in stock") ||
      text.includes("people are viewing")
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
