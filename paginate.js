document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById('content');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const pageDisplay = document.getElementById('pageDisplay');
  const container = document.querySelector('.container');
  const windowHeight = window.innerHeight;
  const containerHeight = windowHeight * 0.9;

  // Retrieve the collected text content from local storage
  const collectedText = JSON.parse(localStorage.getItem("collectedText"));

  // Check if the collectedText is an array of elements
  if (Array.isArray(collectedText)) {
    // Pagination state
    let currentPage = 0;
    let totalPages = 0;
    let pages = [];

    prevBtn.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages - 1) {
        currentPage++;
        showPage(currentPage);
      }
    });

    function paginateTextContent(textArray) {
      let currentPageContent = [];
      let currentHeight = 0;

      textArray.forEach((text) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('injected-text');
        itemElement.innerHTML = text;

        currentPageContent.push(itemElement);

        // Inject the itemElement into the container to calculate the containerHeight
        contentDiv.appendChild(itemElement);
        const itemHeight = itemElement.offsetHeight;
        contentDiv.removeChild(itemElement);

        if (currentHeight + itemHeight > containerHeight && currentPageContent.length > 1) {
          pages.push(currentPageContent);
          currentPageContent = [itemElement];
          currentHeight = itemHeight;
        } else {
          currentHeight += itemHeight;
        }
      });

      if (currentPageContent.length > 0) {
        pages.push(currentPageContent);
      }

      totalPages = pages.length;
      showPage(currentPage); // Show the initial page
    }

    function showPage(page) {
      const currentPageContent = pages[page];

      contentDiv.innerHTML = ''; // Clear the contentDiv

      currentPageContent.forEach((itemElement) => {
        contentDiv.appendChild(itemElement);
      });

      // Update pagination buttons and page display
      prevBtn.disabled = page === 0;
      nextBtn.disabled = page === totalPages - 1;
      pageDisplay.textContent = `${page + 1}/${totalPages}`;
    }

    paginateTextContent(collectedText);
    container.style.height = `${containerHeight}px`; // Set the height of the container

    // container.addEventListener('mouseenter', () => {
    //   prevBtn.style.visibility = 'visible';
    //   nextBtn.style.visibility = 'visible';
    // });
  
    // container.addEventListener('mouseleave', () => {
    //   prevBtn.style.visibility = 'hidden';
    //   nextBtn.style.visibility = 'hidden';
    // });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.container');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  container.addEventListener('mousemove', (event) => {
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const mouseX = event.clientX - containerRect.left;

    if (mouseX <= 100) { // Adjust the value to set the hover region width from the left edge
      prevBtn.style.visibility = 'visible';
    } else if (mouseX >= containerWidth - 100) { // Adjust the value to set the hover region width from the right edge
      nextBtn.style.visibility = 'visible';
    } else {
      prevBtn.style.visibility = 'hidden';
      nextBtn.style.visibility = 'hidden';
    }
  });
});




// document.addEventListener("DOMContentLoaded", () => {
//   const contentDiv = document.getElementById('content');
//   const prevBtn = document.getElementById('prevBtn');
//   const nextBtn = document.getElementById('nextBtn');
//   const pageDisplay = document.getElementById('pageDisplay');
//   const container = document.querySelector('.container');
//   const windowHeight = window.innerHeight;
//   const containerHeight = windowHeight * 0.9;

//   // Retrieve the collected text content from local storage
//   const collectedText = JSON.parse(localStorage.getItem("collectedText"));

//   // Check if the collectedText is an array of elements
//   if (Array.isArray(collectedText)) {
//     // Pagination state
//     let currentPage = 0;
//     let totalPages = 0;
//     let pages = [];

//     prevBtn.addEventListener('click', () => {
//       if (currentPage > 0) {
//         currentPage--;
//         showPage(currentPage);
//       }
//     });

//     nextBtn.addEventListener('click', () => {
//       if (currentPage < totalPages - 1) {
//         currentPage++;
//         showPage(currentPage);
//       }
//     });

