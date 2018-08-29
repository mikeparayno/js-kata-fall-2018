$(window).on("load", visPopup);

function visPopup() {
  console.log("vindue på plads");

  $("#popup").removeClass("popup_hide");
  $("#popup").addClass("popup_add");

  console.log("tryk på knapper");
  $("#ok").on("click", lukPopup);
  $("#annuller").on("click", lukPopup);
}

function lukPopup() {
  console.log("bevæger sig ned");

  $("#popup").removeClass("popup_add");
  $("#popup").addClass("popup_close");
}
