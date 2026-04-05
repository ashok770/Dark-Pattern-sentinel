// Extract page text
const pageText = document.body.innerText;

// Call backend API directly
fetch("https://dark-pattern-sentinel.onrender.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    text: pageText,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log("Detection Result:", data);

    if (data.patterns && data.patterns.length > 0) {
      alert("⚠️ Dark Pattern Detected:\n" + data.patterns.join("\n"));
    }
  })
  .catch((err) => console.error("Error:", err));
