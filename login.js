const URL = "https://weatherapp4-back-eta.vercel.app"

// SIGN-UP
document.querySelector("#register").addEventListener("click", function () {
  const user = {
    name: document.querySelector("#registerName").value,
    email: document.querySelector("#registerEmail").value,
    password: document.querySelector("#registerPassword").value,
  };

  fetch(URL + "/users/signup", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(data => {
    if(data.result) {
      window.location.assign("index.html")
    }
  })
})

// CONNECTION
document.querySelector("#connection").addEventListener("click", function() {
  const user = {
    email: document.querySelector("#connectionEmail").value,
    password: document.querySelector("#connectionPassword").value,
  }

  fetch(URL + "/users/signin", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(data => {
    if(data.result) {
      window.location.assign("index.html")
    }
  })
})