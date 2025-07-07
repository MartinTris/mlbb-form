const scriptURL =
  "https://script.google.com/macros/s/AKfycbyYDq-3yAHE5Siq5f_fafXImJNARQsWlSwQfHTAQu5faAEaiRvcX4EJgIlICokXa7cl3A/exec";
const form = document.getElementById("googleForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      console.log("Success!", response);
      alert("Form submitted successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alert("There was an error submitting the form. Please try again.");
    });
});
