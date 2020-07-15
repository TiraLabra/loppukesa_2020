function hideNav() {
  document.getElementById("nav").className = "upper-nav-hidden";
}

function showNav() {
  document.getElementById("nav").className = "upper-nav";
}


function reportWindowSize() {
  if (window.innerWidth < 500) {
    hideNav();
  } else {
    showNav();
  }
}

window.onresize = reportWindowSize;
window.onload = reportWindowSize;