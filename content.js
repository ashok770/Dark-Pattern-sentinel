const pageText = document.body.innerText;

chrome.runtime.sendMessage(
  {
    type: "DETECT",
    text: pageText,
    url: window.location.href,
  },
  (response) => {
    console.log("Detection Result:", response);

    if (response.patterns && response.patterns.length > 0) {
      alert("⚠️ Dark Pattern Detected:\n" + response.patterns.join("\n"));
    }
  },
);
