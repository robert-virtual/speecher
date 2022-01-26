const text = document.getElementById("text");
const wordsTitle = document.getElementById("words-title");
// const btnGo = document.getElementById("btn-go");
const wordsContainer = document.querySelector(".words");
let selected = document.createElement("p");
const synth = window.speechSynthesis;
let words = [];

text.onkeyup = () => {
  wordsContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();
  words = text.value.split(" ");
  wordsTitle.textContent = words[0] ? "Words" : "";

  words.forEach((w) => {
    if (!w.trim()) {
      return;
    }
    const p = document.createElement("p");
    p.textContent = w;
    p.onclick = () => {
      selected.classList.remove("clicked");
      p.classList.add("clicked");
      selected = p;
      var utterThis = new SpeechSynthesisUtterance(w);
      synth.speak(utterThis);
    };
    p.classList = "word";
    fragment.append(p);
  });
  wordsContainer.append(fragment);
};
