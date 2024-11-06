// # elements

const mailContainer = document.getElementById("email-list-container");
const generateBtn = document.getElementById("generate-btn");

let generatedMail;

// # email generation

for (let i = 0; i < 10; i++) {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => {
      generatedMail = data.response;
      console.log(generatedMail);
      mailContainer.innerHTML += `<li>${generatedMail}</li>`;
    });
}

generateBtn.addEventListener("click", () => {
  console.clear();
  mailContainer.innerHTML = ``;
});