//     function paginateTextContent(textArray) {
//       let currentPageContent = [];
//       let currentHeight = 0;

//       textArray.forEach((text) => {
//         const itemElement = document.createElement('div');
//         itemElement.classList.add('injected-text');
//         itemElement.innerHTML = text;

//         currentPageContent.push(itemElement);

//         // Inject the itemElement into the container to calculate the containerHeight
//         contentDiv.appendChild(itemElement);
//         const itemHeight = itemElement.offsetHeight;
//         contentDiv.removeChild(itemElement);

//         if (currentHeight + itemHeight > containerHeight && currentPageContent.length > 1) {
//           pages.push(currentPageContent);
//           currentPageContent = [itemElement];
//           currentHeight = itemHeight;
//         } else {
//           currentHeight += itemHeight;
//         }
//       });

//       if (currentPageContent.length > 0) {
//         pages.push(currentPageContent);
//       }

//       totalPages = pages.length;
//       showPage(currentPage); // Show the initial page
//     }

//     function showPage(page) {
//       const currentPageContent = pages[page];

//       contentDiv.innerHTML = ''; // Clear the contentDiv

//       currentPageContent.forEach((itemElement) => {
//         contentDiv.appendChild(itemElement);
//       });

//       // Update pagination buttons and page display
//       prevBtn.disabled = page === 0;
//       nextBtn.disabled = page === totalPages - 1;
//       pageDisplay.textContent = `${page + 1}/${totalPages}`;
//     }

//     paginateTextContent(collectedText);
//     container.style.height = `${containerHeight}px`; // Set the height of the container
//   }
// });
// css
// .pagination-btn {
//   margin: 5px;
//   padding: 10px 20px;
// }

// #pagination {
//   margin-top: 10px;
//   text-align: center;
// }









// document.addEventListener("DOMContentLoaded", () => {
//   const contentDiv = document.getElementById('content');
//   const prevBtn = document.getElementById('prevBtn');
//   const nextBtn = document.getElementById('nextBtn');
//   const pageDisplay = document.getElementById('pageDisplay');

//   // Retrieve the collected text content from local storage
//   const collectedText = JSON.parse(localStorage.getItem("collectedText"));

//   // Check if the collectedText is an array of elements
//   if (Array.isArray(collectedText)) {
//     const targetCharactersPerPage = 3000; // Set the target number of characters per page

//     // Pagination state
//     let currentPage = 0;
//     let totalPages = 0;
//     let pages = [];

//     paginateTextContent(collectedText, targetCharactersPerPage);

//     prevBtn.addEventListener('click', () => {
//       if (currentPage > 0) {
//         currentPage--;
//         showPage(currentPage);
//       }
//     });

//     nextBtn.addEventListener('click', () => {
//       if (currentPage < totalPages - 1) {
//         currentPage++;
//         showPage(currentPage);
//       }
//     });

//     function paginateTextContent(textArray, targetCharactersPerPage) {
//       let currentPageContent = [];
//       let currentCharacterCount = 0;

//       textArray.forEach((text) => {
//         const characterCount = text.length;

//         if (currentCharacterCount + characterCount <= targetCharactersPerPage) {
//           currentPageContent.push(text);
//           currentCharacterCount += characterCount;
//         } else {
//           let remainingCharacters = targetCharactersPerPage - currentCharacterCount;
//           let currentText = text;
//           let currentIndex = 0;

//           while (currentText.length > 0) {
//             if (currentText.length <= remainingCharacters) {
//               currentPageContent.push(currentText);
//               currentCharacterCount += currentText.length;
//               break;
//             } else {
//               let slicedText = currentText.slice(0, remainingCharacters);
//               currentPageContent.push(slicedText);
//               currentCharacterCount += slicedText.length;

//               pages.push(currentPageContent);
//               currentPageContent = [];
//               currentCharacterCount = 0;

