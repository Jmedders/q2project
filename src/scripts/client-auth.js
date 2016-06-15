var authDrawerIsOpen = false; // This is the state of the auth drawer.
function openAuthDrawer(action){ // Open the auth drawer.
  if(authDrawerIsOpen) return; // If the drawer is open don't do anything.
  var other = action === "signin" ? "signup" : "signin"; // "Other" means the element that wasn't clicked.
  el(".close")[0].classList.add("unhide"); // Show the close button.
  el(".auth")[0].classList.add("unhide"); // Show the inputs.
  el("." + action)[0].classList.add("expand"); // Expand the action you clicked.
  el("." + other)[0].classList.add("hide"); // Hide the other action.
  el(".auth")[0].setAttribute("action", "/users/" + action); // Set action on input form to whatever was clicked.
  authDrawerIsOpen = action; // Set state to whatever you clicked. (this is important for closing the drawer)
}

function closeAuthDrawer(){ // Close the auth drawer.
  if(!authDrawerIsOpen) return; // If the drawer is closed don't do anything.
  var action = authDrawerIsOpen, // The action is whatever the current state is.
    other = action === "signin" ? "signup" : "signin"; // "Other" is the other action.
  el(".close")[0].classList.remove("unhide"); // Hide the close button.
  el(".auth")[0].classList.remove("unhide"); // Hide the inputs.
  el("." + action)[0].classList.remove("expand"); // Make the action smaller.
  el("." + other)[0].classList.remove("hide"); // Show the other action.
  authDrawerIsOpen = false; // Set drawer state to false.
}

click(".signup", e => openAuthDrawer("signup")); // Opens drawer and sets state to "signup".
click(".signin", e => openAuthDrawer("signin")); // Opens drawer and sets state to "signin".
click(".close", e => closeAuthDrawer()); // Closes drawer and sets state to false.
