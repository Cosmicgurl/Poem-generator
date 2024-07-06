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

  let promptElement = document.querySelector("#generated-poem")
  let apiKey = "97bffc05t90b9a4d323obc7a7e7acf4e";
  let prompt= `User instructions: Generate a poem about ${promptElement}`;
  let context ="You are a romantic poem expert and you love to write short poem and seperate each line with a <br/>. Your mission is to generate a four line romantic poem. Make sure to use the user instructions. Sign the poem with the poet inside a <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);


}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);