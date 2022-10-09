function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
  
    const hero = {}; // create an empty object
  
    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value; // create a real name property based on the input field's value
  
    // create a power porperty iterating through super power checkboxes and adds Boolean values to an array
    //   hero.powers = [];
    //   for (let i = 0; i < form.powers.length; i++) {
    //     if (form.powers[i].checked) {
    //       hero.powers.push(form.powers[i].value);
    //     }
    //   }
  
    // create a power porperty based on the super power checkboxes and adds Boolean values to an array
    hero.powers = [...form.powers]
      .filter((box) => box.checked)
      .map((box) => box.value);
  
    // create a category property based on the radio button selected by the user
    hero.category = form.category.value;
  
    // create an age property based on the number input field's value
    hero.age = form.age.value;
  
    // create a city property based on the select field's value
    hero.city = form.city.value;
  
    // create an origin property based on the text area field's value
    hero.origin = form.origin.value;
  
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
  }
  
  // Add event listener to trigger a function when the form has been submitted
  const form = document.forms["hero"];
  form.addEventListener("submit", makeHero, false);
  
  // Validate form to prevent entries with name starting with the letter X
  // form.addEventListener("submit", validate, false);
  
  // function validate(event) {
  //   const firstLetter = form.heroName.value[0];
  //   if (firstLetter.toUpperCase() === "X") {
  //     event.preventDefault();
  //     alert("Your name is not allowed to start with X!");
  //   }
  // }
  
  // Validate form to prevent entries with name starting with the letter X
  // form.heroName.addEventListener("keyup", validateInline, false);
  
  // const label = form.querySelector("label");
  // const error = document.createElement("div");
  // error.classList.add("error");
  // error.textContent = "! Your name is not allowed to start with X.";
  // label.append(error);
  
  // function validateInline() {
  //   const heroName = this.value.toUpperCase();
  //   if (heroName.startsWith("X")) {
  //     error.style.display = "block";
  //   } else {
  //     error.style.display = "none";
  //   }
  // }
  
  // Disable submit button if the name input field is empty
  form.heroName.addEventListener("keyup", disableSubmit, false);
  
  function disableSubmit(event) {
    if (event.target.value === "") {
      document.getElementById("submit").disabled = true;
    } else {
      document.getElementById("submit").disabled = false;
    }
  }