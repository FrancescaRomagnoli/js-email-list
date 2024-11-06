// # elements

const mailContainer = document.getElementById("email-list-container");
let generatedMail;

// # API

fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
