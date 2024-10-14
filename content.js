// Example: Extract product information from a page
const productTitle = document.querySelector('h1')?.innerText || "Product";
const productPrice = document.querySelector('.price')?.innerText || "Price not found";

// Send the extracted data to the background script
chrome.runtime.sendMessage({
  action: "extractProductInfo",
  data: { productTitle, productPrice }
});


console.log("Product title:", productTitle);
console.log("Product price:", productPrice);
console.log('Data fetched:', data);
