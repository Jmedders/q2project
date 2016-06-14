if(el("#edit")) ["#edit", "#cancel", "#submit"].forEach(e => click(e, () => {
  el("#edit").classList.toggle("hide");
  el("#cancel").classList.toggle("show");
  el("#submit").classList.toggle("show");
}));
