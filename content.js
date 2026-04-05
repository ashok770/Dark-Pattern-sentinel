// Extract page text
const pageText = document.body.innerText;

// Send to backend
fetch("http://localhost:5000/api/detect", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    text: pageText,
    url: window.location.href,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log("Detection Result:", data);

    // Send result to popup
    chrome.runtime.sendMessage({
      type: "DETECTION_RESULT",
      data: data.patterns || [],
    });

    // TEMP alert for testing
    if (data.patterns && data.patterns.length > 0) {
      alert("⚠️ Dark Pattern Detected:\n" + data.patterns.join("\n"));
    }
  })
  .catch((err) => console.error(err));
