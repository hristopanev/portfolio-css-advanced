window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementsByTagName('body')[0].classList.add('loaded')
  });

  window.onload = function() {
    document.getElementById("button-sumbit").onclick = function fun() {
        alert("Opps... das funktioniert noch nich :)");
    }
}


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}