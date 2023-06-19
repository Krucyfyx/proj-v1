// // Clear the previously stored content
// // localStorage.removeItem("collectedText");

// // Array to store the collected data
// let collectedData = [];

// // Create a TreeWalker to traverse the DOM and collect text content
// let walker = document.createTreeWalker(
//   document.body,
//   NodeFilter.SHOW_TEXT,
//   {
//     acceptNode: (node) => {
//       // Only accept text nodes that have non-empty content
//       if (node.textContent.trim().length > 0) {
//         // Check if the parent element is already processed
//         if (!collectedData.find((data) => data.element === node.parentElement)) {
//           const element = node.parentElement;
//           const text = node.textContent.trim();
//           const computedStyle = window.getComputedStyle(element);

//           // Store the text content and CSS properties
//           collectedData.push({
//             element,
//             text,
//             styles: {
//               color: computedStyle.color,
//               fontSize: computedStyle.fontSize,
//               // Add more CSS properties as needed
//             },
//           });

//           return NodeFilter.FILTER_ACCEPT;
//         }
//         return NodeFilter.FILTER_SKIP;
//       } else {
//         return NodeFilter.FILTER_SKIP;
//       }
//     },
//   },
//   false
// );

// // Loop through the elements and collect the text content and CSS properties
// while (walker.nextNode()) {
//   // No need to store the text node itself, only store its parent element and related properties
// }

// localStorage.setItem("collectedData", JSON.stringify(collectedData));








// Clear the previously stored content
// localStorage.removeItem("collectedText");

// Array to store the collected text content
let collectedText = [];

// Create a TreeWalker to traverse the DOM and collect text content
let walker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_TEXT,
  {
    acceptNode: (node) => {
      // Only accept text nodes that have non-empty content
      if (node.textContent.trim().length > 0) {
        // Check if the parent element is already processed
        if (
          node.parentElement &&
          !collectedText.includes(node.parentElement)
        ) {
          collectedText.push(node.textContent.trim()); // Store only the text content
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
      } else {
        return NodeFilter.FILTER_SKIP;
      }
    },
  },
  false
);

// Loop through the elements and collect the text content
while (walker.nextNode()) {
  // No need to store the text node itself, only store its content
}

localStorage.setItem("collectedText", JSON.stringify(collectedText));



































// // Clear the previously stored content
// // localStorage.removeItem("collectedText");


// // Array to store the collected text content
// let collectedText = [];

// // Create a TreeWalker to traverse the DOM and collect text content
// let walker = document.createTreeWalker(
//   document.body,
//   NodeFilter.SHOW_TEXT,
//   {
//     acceptNode: (node) => {
//       // Only accept text nodes that have non-empty content
//       if (node.textContent.trim().length > 0) {
//         // Check if the parent element is already processed
//         if (
//           node.parentElement &&
//           !collectedText.includes(node.parentElement)
//         ) {
//           collectedText.push(node.parentElement);
//           return NodeFilter.FILTER_ACCEPT;
//         }
//         return NodeFilter.FILTER_SKIP;
//       } else {
//         return NodeFilter.FILTER_SKIP;
//       }
//     },
//   },
//   false
// );

// // Loop through the elements and collect the text content
// while (walker.nextNode()) {
//   let textNode = walker.currentNode;
//   let textContent = textNode.textContent.trim();
//   collectedText.push(textContent);
// }

// localStorage.setItem("collectedText", JSON.stringify(collectedText));
