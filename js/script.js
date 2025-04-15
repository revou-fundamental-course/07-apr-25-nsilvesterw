document.addEventListener("DOMContentLoaded", function () {
  const userName = prompt("Please enter your name:", "Guest");
  if (userName) {
    document.getElementById("name").textContent = userName;
  }

  const form = document.getElementById("messageForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("inputName").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("userMessage").value;

    if (!name || !gender || !email || !phone || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const output = `
      <h3>Your Submission:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    document.getElementById("formOutput").innerHTML = output;
    form.reset();
  });
});