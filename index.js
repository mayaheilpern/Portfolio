const sendButton = document.getElementById("send");
const input = document.querySelectorAll(".input");
const success = document.querySelector(".success");

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("gmail", "portfolio-template", params).then(async (res) => {
    // (await res) == 200;
    success.classList.add("submitted");
    if (res === 200) {
      success.innerText =
        "Thank you for reaching out. I will get back to you shortly.";
    }
    input.forEach((inputs) => {
      inputs.value = "";
    });
  });

  // input.forEach((inputs) => {
  //   inputs.value = "";
  // });

  // showMessage();
});

// const showMessage = () => {
//   const messageDiv = document.createElement("div");
//   const successMessage = document.createElement("p");

//   successMessage.innerText =
//     "Thank you for reaching out. I will get back to you shortly.";

//   messageDiv.appendChild(success);
//   successMessage.appendChild(messageDiv);
// };
