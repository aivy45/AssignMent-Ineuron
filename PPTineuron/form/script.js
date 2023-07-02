// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var date = document.getElementById("date").value;
  var color = document.getElementById("color").value;

  // Perform validation
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  if (email === "") {
    alert("Please enter your email.");
    return;
  }

  if (phone === "") {
    alert("Please enter your phone number.");
    return;
  }

  if (password === "") {
    alert("Please enter a password.");
    return;
  }

  if (age === "" || age < 18) {
    alert("Please enter a valid age.");
    return;
  }

  if (gender === "") {
    alert("Please select your gender.");
    return;
  }

  if (date === "") {
    alert("Please select a date.");
    return;
  }

  if (color === "") {
    alert("Please select a color.");
    return;
  }

  // If all validations pass, display success message
  alert("Form submitted successfully!");
}

// Add form submit event listener
var form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);
