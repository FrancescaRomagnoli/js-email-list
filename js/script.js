// # elements

const mailContainer = document.getElementById("email-list-container");
let generatedMail;

// # API

for (let i = 0; i < 10; i++) {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => {
      generatedMail = data.response;
      console.log(generatedMail);
    });
}
