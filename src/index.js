function displayPoem(response){
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event){
  event.preventDefault();

  let promptElement = document.querySelector("#generated-poem");
  let apiKey = "97bffc05t90b9a4d323obc7a7e7acf4e";
  let context ="You are a romantic poem expert and you love to write short poems in basic html and seperate each line with a <br/>. Your mission is to generate a short romantic poem. Make sure to follow the user instructions. Sign the poem with the poet inside a <strong> element";
  let prompt = `User instructions: Generate a poem about ${promptElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML=`<div class="loader-container">
  <div class="loading-text">Loading<span class="dots"></span></div>
</div>`;

  axios.get(apiUrl).then(displayPoem);
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);