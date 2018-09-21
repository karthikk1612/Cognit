
function navToggle() {
  //to close
  if (nav.style.height <= "175px") {
    nav.style.height = "40px";
    main.style.marginTop = "0";

    var i = 0;
    for (i = 0; i < menu.length; i++) {
      menu[i].style.opacity = "0.0";
      menu[i].style.marginTop = "0";
    }
document.body.style.backgroundColor = "#161743";
  } else if (nav.style.height <= "50px") {
    //to open
    nav.style.height = "175px";
    main.style.marginTop = "0";
    var i = 0;
    for (i = 0; i < menu.length; i++) {
      menu[i].style.opacity = "1.0";
      menu[i].style.marginTop = "0px";
    }
    document.body.style.backgroundColor = "#161743";
  }
}
