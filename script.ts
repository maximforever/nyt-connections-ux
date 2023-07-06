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
  {
    name: "Soft drinks",
    items: ["Coca Cola", "Pepsi Cola", "Fanta", "Sprite"],
    color: "yellow",
  },
  {
    name: "Movies starring Brad Pitt",
    items: ["Fight Club", "Troy", "Ocean's Eleven", "Moneyball"],
    color: "green",
  },
  {
    name: "Things with legs",
    items: ["Slug", "Ladder", "Tricycle", "Elephant"],
    color: "blue",
  },
  {
    name: "Capital cities",
    items: ["Paris", "Washington", "Bangkok", "Nuuk"],
    color: "purple",
  },
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
  //shuffleArray(wordBank);
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

function applyBounce(gotWholeCategory: boolean, color: string = "") {
  const cells = document.querySelectorAll(".cell");
  let delay = 0;
  cells.forEach((cell) => {
    if (
      cell.textContent !== null &&
      currentlySelected.includes(cell.textContent)
    ) {
      setTimeout(() => {
        cell.classList.add("highlighted");

        if (gotWholeCategory) {
          cell.classList.add(`winning-${color}`);
        }
      }, delay);

      setTimeout(() => {
        cell.classList.remove("highlighted");
      }, delay + 750);

      delay += 250;
    }
  });
}

function submitAnswer() {
  if (currentlySelected.length !== 4) {
    console.log("there should be 4 guesses");
    return;
  }

  let matchedCategory = null;

  for (const category of categories) {
    console.log("reviewing ", category.name);
    let gotWholeCategory = true;
    for (const guess of currentlySelected) {
      if (!category.items.includes(guess)) {
        gotWholeCategory = false;
      }
    }

    if (gotWholeCategory) {
      matchedCategory = category;
    }
  }

  if (matchedCategory !== null) {
    applyBounce(true, matchedCategory.color);
  } else {
    console.log("That guess isn't quite right");
    applyBounce(false);
  }
}

function addEventListeners() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mousedown", () => {
      if (cell.textContent === null) {
        return;
      }

      cell.classList.add("clicked");

      if (currentlySelected.includes(cell.textContent)) {
        // unselect cell
        currentlySelected = currentlySelected.filter(
          (word) => word !== cell.textContent
        );
        cell.classList.remove("selected");
      } else {
        // select cell
        if (currentlySelected.length < 4) {
          currentlySelected.push(cell.textContent);
          cell.classList.add("selected");
        } else {
          // do nothing because we already have 4 words selected
        }
      }
    });

    cell.addEventListener("mouseup", () => {
      cell.classList.remove("clicked");
    });
  });

  document
    .getElementById("submit-answer")
    ?.addEventListener("click", submitAnswer);
}

init();
