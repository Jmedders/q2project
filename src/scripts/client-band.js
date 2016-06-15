var panels = ["gigs", "setlists", "songs"];

panels.forEach(e => click("." + e, panel));

function panel(e){
  var clicked = e.target.textContent.toLowerCase();
  el("." + clicked)[0].classList.add("bg20a5");
  panels.filter(e => e !== clicked).map(e => {el("." + e)[0].classList.remove("bg20a5");});
}

function sidepanel(e){

}
