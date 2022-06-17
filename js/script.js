// Burger
let navigation = document.getElementById("navbarlinks");
let toggleButton = document.getElementById("toggleBurger");
let footer = document.getElementById("footer");

toggleButton.addEventListener("click", function(){
    navigation.classList.toggle("activeNavigation");
    toggleButton.classList.toggle("hide");
    footer.classList.toggle("activeNavigation");
})

window.addEventListener("mouseup", function(event){
    const div=document.getElementById("navbarlinks");
    if (event.target != div && event.target != footer) {
        div.classList.remove("activeNavigation");
        footer.classList.remove("activeNavigation");
        toggleButton.classList.remove("hide");
    }
 });

//email validation 
function validateEmail() {
    let emailField = document.getElementById('email').value;
    let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let span = document.getElementById('error_email');
  
    if (emailField.match(emailStructure)) {
        span.innerHTML = "Your email address is valid";
        span.style.color = 'green';
    } else {
        span.innerHTML = "Your email address is invalid";
        span.style.color = 'red';
    }
  }

