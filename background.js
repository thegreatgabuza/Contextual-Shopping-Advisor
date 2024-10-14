chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "extractProductInfo") {
      const { productTitle } = request.data;
      
      // Example: Fetch alternative products (pseudo-API call)
      fetch(`https://api.example.com/products?q=${productTitle}`)
        .then(response => response.json())
        .then(data => {
          // Process the data and send it back to the popup
          chrome.storage.local.set({ alternatives: data });
        });
    }
  });
  