//               currentText = currentText.slice(remainingCharacters);
//               remainingCharacters = targetCharactersPerPage;
//             }
//           }
//         }
//       });

//       if (currentPageContent.length > 0) {
//         pages.push(currentPageContent);
//       }

//       totalPages = pages.length;
//       showPage(currentPage); // Show the initial page
//     }

//     function showPage(page) {
//       const currentPageContent = pages[page];

//       contentDiv.innerHTML = ''; // Clear the contentDiv

//       currentPageContent.forEach((text) => {
//         const itemElement = document.createElement('div');
//         itemElement.textContent = text;
//         contentDiv.appendChild(itemElement);
//       });

//       // Update pagination buttons and page display
//       prevBtn.disabled = page === 0;
//       nextBtn.disabled = page === totalPages - 1;
//       pageDisplay.textContent = `${page + 1}/${totalPages}`;
//     }
//   }
// });






// document.addEventListener("DOMContentLoaded", () => {
//   const contentDiv = document.getElementById('content');
//   const prevBtn = document.getElementById('prevBtn');
//   const nextBtn = document.getElementById('nextBtn');
//   const pageDisplay = document.getElementById('pageDisplay');
  
//   // Retrieve the collected text content from local storage
//   const collectedText = JSON.parse(localStorage.getItem("collectedText"));

//   // Check if the collectedText is an array of elements
//   if (Array.isArray(collectedText)) {
//     contentDiv.innerHTML = ''; // Clear the contentDiv

//     const itemsPerPage = 10; // Set the number of items to display per page
//     const totalPages = Math.ceil(collectedText.length / itemsPerPage);

//     // Pagination state
//     let currentPage = 0;

//     prevBtn.addEventListener('click', () => {
//       if (currentPage > 0) {
//         currentPage--;
//         showPage(currentPage);
//       }
//     });

//     nextBtn.addEventListener('click', () => {
//       if (currentPage < totalPages - 1) {
//         currentPage++;
//         showPage(currentPage);
//       }
//     });

//     function showPage(page) {
//       contentDiv.innerHTML = ''; // Clear the contentDiv

//       // Calculate the start and end indices for the current page
//       const startIndex = page * itemsPerPage;
//       const endIndex = (page + 1) * itemsPerPage;

//       // Create a container for the current page items
//       const pageContainer = document.createElement('div');

//       // Loop through the collectedText array and create the item elements
//       for (let i = startIndex; i < endIndex && i < collectedText.length; i++) {
//         const item = collectedText[i];
//         const itemElement = document.createElement('div');
//         itemElement.textContent = item;
//         pageContainer.appendChild(itemElement);
//       }

//       // Append the page container to the contentDiv
//       contentDiv.appendChild(pageContainer);

//       // Update pagination buttons and page display
//       prevBtn.disabled = page === 0;
//       nextBtn.disabled = page === totalPages - 1;
//       pageDisplay.textContent = `${page + 1}/${totalPages}`;
//     }

//     showPage(currentPage); // Show the initial page
//   }
// });













// document.addEventListener("DOMContentLoaded", () => {
//   const contentDiv = document.getElementById('content');
//   const prevBtn = document.getElementById('prevBtn');
//   const nextBtn = document.getElementById('nextBtn');
  
//   // Retrieve the collected text content from local storage
//   const collectedText = JSON.parse(localStorage.getItem("collectedText"));

//   // Check if the collectedText is an array of elements
//   if (Array.isArray(collectedText)) {
//     contentDiv.innerHTML = ''; // Clear the contentDiv

//     // Create a container for columns
//     const columnsContainer = document.createElement('div');
//     columnsContainer.classList.add('columns-container');

//     // Create two columns
//     const column1 = document.createElement('div');
//     const column2 = document.createElement('div');
//     column1.classList.add('column');
//     column2.classList.add('column');

//     const totalTextLength = collectedText.reduce((length, item) => length + item.length, 0);
//     const targetTextLength = Math.floor(totalTextLength / 2);
//     let currentTextLength = 0;

