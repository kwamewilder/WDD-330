// Returns first form in the document markup
// const form = document.forms[0];

// Returns form in the document named search
// const form = document.forms.search;

// Returns form in document named search
const form = document.forms["search"];

// Returns the input and button elements in the form
// const [input, button] = form.elements;

// Returns the input element in the form named searchInput
// const input = form.searchInput;

// Returns the input element in the form named searchInput
const input = form["searchInput"];
input.value = 'Search Here';

// Display message when user has cursor in the input element of the form
// input.addEventListener("focus", () => alert("focused"), false);

// Display message when user has removed cursor in the input element of the form
// input.addEventListener("blur", () => alert("blurred"), false);

// Display message when user has changed the input element of the form and removed the cursor
// input.addEventListener("change", () => alert("changed"), false);

form.addEventListener("submit", search, false);

input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

function search(event) {
  alert(`You searched for: ${input.value}`);
  // Prevents form from submitting to the normally specified URL
  event.preventDefault();
}