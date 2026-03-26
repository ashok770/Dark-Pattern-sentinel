console.log("Dark Pattern Sentinel Loaded");

// Get all text from page
let pageText = document.body.innerText;

// Print in console
console.log("Page Text:", pageText);

// Get all buttons
let buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  console.log("Button Text:", btn.innerText);
});