//     collectedText.forEach((item, index) => {
//       const container = document.createElement('div');
//       container.textContent = item;

//       // Determine the column for each item based on the text length
//       if (currentTextLength <= targetTextLength) {
//         column1.appendChild(container);
//       } else {
//         column2.appendChild(container);
//       }

//       currentTextLength += item.length;
//     });

//     // Append the columns to the columns container
//     columnsContainer.appendChild(column1);
//     columnsContainer.appendChild(column2);

//     // Append the columns container to the contentDiv
//     contentDiv.appendChild(columnsContainer);

//     const columns = [column1, column2];
//     let currentPage = 0;
//     const totalPages = columns.length;

//     showPage(currentPage);

//     prevBtn.addEventListener('click', () => {
//       if (currentPage > 0) {
//         currentPage--;
//         showPage(currentPage);
//       }
//     });

//     nextBtn.addEventListener('click', () => {
//       if (currentPage < totalPages - 1) {
//         currentPage++;
//         showPage(currentPage);
//       }
//     });

//     function showPage(page) {
//       columns.forEach((column, index) => {
//         if (index === page) {
//           column.style.display = 'block';
//         } else {
//           column.style.display = 'none';
//         }
//       });

//       prevBtn.disabled = page === 0;
//       nextBtn.disabled = page === totalPages - 1;
      
      
//     }    
//   }
// });



// document.addEventListener("DOMContentLoaded", () => {
//   const contentDiv = document.getElementById('content');

//   // Retrieve the collected text content from local storage
//   const collectedText = JSON.parse(localStorage.getItem("collectedText"));

//   // Check if the collectedText is an array of elements
//   if (Array.isArray(collectedText)) {
//     contentDiv.innerHTML = ''; // Clear the contentDiv

//     collectedText.forEach(item => {
//       const container = document.createElement('div');
//       container.textContent = item;
//       contentDiv.appendChild(container);
//     });
//   }
// });





// document.addEventListener("DOMContentLoaded", () => {
//   const contentDiv = document.getElementById('content');

//   // Retrieve the collected text content from local storage
//   const collectedText = JSON.parse(localStorage.getItem("collectedText"));

//   // Check if the collectedText is an array of elements
//   if (Array.isArray(collectedText)) {
//     contentDiv.innerHTML = ''; // Clear the contentDiv

//     collectedText.forEach(item => {
//       const paragraph = document.createElement('p');
//       paragraph.textContent = item;
//       contentDiv.appendChild(paragraph);
//     });
//   }
// });

















// const contentDiv = document.getElementById('content');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// // Retrieve the collected text content from local storage
// const collectedText = JSON.parse(localStorage.getItem("collectedText"));

// // Check if the collectedText is an array of elements
// if (Array.isArray(collectedText)) {
//   let currentPage = 1;
//   const itemsPerPage = 5; // Adjust this number as per your needs
//   const totalPages = Math.ceil(collectedText.length / itemsPerPage);

//   // Function to display content of a specific page
//   const displayPage = (page) => {
//     contentDiv.innerHTML = '';
//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const pageContent = collectedText.slice(startIndex, endIndex);

//     pageContent.forEach(item => {
//       const paragraph = document.createElement('p');
//       paragraph.textContent = item;
//       contentDiv.appendChild(paragraph);
//     });
//   };

//   // Function to handle navigation
//   const navigatePages = (direction) => {
//     currentPage += direction;
//     displayPage(currentPage);

//     // Enable/disable navigation buttons
//     prevBtn.disabled = currentPage === 1;
//     nextBtn.disabled = currentPage === totalPages;
//   };

//   // Initial display of content
//   displayPage(currentPage);

//   // Event listeners for navigation buttons
//   prevBtn.addEventListener('click', () => navigatePages(-1));
//   nextBtn.addEventListener('click', () => navigatePages(1));
// }
