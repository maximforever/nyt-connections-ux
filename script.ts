const wordBank = [
  "Coca Cola",
  "Pepsi Cola",
  "Fanta",
  "Sprite",
  "Fight Club",
  "Troy",
  "Ocean's Eleven",
  "Moneyball",
  "Slug",
  "Ladder",
  "Tricycle",
  "Elephant",
  "Paris",
  "Washington",
  "Bangkok",
  "Nuuk",
];

const categories = [
  ["Coca Cola", "Pepsi Cola", "Fanta", "Sprite"],
  ["Fight Club", "Troy", "Ocean's Eleven", "Moneyball"],
  ["Slug", "Ladder", "Tricycle", "Elephant"],
  ["Paris", "Washington", "Bangkok", "Nuuk"],
];

let currentlySelected: string[] = [];

function shuffleArray(arr: string[]) {
  let currentIndex = arr.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
}

function init() {
  shuffleArray(wordBank);
  populateCellsWithWords();
  addEventListeners();
}

function populateCellsWithWords() {
  for (let row = 1; row < 5; row++) {
    for (let column = 1; column < 5; column++) {
      const cell = document.getElementById(`${row}${column}`);

      if (cell === null) {
        console.log("this shouldn't happen");
        throw new Error(
          `error: cell with the id ${row}${column} doesn't exist`
        );
      }

      cell.innerText = wordBank.pop() || "";
    }
  }
}

function highlightSelectedCells() {
  for (let row = 1; row < 5; row++) {
    for (let column = 1; column < 5; column++) {
      const cell = document.getElementById(`${row}${column}`);
      if (cell === null || cell.textContent === null) {
        console.log("this shouldn't happen");
        throw new Error(
          `error: cell with the id ${row}${column} doesn't exist`
        );
      }

      if (currentlySelected.includes(cell.textContent)) {
        cell.classList.add("selected");
      } else {
        cell.classList.remove("selected");
      }
    }
  }
}

function addEventListeners() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mousedown", () => {
      if (
        cell.textContent !== null &&
        !currentlySelected.includes(cell.textContent) &&
        currentlySelected.length < 4
      ) {
        currentlySelected.push(cell.textContent);
      } else {
        currentlySelected = currentlySelected.filter((word) => {
          word !== cell.textContent;
        });
      }

      highlightSelectedCells();
      cell.classList.add("clicked");
    });

    cell.addEventListener("mouseup", () => {
      cell.classList.remove("clicked");
    });
  });
}

init();
