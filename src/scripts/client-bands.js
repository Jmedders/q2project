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
