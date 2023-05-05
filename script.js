let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    header.classList.toggle('active');
}

// menu.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     header.classList.remove('active');
// }

const signUp = e => {
    let fname = document.getElementById('fname').value,
        address = document.getElementById('address').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;
        comment = document.getElementById('comment').value;

     // Create user object
  const user = { fname, address, email, pwd, comment };

  // Save user to localStorage
  localStorage.setItem("user", JSON.stringify(user));

  alert("submitted!");

  // Redirect to sign in page
  window.location.href = "./signin.html";
}

function signIn(event) {
    event.preventDefault();
    // Get form values
    const email = document.getElementById("email").value;
    const pwd = document.getElementById("pwd").value;
  
    // Retrieve user from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
  
    // Check if user exists and password is correct
    if (user && user.email === email && user.pwd === pwd) {
      // Redirect to user profile page
      window.location.href = "./last.html";
    } else {
      // Display error message
      alert("Invalid email or password");
    }
  }