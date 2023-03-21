const cats = ["Milo", "Otis", "Garfield"];

// Add elements to the end of the array destructively
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Add elements to the beginning of the array destructively
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Remove the last element from the array destructively
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Remove the first element from the array destructively
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Return a new array with the added element at the end, without modifying the original array
function appendCat(name) {
  return [...cats, name];
}

// Return a new array with the added element at the beginning, without modifying the original array
function prependCat(name) {
  return [name, ...cats];
}

// Return a new array without the last element, without modifying the original array
function removeLastCat() {
  return cats.slice(0, -1);
}

// Return a new array without the first element, without modifying the original array
function removeFirstCat() {
  return cats.slice(1);
}

// Write your solution here!
