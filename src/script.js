// Definera array av namn
let people = ["Zaida", "Lars", "Nathaniel", "Ciara", "Moa", "Bella"];

export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultDisplay = document.getElementById("resultDisplay");

  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click", function () {
    // 1. Hämta texten i searchInput.value
    const searchText = searchInput.value.trim();

    // 2. Skapa en boolean för found
    let found = false;

    // 3. Loopa igenom people-arrayen
    for (let i = 0; i < people.length; i++) {
      // 4. Jämför texten med varje namn i arrayen
      if (people[i].toLowerCase() === searchText.toLowerCase()) {
        // 5. Om du hittar en match
        resultDisplay.textContent = `Namn hittades: ${people[i]}`;
        found = true;
        break;
      }
    }

    // 6. Om inget namn hittades
    if (!found) {
      resultDisplay.textContent = "Namn hittades inte.";
    }
  });
}

// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});
