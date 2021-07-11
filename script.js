// Array of colors to choose from.
const colors = ["#f78ae0", "#5bcdf6", "#6a7ab5", "#fadf69", "#3ec37e", "#e9c895"]

function changeBackground() {
  // Assign a random number between 0 and length of array to rndInt.
  var rndInt = Math.floor(Math.random() * (colors.length + 1))
  // Use rndInt as index of colors.
  document.body.style.background = colors[rndInt];
}