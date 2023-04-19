const searchBar = document.querySelector('.search-container input[type="text"]');
const searchBtn = document.querySelector('.search-container button');

searchBtn.addEventListener('click', () => {
  const searchTerm = searchBar.value;
  console.log(`Search for: ${searchTerm}`);
  // Perform search operation
});
