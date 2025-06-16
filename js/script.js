const messages = [
  [
    "There’s more here than meets the eye...",
    "Pick your language wisely."
  ],
  [
    "Aquí hay más de lo que parece...",
    "Elige tu idioma con sabiduría."
  ]
];

let index = 0;
const line1El = document.getElementById("line1");
const line2El = document.getElementById("line2");

function showMessage() {
  // Clear both lines
  line1El.textContent = "";
  line2El.textContent = "";

  const [line1, line2] = messages[index];

  // Step 1: Show line 1
  line1El.textContent = line1;
  line1El.classList.add("visible");

  // Step 2: Wait 2s, then clear line 1
  setTimeout(() => {
    line1El.classList.remove("visible");
    line1El.textContent = "";
  }, 2000);

  // Step 3: After clearing line 1, show line 2
  setTimeout(() => {
    line2El.textContent = line2;
    line2El.classList.add("visible");
  }, 2500);

  // Step 4: After pause, clear line 2
  setTimeout(() => {
    line2El.classList.remove("visible");
    line2El.textContent = "";
  }, 4500);

  // Step 5: Next language & repeat
  setTimeout(() => {
    index = (index + 1) % messages.length;
    showMessage();
  }, 5000);
}

showMessage();

 const buttons = document.querySelectorAll('.bn632-hover');

  buttons.forEach(button => {
    button.addEventListener('click', e => {
      // Optional: prevent immediate navigation if needed
      // e.preventDefault();

      buttons.forEach(btn => btn.classList.remove('clicked'));
      button.classList.add('clicked');
    });
  });