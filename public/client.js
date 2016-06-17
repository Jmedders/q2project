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

click(".panel-side", e => {
  if(e.target.classList.contains("remove")) removeMember(e.target);
  if(e.target.classList.contains("add-gig")) addGig(e.target);
  if(e.target.classList.contains("submit-gig")) submitGig(e.target);
  if(e.target.classList.contains("cancel-gig")) cancelGig(e.target);
});

click(".panel", e => {
  if(e.target.classList.contains("gig-song") && el("#isAdmin")) openSong(e.target);
});

function openSong(e){
  var songinfo = el(".song-info", e.parentNode)[0],
    songinputs = el(".song-inputs", e.parentNode)[0];

  if(e.parentNode.classList.contains("open")){
    [".song-key", ".time-signature", ".feel", ".tempo"].forEach(c => {
      el(c, songinfo)[0].textContent = el(c, songinputs)[0].value;
    });
  }
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

click(".call", call);

function call(){
  http("get", "/users/call");
  console.log("call");
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

function is(thing, type){
  if(!thing && thing !== 0) return false;
  thing = Object.prototype.toString.call(thing).slice(8,-1);
  return type ? (thing === type) : thing;
}

function t(tag, config){
  if(!config) var config = {};
  if(tag){
    if(tag[0] === "."){config.classes = [tag.substr(1)]; tag = "div";}
    if(tag[0] === "#"){config.id = tag.substr(1); tag = "div";}
  }
  var parent = tag ? document.createElement(tag) : document.createDocumentFragment();
  if(config){
    var i = 0, x = Object.keys(config), j = 0;
    while(i < x.length){
      var key = x[i++], y = config[key];
      if(key === "classes"){while(j < y.length) parent.classList.add(y[j++])}
      else if(key === "click"){parent.addEventListener("click", y)}
      else{parent[key] = y}
    }
  }
  return function(ch, force){
    parent.html = function(){
      var temp = document.createElement("div");
      temp.appendChild(this.cloneNode(true));
      return temp.innerHTML;
    };
    if(force){parent.innerHTML = ch; return parent;}
    if(!ch && ch !== 0) return parent;
    var type = is(ch), k = 0;
    if(type === "String" || type === "Number") parent.textContent = ch;
    if(type.substr(0,4) === "HTML" || type.substr(0, 4) === "Docu") parent.appendChild(ch);
    if(type === "Array") while(k<ch.length) parent.appendChild(ch[k++]);
    return parent;
  };
}

function reqListener () {
  console.log(this.responseText);
}

function http(verb, url, cb){
  var req = new XMLHttpRequest(),
    data = cb || null;
  if(verb === "post") req.setRequestHeader("Content-type", "application/json");
  else if(cb) req.addEventListener("load", cb);
  req.open(verb, url);
  req.send(data);
}
