"use strict";

window.addEventListener("load", startApp);

function startApp() {
  console.log("app is up and running...");
    document.querySelector("#sign-up").addEventListener("submit", clickSubmit);
    
    document.querySelector("#terms").addEventListener("click", clickAccept);
}

function clickAccept(event) {
    console.log(event.target.checked);
    console.log("accept changed");
    if (event.target.checked === true) {
        document.querySelector("#btn-submit").disabled = false;        
    } else {
        document.querySelector("#btn-submit").disabled = true;
    }

        // document.querySelector("#btn-submit").diabled = true;
}

function clickSubmit(event) {
  console.log("target:");
  console.log(event.target);

  console.log("currentTarget:");
  console.log(event.currentTarget);

  event.preventDefault();

  const signup = {
    fullname: document.querySelector("form").elements.namedItem("fullname").value,
    email: document.querySelector("form").elements.namedItem("email").value,
    username: document.querySelector("form").elements.namedItem("username").value,
    password: document.querySelector("form").elements.namedItem("password").value,
    payment: document.querySelector("form").elements.namedItem("payment").value,
    payevery: document.querySelector("form").elements.namedItem("pay-every").value,
    newsletter: document.querySelector("form").elements.namedItem("newsletter").value,
  };

  console.log(signup);
}
