var authDrawerIsOpen = false;
function openAuthDrawer(action){
  if(authDrawerIsOpen) return;
  var other = action === "signin" ? "signup" : "signin";
  el("#close").classList.remove("hide");
  el("#auth_inputs").classList.remove("hide");
  el("#" + action).classList.add("expand");
  el("#" + other).classList.add("hide");
  el("#auth_inputs").setAttribute("action", "/users/" + action);
  authDrawerIsOpen = action;
}

function closeAuthDrawer(){
  if(!authDrawerIsOpen) return;
  var action = authDrawerIsOpen,
    other = action === "signin" ? "signup" : "signin";
  el("#close").classList.add("hide");
  el("#auth_inputs").classList.add("hide");
  el("#" + action).classList.remove("expand");
  el("#" + other).classList.remove("hide");
  authDrawerIsOpen = false;
}

if(el("#signup")) click("#signup", e => openAuthDrawer("signup"));
if(el("#signin")) click("#signin", e => openAuthDrawer("signin"));
if(el("#close")) click("#close", e => closeAuthDrawer());

if(el("#edit")) ["#edit", "#cancel", "#submit"].forEach(e => click(e, () => {
  el("#edit").classList.toggle("hide");
  el("#cancel").classList.toggle("show");
  el("#submit").classList.toggle("show");
}));

if(el("#bands-content")) click("#bands-content", e => {
  if(e.target.classList.contains("action")) action(e.target);
});

function action(target){
  var name = target.textContent.toLowerCase(),
    drawer = el("." + name, target.parentNode)[0],
    active = el(".active", target.parentNode)[0],
    unhidden = el(".unhide", target.parentNode)[0],
    isActive = target.classList.contains("active");
  if(active) active.classList.remove("active");
  if(unhidden) unhidden.classList.remove("unhide");
  if(!isActive){
    target.classList.add("active");
    drawer.classList.add("unhide");
  }
}

// nothing here for now

function el(id, parent){
  if(!parent) parent = document;
  if(id[0] === "#") return parent.getElementById(id.substr(1));
  if(id[0] === ".") return parent.getElementsByClassName(id.substr(1));
  return parent.getElementsByTagName(id);
}
function click(e, cb){
  e = (e[0] === "#") ? el(e) : el(e)[0]; // getElementById returns one element, anything else returns an array.
  e.addEventListener("click", cb);
}
