click(".panel-side", e => {
  if(e.target.classList.contains("remove")) removeMember(e.target);
  if(e.target.classList.contains("add-gig")) addGig(e.target);
  if(e.target.classList.contains("submit-gig")) submitGig(e.target);
  if(e.target.classList.contains("cancel-gig")) cancelGig(e.target);
});

click(".panel", e => {
  if(e.target.classList.contains("gig-song")) openSong(e.target);
});

function openSong(e){
  console.log("open");
  el(".song-info", e.parentNode)[0].classList.toggle("hide");
  el(".song-inputs", e.parentNode)[0].classList.toggle("show");
  e.parentNode.classList.toggle("open");
}

function removeMember(e){
  var parent = e.target.parentNode,
    grandparent = parent.parentNode,
    ancestor = grandparent.parentNode;
  ancestor.removeChild(grandparent);
}

function addGig(e){
  console.log(e.parentNode);
  e.parentNode.classList.toggle("open");
}

function submitGig(e){
  var parent = e.parentNode,
    grandparent = parent.parentNode,
    gigTitle = el(".new-gig")[0].value;
  if(!gigTitle.length) return;
  grandparent.insertBefore(newGig(gigTitle), parent.nextSibling);
  console.log(e.parentNode);
  e.parentNode.classList.remove("open");
}

function newGig(title){
  return t("label", {"for": "new-gig", classes: ["title"]})([
    t("div")(),
    t("div")(title)
  ]);
}

function cancelGig(e){
  el("input", e.parentNode)[0].value = "";
  e.parentNode.classList.remove("open");
}
