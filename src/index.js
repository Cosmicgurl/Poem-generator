function generatePoem(event){
  event.preventDefault();

  new Typewriter('#poem', {
    strings: 'Roses are red, Violettes are blue',
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);