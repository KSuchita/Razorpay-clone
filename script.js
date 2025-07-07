document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll("input");
      let valid = true;
      let userData = {};

      inputs.forEach(input => {
        const { name, value } = input;
        if (!value.trim()) {
          alert(`${name || 'Field'} is required`);
          valid = false;
        }
        userData[name || input.placeholder] = value;
      });

      if (valid) {
        alert("Form submitted successfully! (Demo)");
        console.log("Submitted data:", userData);
        form.reset();
      }
    });
  }
});
