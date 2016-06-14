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
