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

var panels = ["gigs", "setlists", "songs"];

panels.forEach(e => click("." + e, panel));

function panel(e){
  var clicked = e.target.textContent.toLowerCase();
  el("." + clicked)[0].classList.add("bg20a5");
  panels.filter(e => e !== clicked).map(e => {el("." + e)[0].classList.remove("bg20a5");});
}

function sidepanel(e){

}

function el(id, parent){
  if(!parent) parent = document;
  if(id[0] === "#") return parent.getElementById(id.substr(1));
  if(id[0] === ".") return parent.getElementsByClassName(id.substr(1));
  return parent.getElementsByTagName(id);
}
function click(e, cb){
  e = (e[0] === "#") ? el(e) : el(e)[0]; // getElementById returns one element, anything else returns an array.
  if(e) e.addEventListener("click", cb);
}
